import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStar, faSwimmingPool, faTree, faCar, faGem } from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    icon: faBuilding,
    title: 'Prime Location',
    description: 'Situated in the heart of the city with excellent connectivity to all major landmarks and business districts.'
  },
  {
    icon: faStar,
    title: 'Luxury Living',
    description: 'Experience unparalleled luxury with premium finishes, spacious layouts, and world-class amenities.'
  },
  {
    icon: faSwimmingPool,
    title: 'Premium Amenities',
    description: 'State-of-the-art gym, infinity pool, kids play area, party hall, and 24/7 security with CCTV surveillance.'
  },
  {
    icon: faTree,
    title: 'Green Spaces',
    description: 'Beautifully landscaped gardens, terrace gardens, and eco-friendly environment for a healthy lifestyle.'
  },
  {
    icon: faCar,
    title: 'Modern Infrastructure',
    description: 'High-speed elevators, power backup, covered parking, rainwater harvesting, and smart home features.'
  },
  {
    icon: faGem,
    title: 'Investment Value',
    description: 'Excellent appreciation potential in a rapidly developing area with guaranteed returns on investment.'
  },
]

export default function WhyGloryTower() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-primary mb-4">
            WHY THE GLORY TOWER
          </h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of luxury, comfort, and convenience that makes Glory Tower the ideal choice for your dream home.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="text-6xl mb-4 text-primary">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
