import { motion } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ContactModal from './ContactModal'

export default function ComingSoon() {
  const [showModal, setShowModal] = useState(false)
  const [modalLabel, setModalLabel] = useState('')
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-primary via-secondary to-tertiary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2 rounded-full bg-white border-2 border-golden/50 shadow-md mb-6 font-sans"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-golden text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-bold text-gray-900 tracking-wide">
                <span className="text-golden font-extrabold uppercase mr-1.5">RERA Registered:</span>
                <span className="text-primary2 font-black font-mono">PBRERA-SAS79-PR1455-112026</span>
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-golden mb-6 leading-tight">
              Your Dream Home
              <br />
              <span className="text-black">Awaits</span>
            </h2>
            
            <p className="text-xl text-black mb-8 leading-relaxed">
              Experience luxury living at its finest with premium 3 BHK apartments, world-class amenities, and strategic location. Register your interest today to get exclusive benefits.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-golden rounded-full"></div>
                <p className="text-black font-semibold">RERA Registered (PBRERA-SAS79-PR1455-112026) with 100% Clear Approvals</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <p className="text-black">Limited Units Available</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <p className="text-black">Early Bird Discounts</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <p className="text-black">Flexible Payment Plans</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Submit Inquiry
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setShowModal(true); setModalLabel('Download Brochure'); }}
                className="px-10 py-4 border-2 text-white font-bold text-lg rounded-lg bg-primary2 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-black shadow-xl"
            >
              <h3 className="text-5xl font-bold mb-2">3</h3>
              <p className="text-lg opacity-90">High Rise Towers</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white shadow-xl"
            >
              <h3 className="text-5xl font-bold mb-2">3</h3>
              <p className="text-lg opacity-90">Acres Project</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-secondary to-primary p-8 rounded-2xl text-black shadow-xl"
            >
              <h3 className="text-5xl font-bold mb-2">1950</h3>
              <p className="text-lg opacity-90">Sqft Area</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl text-white shadow-xl"
            >
              <h3 className="text-5xl font-bold mb-2">3 BHK</h3>
              <p className="text-lg opacity-90">BHK Luxury Apartments</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} buttonLabel={modalLabel || undefined} />
    </section>
  )
}
