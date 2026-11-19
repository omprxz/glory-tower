import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useSmartAutoplay } from '../hooks/useSmartAutoplay'

export default function Hero() {
  const videoRef = useRef(null)

  // Intelligent autoplay: attempts unmuted (volume=1), retries muted on policy block, unmutes on tap anywhere
  useSmartAutoplay(videoRef)

  return (
    <section className="relative w-full aspect-video md:max-h-[calc(100vh-150px)] overflow-hidden bg-[#240c13]">
      {/* 16:9 Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        playsInline
        poster="/project/hero.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/project/teaser.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Light Overlay Gradient - Glory Tower's signature royal wine & gold color theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#36111a]/85 via-[#36111a]/25 via-45% to-transparent pointer-events-none" />

      {/* Subtle warm golden border accent at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-golden/40 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-3.5 sm:px-6 md:px-8 pb-2.5 sm:pb-5 md:pb-12 flex flex-col justify-end items-start z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-left pointer-events-auto"
        >
          {/* Pill Badge */}
          <div className="mb-1 sm:mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-sm border border-golden/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
              <span className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-[#4f1a26] font-sans">
                Under Construction
              </span>
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="!text-[1.25rem] sm:!text-[1.85rem] md:!text-5xl lg:!text-6xl font-serif font-bold text-white tracking-tight sm:tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-0.5 sm:mb-1 leading-tight">
            The Glory Towers
          </h1>
          
          {/* Subtitle / Location */}
          <p className="text-[10px] sm:text-xs md:text-base text-white/95 font-medium tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] flex items-center gap-1.5 flex-wrap">
            <span>Patiala Road, Zirakpur, Punjab</span>
            <span className="hidden md:inline text-golden">•</span>
            <span className="hidden md:inline text-white/85 font-light">Luxury 3 BHK Apartments</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
