import { useRef, forwardRef, useImperativeHandle } from 'react'
import { useSmartAutoplay } from '../hooks/useSmartAutoplay'

/**
 * Universal AutoPlay Video Component
 * 
 * - Plays unmuted with audio enabled (volume = 1) by default
 * - Automatically falls back to muted = true if restricted by browser autoplay policy
 * - Unmutes seamlessly upon the user's first touch or interaction anywhere
 * - Responds to dynamic src changes and component lifecycle
 * - Zero UI indicators, banners, or popups
 */
export const AutoPlayVideo = forwardRef(function AutoPlayVideo(
  { src, sources = [], children, className, poster, loop = true, playsInline = true, ...props },
  forwardedRef
) {
  const localRef = useRef(null)

  useImperativeHandle(forwardedRef, () => localRef.current)

  // Attach intelligent autoplay lifecycle
  useSmartAutoplay(localRef, [src, JSON.stringify(sources)])

  return (
    <video
      ref={localRef}
      autoPlay
      loop={loop}
      playsInline={playsInline}
      poster={poster}
      className={className}
      {...props}
    >
      {src && <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />}
      {sources.map((s, idx) => (
        <source key={idx} src={s.src} type={s.type || 'video/mp4'} />
      ))}
      {children}
    </video>
  )
})

export default AutoPlayVideo

