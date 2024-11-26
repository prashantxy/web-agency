'use client'

import { motion } from 'framer-motion'

const services = [
  { title: 'Web Development', description: 'Custom websites tailored to your needs' },
  { title: 'UI/UX Design', description: 'Intuitive and engaging user experiences' },
  { title: 'E-commerce Solutions', description: 'Powerful online stores for your business' },
  { title: 'Web App Development', description: 'Scalable and responsive web applications' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-purple-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(167, 139, 250, 0.3)' }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-2 text-purple-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

