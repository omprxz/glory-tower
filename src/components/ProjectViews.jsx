import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projectViews = [
  { 
    image: '/project/20251216_144118.jpg', 
    label: 'Exterior View',
    area: 'Main Building Facade'
  },
  { 
    image: '/project/20251216_144205.jpg', 
    label: 'Lobby Area',
    area: 'Grand Entrance'
  },
  { 
    image: '/project/glory.webp', 
    label: 'Building View',
    area: 'Tower Perspective'
  },
  { 
    image: '/project/file_000000005d147208861bcb8625ce6fe0.png', 
    label: 'Kids Play Area',
    area: "Children's Recreation Zone"
  },
  { 
    image: '/project/file_0000000074d072089faca04f7d8f7df9.png', 
    label: 'Swimming Pool',
    area: 'Aquatic Center'
  },
  { 
    image: '/project/file_00000000ced8720880cb8658d4180c4f.png', 
    label: 'Gym & Fitness',
    area: 'Health Club'
  },
]

function ProjectViewCard({ view, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="sticky top-20 h-screen flex items-center justify-center"
    >
      <div className="relative w-full h-screen">
        <div className="relative h-full overflow-hidden">
          <img 
            src={view.image} 
            alt={view.label}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 bg-white/50 backdrop-blur-sm px-8 py-6 rounded-br-3xl">
            <h3 className="text-4xl font-bold mb-2 text-primary">
              {view.label}
            </h3>
            <p className="text-xl text-primary/80">
              {view.area}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectViews() {
  return (
    <section id="project-views" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-primary mb-4"
        >
          PROJECT VIEWS
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-secondary mx-auto"
        />
      </div>
      
      <div className="relative">
        {projectViews.map((view, index) => (
          <ProjectViewCard key={index} view={view} index={index} />
        ))}
      </div>
    </section>
  )
}
