import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-white py-2 border-b-2 border-golden">
      <div className="container mx-auto px-4 flex items-center justify-end text-sm">
        <motion.a
          href="tel:+917888593861"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-6 py-2 rounded-full font-sans tracking-wide font-bold hover:shadow-lg transition flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPhone} />
          +91 7888593861
        </motion.a>
      </div>
    </div>
  )
}
