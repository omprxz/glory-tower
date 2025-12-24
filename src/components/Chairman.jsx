import { motion } from 'framer-motion'

export default function Chairman() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/project/kitchen.png" 
                alt="Chairman"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <div className="mb-8">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-1 w-20 bg-golden mb-6"
              />
              <h2 className="text-5xl font-bold mb-3 text-golden">Message from</h2>
              <h3 className="text-6xl font-bold mb-6 text-golden">CHAIRMAN</h3>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                "Welcome to The Glory Towers, where luxury meets lifestyle. Our vision is to create not just apartments, but homes that inspire and elevate your everyday living experience."
              </p>
              
              <p className="text-white/90">
                "With meticulous attention to detail and unwavering commitment to quality, we have crafted spaces that reflect sophistication and comfort. Each element has been thoughtfully designed to enhance your quality of life."
              </p>
              
              <p className="text-white/90">
                "The Glory Towers stands as a testament to our dedication to excellence, offering you a home that you'll be proud to call your own. We invite you to be part of this extraordinary journey."
              </p>
              
              <div className="pt-6 border-t border-white/30 mt-8">
                <p className="text-xl text-white/80">Chairman & Managing Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
