'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lightbulb, Target, Star, Rocket, 
  Code, Globe, Layers, PenTool 
} from 'lucide-react'

export default function About() {
  const [activeValue, setActiveValue] = useState(null)

  // More complex container and item variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { 
        type: "spring",
        stiffness: 300 
      }
    }
  }

  // Enhanced core values with more details
  const coreValues = [
    {
      title: "Innovation in every project",
      icon: Lightbulb,
      description: "We constantly push boundaries, exploring cutting-edge technologies and creative solutions that set new industry standards.",
      color: "text-cyan-400"
    },
    {
      title: "Client-centric approach",
      icon: Target,
      description: "Your vision drives our process. We listen, understand, and translate your unique needs into exceptional digital experiences.",
      color: "text-purple-400"
    },
    {
      title: "Quality and attention to detail",
      icon: Star,
      description: "Precision is our hallmark. Every pixel, every line of code is crafted with meticulous care and uncompromising standards.",
      color: "text-emerald-400"
    },
    {
      title: "Continuous learning and improvement",
      icon: Rocket,
      description: "We embrace change, continuously upgrading our skills and methodologies to stay ahead in the rapidly evolving tech landscape.",
      color: "text-orange-400"
    }
  ]

  // Background particle animation
  const ParticleBackground = () => {
    const particles = Array.from({ length: 50 }).map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      delay: Math.random() * 2
    }))

    return (
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
      >
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute bg-purple-500 rounded-full opacity-50"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            initial={{ 
              scale: 0,
              opacity: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              delay: particle.delay,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    )
  }

  return (
    <section 
      id="about" 
      className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title with Complex Animation */}
        <motion.h2 
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-tighter"
          initial={{ 
            opacity: 0, 
            scale: 0.7, 
            rotateX: -90 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateX: 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
        >
          About Our Innovative Journey
        </motion.h2>

        {/* Main Content Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 relative"
          variants={containerVariants}
        >
          {/* Left Column - Description with Hover Effects */}
          <motion.div 
            className="space-y-8 text-gray-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.p 
              className="text-xl leading-relaxed bg-gray-800 p-6 rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(31, 41, 55, 0.8)"
              }}
            >
              We are a passionate team of web developers and designers dedicated to creating exceptional digital solutions. With years of experience and a commitment to innovation, we transform complex challenges into elegant web experiences.
            </motion.p>
            <motion.p 
              className="text-xl leading-relaxed bg-gray-800 p-6 rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(31, 41, 55, 0.8)"
              }}
            >
              Our mission transcends traditional web development. We craft immersive digital ecosystems that not only solve problems but inspire and engage users, turning innovative ideas into transformative digital realities.
            </motion.p>
          </motion.div>

          {/* Right Column - Interactive Core Values */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl font-semibold text-center mb-8 text-purple-300"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Our Core Values
            </motion.h3>

            <AnimatePresence>
              {coreValues.map((value, index) => {
                const Icon = value.icon
                const isActive = activeValue === index

                return (
                  <motion.div
                    key={value.title}
                    layout
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.2 }
                    }}
                    exit={{ opacity: 0, x: 50 }}
                    className={`
                      ${isActive ? 'bg-gray-700 shadow-2xl' : 'bg-gray-800'}
                      rounded-xl p-6 cursor-pointer transition-all duration-300 
                      transform hover:scale-105 hover:shadow-xl
                    `}
                    
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        className={`${value.color}`}
                      >
                        <Icon size={36} strokeWidth={1.5} />
                      </motion.div>
                      <h4 className="text-xl font-semibold text-gray-200">
                        {value.title}
                      </h4>
                    </div>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto'
                        }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-400 mt-4"
                      >
                        {value.description}
                      </motion.p>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}