import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ContactModal from './ContactModal'
import { useState } from 'react'

export default function Footer() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false)

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Floor Plans & Site Plans', path: '/#floor-plans' },
    { name: 'Download Brochure', onClick: () => setIsBrochureOpen(true) },
    { name: 'Contact', path: '/contact' },
    { name: 'Project Showcase', path: '/post-showcase' },
    { name: 'Clubhouse Reveal', path: '/post-clubhouse' },
    { name: 'Premium Bedrooms', path: '/post-bedroom' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="bg-gradient-to-r from-primary2 via-secondary2 to-tertiary2 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/logo.png" 
                alt="The Glory Towers" 
                className="h-28 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed mb-4 max-w-md">
                Experience luxury living at its finest with The Glory Towers. Your dream home awaits in the heart of the city with world-class amenities and sophisticated design.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-golden/50 text-sm mb-6">
                <span className="text-golden font-semibold">RERA Registered:</span>
                <span className="text-white font-medium tracking-wide">PBRERA-SAS79-PR1455-112026</span>
              </div>
              <div className="space-y-2 text-white/80">
                <p><FontAwesomeIcon icon={faLocationDot} className="mr-2" />Adjoining gurudwara shri nabha sahib, patiala road, zirkpur, 140603</p>
                <a href="tel:+917888593861" className="block hover:text-golden transition">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />+91 7888593861
                </a>
                <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@glorytowers.com</p>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-golden">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200 cursor-pointer text-left"
                      >
                        → {link.name}
                      </button>
                    ) : link.path.startsWith('/#') ? (
                      <a
                        href={link.path}
                        className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200"
                      >
                        → {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.path}
                        onClick={scrollToTop}
                        className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200"
                      >
                        → {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Connect With Us */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-golden">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary2 transition-all transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary2 transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary2 transition-all transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                </a>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Subscribe to Updates</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-white text-white placeholder-white/60"
                  />
                  <button className="px-6 py-2 bg-white text-primary2 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/20 mt-12 pt-8 text-center text-white/70 space-y-2"
        >
          <p className="text-sm font-semibold text-golden">
            RERA Registered: PBRERA-SAS79-PR1455-112026
          </p>
          <p>&copy; {new Date().getFullYear()} The Glory Towers. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
    <ContactModal 
      isOpen={isBrochureOpen} 
      onClose={() => setIsBrochureOpen(false)} 
      buttonLabel="Download Brochure" 
    />
  </>
)
}
