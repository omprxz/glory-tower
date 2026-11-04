import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ContactModal({ isOpen, onClose, buttonLabel = 'GET A CALLBACK' }) {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' })
  const [downloadStarted, setDownloadStarted] = useState(false)

  const isBrochure = buttonLabel === 'Download Brochure'

  const handleClose = () => {
    setDownloadStarted(false)
    setFormData({ name: '', phone: '', city: '' })
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    if (isBrochure) {
      const link = document.createElement('a')
      link.href = '/project/Brochure.pdf'
      link.download = 'The_Glory_Towers_Brochure.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setDownloadStarted(true)
    } else {
      handleClose()
    }
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
            onClick={handleClose}
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
                  <h3 className="text-3xl font-bold text-golden mb-1">
                    {isBrochure ? 'Download Brochure' : 'Request a Callback'}
                  </h3>
                  <p className="text-black/80 text-sm">
                    {isBrochure ? 'Fill details to download brochure directly' : 'We are here to help you'}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-3xl text-gray-400 hover:text-gray-600 transition leading-none"
                >
                  ×
                </button>
              </div>
              
              {!downloadStarted ? (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-golden bg-primary text-black rounded-xl focus:border-golden focus:outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-golden bg-primary text-black rounded-xl focus:border-golden focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-black font-semibold mb-2">
                      Your City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-golden bg-primary text-black rounded-xl focus:border-golden focus:outline-none transition"
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
              ) : (
                <div className="text-center py-6 mt-4">
                  <div className="w-14 h-14 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-golden text-golden text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-golden mb-2">Download Started!</h3>
                  <p className="text-black/80 text-sm mb-5 leading-relaxed">
                    Your brochure is downloading directly to your device.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="/project/Brochure.pdf"
                      download="The_Glory_Towers_Brochure.pdf"
                      className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-5 py-2.5 rounded-xl font-bold text-sm shadow hover:shadow-lg transition"
                    >
                      Download Again
                    </a>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-5 py-2.5 rounded-xl border-2 border-golden text-black font-bold text-sm hover:bg-golden/10 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              <p className="text-xs text-center text-golden font-semibold mt-4">
                RERA Registered: PBRERA-SAS79-PR1455-112026
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
