import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-primary via-secondary to-tertiary flex items-center justify-center text-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-6xl lg:text-7xl font-bold mb-4 text-golden">ABOUT US</h1>
          <div className="h-1 w-32 bg-golden mx-auto" />
        </motion.div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10 text-lg text-black leading-relaxed"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-golden mb-4">The Glory Towers</h2>
              <p>
                A landmark premium residential development on Patiala Road, Zirakpur offering thoughtfully designed 3 BHK apartments across 3 acres with 3 high-rise towers and only 4 corner apartments per floor.
              </p>
            </div>

            {/* Plans Showcase */}
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/90 p-4 rounded-3xl border-2 border-golden/40 shadow-xl">
                <h3 className="text-xl font-bold text-golden mb-2">Master Site Plan</h3>
                <a href="/project/plan/site-plan.png" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/project/plan/site-plan.webp" 
                    alt="Master Site Plan" 
                    className="w-full h-72 object-contain bg-white"
                  />
                </a>
              </div>

              <div className="bg-white/90 p-4 rounded-3xl border-2 border-golden/40 shadow-xl">
                <h3 className="text-xl font-bold text-golden mb-2">Typical Floor Plan</h3>
                <a href="/project/plan/cluster-floor-plan.png" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/project/plan/cluster-floor-plan.webp" 
                    alt="Typical Floor Plan" 
                    className="w-full h-72 object-contain bg-white"
                  />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-golden mb-4">Highlights</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>RERA Registered: PBRERA-SAS79-PR1455-112026</li>
                <li>3 Towers on 3 Acres — All Sides Open</li>
                <li>Only 4 Flats Per Floor — Every Flat is a Corner Unit</li>
                <li>Spacious 1,950 Sq.ft 3 BHK Luxury Apartments</li>
                <li>Prime Location on Patiala Road adjoining Gurudwara Shri Nabha Sahib</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
