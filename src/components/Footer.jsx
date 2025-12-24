import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Floor Plans', path: '/#floor-plans' },
    { name: 'Contact', path: '/contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
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
                alt="Glory Tower" 
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Experience luxury living at its finest with Glory Tower. Your dream home awaits in the heart of the city with world-class amenities and sophisticated design.
              </p>
              <div className="space-y-2 text-white/80">
                <p><FontAwesomeIcon icon={faLocationDot} className="mr-2" />Prime Location, City Center</p>
                <p><FontAwesomeIcon icon={faPhone} className="mr-2" />+971 50 123 4567</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@glorytower.com</p>
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
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.path.startsWith('/#') ? (
                      <a
                        href={link.path}
                        className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200"
                      >
                        → {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={scrollToTop}
                        className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200"
                      >
                        → {link.name}
                      </Link>
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
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all transform hover:scale-110"
                >
                  <span className="text-xl">f</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all transform hover:scale-110"
                >
                  <span className="text-xl">in</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all transform hover:scale-110"
                >
                  <span className="text-xl">ig</span>
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
                  <button className="px-6 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
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
          className="border-t border-white/20 mt-12 pt-8 text-center text-white/70"
        >
          <p>&copy; {new Date().getFullYear()} Glory Tower. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed with ❤️ for luxury living
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
