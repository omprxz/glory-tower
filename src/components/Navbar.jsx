import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact:', formData)
    setIsOpen(false)
    setFormData({ name: '', phone: '' })
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Glory Tower" className="h-12 w-auto brightness-0 invert" />
          </Link>
          
          <div className="flex items-center gap-8">
            <Link to="/" className="text-white font-semibold hover:text-secondary transition">
              HOME
            </Link>
            <a href="#why-us" className="text-white font-semibold hover:text-secondary transition">
              WHY US
            </a>
            <a href="#floor-plans" className="text-white font-semibold hover:text-secondary transition">
              FLOOR PLANS
            </a>
            <Link to="/about" className="text-white font-semibold hover:text-secondary transition">
              ABOUT
            </Link>
            <Link to="/contact" className="text-white font-semibold hover:text-secondary transition">
              CONTACT
            </Link>
            
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition"
            >
              CONTACT US
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[80] w-full max-w-md"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-primary">Contact Us</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-3xl text-gray-400 hover:text-gray-600 transition"
                  >
                    ×
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg tracking-wider shadow-lg hover:shadow-xl transition-all"
                  >
                    SUBMIT
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
