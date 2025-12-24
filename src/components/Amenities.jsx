import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHotel,
  faDumbbell,
  faSwimmingPool,
  faChild
} from '@fortawesome/free-solid-svg-icons'

const amenities = [
  {
    icon: faHotel,
    title: 'Modern Clubhouse',
    description: 'Fully equipped clubhouse with indoor games, party hall, and lounge area'
  },
  {
    icon: faDumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with modern equipment and yoga/aerobics studio'
  },
  {
    icon: faSwimmingPool,
    title: 'Swimming Pool',
    description: 'Temperature-controlled swimming pool with separate kids pool'
  },
  {
    icon: faChild,
    title: 'Kids Play Area',
    description: 'Safe and engaging play zone for children with modern equipment'
  },
]

export default function Amenities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-primary mb-4">
            WORLD-CLASS AMENITIES
          </h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy a lifestyle of comfort and convenience with our premium facilities
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-white text-center"
            >
              <div className="text-6xl mb-4">
                <FontAwesomeIcon icon={amenity.icon} />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {amenity.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
