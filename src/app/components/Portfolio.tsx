'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { title: 'E-commerce Platform', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Social Media Dashboard', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Fitness Tracking App', image: '/placeholder.svg?height=300&width=400' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-purple-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(167, 139, 250, 0.3)' }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              </motion.div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

