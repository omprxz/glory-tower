import { useEffect, useRef } from 'react'
import { playWithIntelligentAutoplay } from '../utils/autoplayManager'

/**
 * React hook to enforce intelligent autoplay behavior across any video element or player:
 * - Attempts unmuted autoplay first (muted = false, volume = 1)
 * - Automatically falls back to muted = true if restricted by browser policy
 * - Seamlessly un-mutes upon the user's first interaction anywhere on the screen
 * - Re-evaluates cleanly on source/dependency changes or remounts
 */
export function useSmartAutoplay(videoRef, deps = []) {
  const cleanupRef = useRef(null)

  useEffect(() => {
    const video = videoRef?.current
    if (!video) return

    if (cleanupRef.current) {
      cleanupRef.current()
    }

    cleanupRef.current = playWithIntelligentAutoplay(video, { volume: 1 })

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [videoRef, ...deps])
}

export default useSmartAutoplay

