import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DownloadBrochure() {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setFormData({ name: '', phone: '', city: '' })
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-16 min-h-[70vh] mt-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img src="/project/architecture.png" alt="Brochure" className="w-full max-w-xl rounded-3xl shadow-2xl mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="bg-primary rounded-3xl p-10 shadow-2xl border-2 border-golden">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent text-center">Download Brochure</h1>
            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-golden bg-primary text-white rounded-xl focus:border-golden focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-golden bg-primary text-white rounded-xl focus:border-golden focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Your City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-golden bg-primary text-white rounded-xl focus:border-golden focus:outline-none transition"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary py-4 rounded-xl font-bold text-lg tracking-wider shadow-lg hover:shadow-xl transition-all mt-2"
                >
                  DOWNLOAD BROCHURE
                </motion.button>
              </form>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-golden mb-4">Thank you!</h2>
                <p className="text-white/90">We have received your request.<br />Our team will send you the brochure soon.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
