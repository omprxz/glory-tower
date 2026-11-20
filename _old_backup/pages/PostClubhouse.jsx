import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function PostClubhouse() {
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
            Clubhouse Reveal
          </h1>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-2 border-golden/40 bg-white">
            <img 
              src="/project/clubhouse.png" 
              alt="Clubhouse" 
              className="w-full h-80 md:h-[450px] object-cover" 
            />
          </div>

          <p className="text-lg text-black/80 mb-10 leading-relaxed">
            Step inside the world-class clubhouse at The Glory Towers, featuring a gymnasium, rooftop swimming pool, yoga room, banquet hall, gaming lounge, and landscaped recreation spaces designed for leisure and luxury living.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-golden/40 bg-gradient-to-br from-primary via-secondary to-tertiary p-4 md:p-8 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-golden">
                Clubhouse Amenities
              </h2>
              <span className="bg-gradient-to-r from-golden3 via-golden2 to-golden px-4 py-1 rounded-full text-primary font-bold text-sm md:text-base">
                World-Class Leisure
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-inner">
              <a href="/project/clubhouse-amenities-brochure.png" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/project/clubhouse-amenities-brochure.webp" 
                  alt="Clubhouse Amenities" 
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
