import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function PostShowcase() {
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
            Project Showcase
          </h1>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-2 border-golden/40 bg-white">
            <img 
              src="/project/showcase.png" 
              alt="Showcase" 
              className="w-full h-80 md:h-[450px] object-cover" 
            />
          </div>

          <p className="text-lg text-black/80 mb-10 leading-relaxed">
            The Glory Towers stands as a landmark of architectural excellence in Zirakpur. Featuring 3 high-rise towers across 3 acres with only 4 corner apartments per floor, ensuring complete privacy, natural light, and world-class amenities.
          </p>

          {/* Master Site Plan Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-golden/40 bg-gradient-to-br from-primary via-secondary to-tertiary p-4 md:p-8 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-golden">
                Master Site Plan
              </h2>
              <span className="bg-gradient-to-r from-golden3 via-golden2 to-golden px-4 py-1 rounded-full text-primary font-bold text-sm md:text-base">
                3 Acres • 3 Towers
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-inner">
              <a href="/project/plan/site-plan.png" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/project/plan/site-plan.webp" 
                  alt="Master Site Plan" 
                  className="w-full max-h-[600px] object-contain mx-auto" 
                />
              </a>
            </div>
          </div>

          {/* Typical Cluster Floor Plan Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-golden/40 bg-gradient-to-br from-primary via-secondary to-tertiary p-4 md:p-8 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-golden">
                Typical Floor Plan
              </h2>
              <span className="bg-gradient-to-r from-golden3 via-golden2 to-golden px-4 py-1 rounded-full text-primary font-bold text-sm md:text-base">
                4 Flats Per Floor
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-inner">
              <a href="/project/plan/cluster-floor-plan.png" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/project/plan/cluster-floor-plan.webp" 
                  alt="Typical Floor Plan" 
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
