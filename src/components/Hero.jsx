import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {/* <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fog.mp4" type="video/mp4" />
      </video> */}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="/project/hero.png" 
          alt="Glory Tower" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center bg-black/30 backdrop-blur-md px-12 py-10 rounded-3xl"
        >
          {/* Top Line */}
          <div className="mb-8">
            <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-wider mb-6 text-shadow-xl">
            THE GLORY TOWER
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl tracking-[0.3em] font-light uppercase mb-8">
            LUXURY 3 BHK APARTMENTS
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8">
            <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
