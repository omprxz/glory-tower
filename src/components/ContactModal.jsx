import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ContactModal({ isOpen, onClose, buttonLabel = 'GET A CALLBACK' }) {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    // Add your submission logic here
    onClose()
    setFormData({ name: '', phone: '', city: '' })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-full max-w-md mx-4"
          >
            <div className="bg-primary rounded-3xl p-8 shadow-2xl border-2 border-golden">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-3xl font-bold text-golden mb-1">Request a Callback</h3>
                  <p className="text-white/80 text-sm">We are here to help you</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-3xl text-gray-400 hover:text-gray-600 transition leading-none"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-golden bg-primary text-white rounded-xl focus:border-golden focus:outline-none transition"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-golden bg-primary text-white rounded-xl focus:border-golden focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-golden bg-primary text-white rounded-xl focus:border-golden focus:outline-none transition"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary py-4 rounded-xl font-bold text-lg tracking-wider shadow-lg hover:shadow-xl transition-all"
                >
                  {buttonLabel}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
