import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function TalkToUsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Talk to us:', formData)
    // Add your submission logic here
    setIsOpen(false)
    setFormData({ name: '', phone: '' })
  }

  return (
    <>
      {/* Floating Talk to Us Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full shadow-2xl font-bold text-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 10px 30px rgba(79, 26, 38, 0.3)',
            '0 10px 40px rgba(202, 67, 92, 0.5)',
            '0 10px 30px rgba(79, 26, 38, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FontAwesomeIcon icon={faComments} className="mr-2" />
        TALK TO US
      </motion.button>

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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-primary">Get in Touch</h3>
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
