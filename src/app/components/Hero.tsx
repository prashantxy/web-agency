'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code, Zap, Layers, Sparkles } from 'lucide-react'

export default function UltimateHeroExperience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInteractive, setIsInteractive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({ 
        x: e.clientX - window.innerWidth / 2, 
        y: e.clientY - window.innerHeight / 2 
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const generateParticles = () => {
    return [...Array(200)].map((_, i) => {
      const size = Math.random() * 3 + 1
      const delay = Math.random() * 5
      const duration = Math.random() * 10 + 5
      const color = ['rgba(74,20,140,0.3)', 'rgba(59,130,246,0.2)', 'rgba(255,255,255,0.1)']

      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size + 'px',
            height: size + 'px',
            backgroundColor: color[Math.floor(Math.random() * color.length)],
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, -30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            delay,
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
          }}
        />
      )
    })
  }

  return (
    <section 
      className="relative min-h-screen bg-black text-white overflow-hidden"
      onMouseEnter={() => setIsInteractive(true)}
      onMouseLeave={() => setIsInteractive(false)}
    >
      {/* Layered Background Effects */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
            circle at ${50 + mousePosition.x / window.innerWidth * 50}% ${50 + mousePosition.y / window.innerHeight * 50}%, 
            rgba(74, 20, 140, 0.2), 
            rgba(0, 0, 0, 1) 60%
          )`,
        }}
        animate={{
          scale: isInteractive ? 1.05 : 1,
          opacity: isInteractive ? 0.8 : 1
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Particle System */}
      <div className="absolute inset-0 z-0">
        {generateParticles()}
      </div>

      {/* Animated Grid Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.1, 0],
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        style={{
          background: `
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          className="text-center max-w-4xl px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.2 
            }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Digital Alchemy
            </span>
            <span className="block text-4xl mt-4 text-white/70">
              Transforming Concepts into Digital Realities
            </span>
          </motion.h1>

          <motion.div 
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a 
              href="#contact"
              className="group relative px-10 py-4 rounded-full 
              bg-gradient-to-r from-purple-600 to-blue-600
              text-white font-bold text-lg
              flex items-center
              hover:scale-105 transition duration-300
              shadow-2xl hover:shadow-purple-500/50"
            >
              <Zap className="mr-3 group-hover:rotate-45 transition" />
              Ignite Your Project
            </a>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div 
            className="flex justify-center mt-16 space-x-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {[
              { 
                icon: Code, 
                title: "Full-Stack Development",
                description: "Cutting-edge solutions across technologies"
              },
              { 
                icon: Layers, 
                title: "Design & UX", 
                description: "Intuitive, elegant user experiences"
              },
              { 
                icon: Sparkles, 
                title: "Innovation", 
                description: "Pushing boundaries of digital potential"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group text-center w-64 opacity-70 hover:opacity-100 transition"
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 
                    p-4 rounded-full shadow-lg group-hover:shadow-xl 
                    group-hover:shadow-purple-500/50 transition"
                  >
                    <feature.icon className="text-white" size={40} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}