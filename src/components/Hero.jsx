import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/project/teaser.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          {/* Top Line */}
          {/* <div className="mb-8">
            <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div> */}
          
          {/* Main Heading */}
          {/* <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-wider mb-6 text-shadow-xl">
            THE GLORY TOWERS
          </h1> */}
          
          {/* Subtitle with background */}
          {/* <div className="bg-black/30 backdrop-blur-md px-8 py-4 rounded-full inline-block">
            <p className="text-2xl tracking-[0.3em] font-light uppercase">
              LUXURY 3 BHK APARTMENTS
            </p>
          </div> */}
          
          {/* Bottom Line */}
          {/* <div className="mt-8">
            <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
