import { motion } from 'framer-motion'

export default function ComingSoon() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Coming Soon Badge */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-xl opacity-50" />
              <h2 className="relative text-8xl font-bold text-white tracking-wider px-12 py-6 border-8 border-white">
                COMING SOON
              </h2>
            </div>
          </motion.div>
          
          {/* Decorative Stars */}
          <div className="flex justify-center gap-4 mb-12">
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-white text-4xl"
            >
              ✦
            </motion.span>
            <motion.span 
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-white text-5xl"
            >
              ✧
            </motion.span>
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              className="text-white text-4xl"
            >
              ✦
            </motion.span>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('project-views')}
              className="px-12 py-5 bg-white text-primary font-bold text-lg tracking-wider rounded-full shadow-2xl hover:shadow-white/50 transition-all"
            >
              DISCOVER
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-12 py-5 bg-transparent border-4 border-white text-white font-bold text-lg tracking-wider rounded-full hover:bg-white hover:text-primary transition-all"
            >
              REGISTER INTEREST
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
