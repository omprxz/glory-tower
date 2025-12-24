import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    budget: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-primary mb-4">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-gray-600">
            Register your interest and our team will get back to you shortly
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition"
                  placeholder="+971 50 123 4567"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition bg-white"
                >
                  <option value="">Select your budget</option>
                  <option value="1-2">AED 1M - 2M</option>
                  <option value="2-3">AED 2M - 3M</option>
                  <option value="3-5">AED 3M - 5M</option>
                  <option value="5+">AED 5M+</option>
                </select>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg tracking-wider shadow-lg hover:shadow-xl transition-all"
              >
                SUBMIT INQUIRY
              </motion.button>
            </form>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
              <img 
                src="/project/file_00000000ea007208b89befdd1aa304cf.png" 
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
