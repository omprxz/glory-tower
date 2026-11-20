import { motion } from 'framer-motion'

const projectViews = [
  { 
    image: '/project/gt1.png', 
    label: 'Signature Tower',
    area: 'The Iconic Tower'
  },
  { 
    image: '/project/architecture.png', 
    label: 'Architecture',
    area: 'Premium Design'
  },
  { 
    image: '/project/bedroom.png', 
    label: 'Bedroom',
    area: 'Luxurious Interiors'
  },
  { 
    image: '/project/lobby.png', 
    label: 'Lobby Area',
    area: 'Grand Entrance'
  },
  { 
    image: '/project/clubhouse.png', 
    label: 'Clubhouse',
    area: 'Community Hub'
  },
  { 
    image: '/project/gym.png', 
    label: 'Gym & Fitness',
    area: 'Health Club'
  },
  { 
    image: '/project/swimming-pool.png', 
    label: 'Swimming Pool',
    area: 'Aquatic Center'
  },
  { 
    image: '/project/kidsplay.png', 
    label: 'Kids Play Area',
    area: "Children's Recreation Zone"
  },
  { 
    image: '/project/playarea.png', 
    label: 'Play Area',
    area: 'Outdoor Recreation'
  },
  { 
    image: '/project/tennis.png', 
    label: 'Tennis Court',
    area: 'Sports Facility'
  },
  { 
    image: '/project/park.png', 
    label: 'Landscaped Park',
    area: 'Green Spaces'
  },
  { 
    image: '/project/cctv.png', 
    label: 'CCTV Security',
    area: '24/7 Surveillance'
  },
  {
    image: '/project/lift.png',
    label: 'High-Speed Lifts',
    area: 'Modern Elevators'
  },
  {
    image: '/project/balcony.png',
    label: 'Balcony',
    area: 'Outdoor Space'
  }
]

function ProjectViewCard({ view, index }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 mb-20 lg:mb-32`}
    >
      {/* Text Side - Shows first on mobile */}
      <div className="w-full lg:w-1/2 order-1 lg:order-none">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-primary via-secondary to-tertiary p-8 lg:p-12 rounded-3xl shadow-xl border-2 border-golden/30"
        >
          <div className="bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text">
            <h3 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight text-transparent">
              {view.label.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h3>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-golden3 via-golden2 to-golden mb-6" />
          <p className="text-2xl lg:text-3xl text-white/90 font-light leading-relaxed">
            {view.area}
          </p>
        </motion.div>
      </div>

      {/* Image Side - Shows second on mobile */}
      <div className="w-full lg:w-1/2 order-2 lg:order-none">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src={view.image} 
            alt={view.label}
            className="w-full h-[400px] lg:h-[500px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProjectViews() {
  return (
    <section id="project-views" className="bg-gradient-to-br from-primary via-secondary to-tertiary py-20">
      <div className="container mx-auto px-4 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-golden mb-4"
        >
          PROJECT VIEWS
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-golden mx-auto"
        />
      </div>
      
      <div className="container mx-auto px-4">
        {projectViews.map((view, index) => (
          <ProjectViewCard key={index} view={view} index={index} />
        ))}
      </div>
    </section>
  )
}
