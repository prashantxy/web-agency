'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-purple-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-purple-300 font-bold mb-2">Name</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-300 font-bold mb-2">Email</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-purple-300 font-bold mb-2">Message</label>
            <motion.textarea 
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              id="message" 
              name="message" 
              rows={4} 
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
              required
            ></motion.textarea>
          </div>
          <motion.button 
            type="submit" 
            className="bg-purple-600 text-white px-6 py-3 rounded-md font-bold hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

