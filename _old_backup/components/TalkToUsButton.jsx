import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function TalkToUsButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <motion.a
        href="tel:+917888593861"
        className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-6 py-3 rounded-full shadow-2xl font-bold text-base flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 10px 30px rgba(193, 129, 31, 0.3)',
            '0 10px 40px rgba(232, 187, 104, 0.5)',
            '0 10px 30px rgba(193, 129, 31, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        Talk to Us
      </motion.a>
      <motion.a
        href="https://wa.me/917888593861"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-black px-5 py-2.5 rounded-full shadow-2xl font-bold text-base flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 10px 30px rgba(37, 211, 102, 0.3)',
            '0 10px 40px rgba(37, 211, 102, 0.5)',
            '0 10px 30px rgba(37, 211, 102, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
        WhatsApp
      </motion.a>
    </div>
  )
}
