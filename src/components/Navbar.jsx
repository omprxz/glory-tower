import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Glory Tower" className="h-12 w-auto" />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-primary font-semibold hover:text-secondary transition">
            HOME
          </Link>
          <a href="#why-us" className="text-primary font-semibold hover:text-secondary transition">
            WHY US
          </a>
          <a href="#floor-plans" className="text-primary font-semibold hover:text-secondary transition">
            FLOOR PLANS
          </a>
          <Link to="/about" className="text-primary font-semibold hover:text-secondary transition">
            ABOUT
          </Link>
          <Link to="/contact" className="text-primary font-semibold hover:text-secondary transition">
            CONTACT
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
