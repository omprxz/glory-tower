/**
 * Intelligent Autoplay Manager
 *
 * - Always attempts autoplay with audio enabled (muted = false, volume = 1).
 * - If the browser blocks unmuted autoplay, automatically retries with muted = true.
 * - Seamless fallback playback without throwing uncaught errors.
 * - In muted fallback state, listens for any user interaction anywhere on the page
 *   (click, tap, keypress, pointerdown/up) to seamlessly unmute audio to volume = 1.
 * - Handles play promises, dynamic source changes, lifecycle cleanup, and abort errors.
 * - Zero UI indicators, buttons, or badges.
 */

export function playWithIntelligentAutoplay(video, options = {}) {
  if (!video) return () => {}

  const targetVolume = options.volume !== undefined ? options.volume : 1
  let isCleanedUp = false
  let interactionListenersAttached = false

  const cleanupListeners = () => {
    if (!interactionListenersAttached) return
    interactionListenersAttached = false
    const events = ['click', 'pointerdown', 'pointerup', 'touchstart', 'touchend', 'keydown']
    events.forEach((evt) => {
      window.removeEventListener(evt, onUserInteraction, true)
    })
  }

  const unmuteOnInteraction = () => {
    if (isCleanedUp || !video) return
    video.muted = false
    video.volume = targetVolume
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Successfully playing unmuted
          cleanupListeners()
        })
        .catch(() => {
          // If still constrained by browser, keep listeners active for next gesture
        })
    }
  }

  const onUserInteraction = () => {
    unmuteOnInteraction()
  }

  const attachInteractionFallback = () => {
    if (interactionListenersAttached || isCleanedUp) return
    interactionListenersAttached = true
    const events = ['click', 'pointerdown', 'pointerup', 'touchstart', 'touchend', 'keydown']
    events.forEach((evt) => {
      window.addEventListener(evt, onUserInteraction, { capture: true, passive: true })
    })
  }

  const attemptAutoplay = () => {
    if (isCleanedUp || !video) return

    // Step 1: Always attempt autoplay with audio enabled (muted = false, volume = targetVolume)
    video.muted = false
    video.volume = targetVolume

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay with audio succeeded!
          cleanupListeners()
        })
        .catch((error) => {
          if (isCleanedUp) return

          // Ignore AbortError caused by rapid source changes or DOM removal
          if (error && error.name === 'AbortError') return

          // Step 2: Browser blocked unmuted autoplay -> seamlessly retry with muted = true
          video.muted = true
          const mutedPlayPromise = video.play()
          if (mutedPlayPromise !== undefined) {
            mutedPlayPromise
              .then(() => {
                // Step 3: Video is now playing muted -> attach tap/interaction fallback anywhere
                attachInteractionFallback()
              })
              .catch(() => {
                // Even if muted autoplay was queued, attach interaction fallback so tap starts it
                attachInteractionFallback()
              })
          }
        })
    }
  }

  // If video metadata is already loaded, start immediately; otherwise wait for canplay
  if (video.readyState >= 2) {
    attemptAutoplay()
  } else {
    const onCanPlay = () => {
      video.removeEventListener('canplay', onCanPlay)
      attemptAutoplay()
    }
    video.addEventListener('canplay', onCanPlay, { once: true })
  }

  return () => {
    isCleanedUp = true
    cleanupListeners()
  }
}

