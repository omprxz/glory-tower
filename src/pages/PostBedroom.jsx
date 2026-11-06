import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function PostBedroom() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent">
            Premium Bedrooms
          </h1>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-2 border-golden/40 bg-white">
            <img 
              src="/project/bedroom.png" 
              alt="Bedroom" 
              className="w-full h-80 md:h-[450px] object-cover" 
            />
          </div>

          <p className="text-lg text-black/80 mb-10 leading-relaxed">
            Experience the epitome of comfort and elegance in the premium 3 BHK residences at The Glory Towers. Each bedroom features spacious layouts, large private balconies, en-suite bathrooms, and panoramic open views.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-golden/40 bg-gradient-to-br from-primary via-secondary to-tertiary p-4 md:p-8 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-golden">
                3 BHK Floor Plan
              </h2>
              <span className="bg-gradient-to-r from-golden3 via-golden2 to-golden px-4 py-1 rounded-full text-primary font-bold text-sm md:text-base">
                1,950 Sq.ft
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-inner">
              <a href="/project/plan/unit-floor-plan.png" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/project/plan/unit-floor-plan.webp" 
                  alt="3 BHK Unit Floor Plan" 
                  className="w-full max-h-[600px] object-contain mx-auto" 
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
