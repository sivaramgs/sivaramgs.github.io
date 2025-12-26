'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:sivaramgs@outlook.com?subject=${subject}&body=${body}`
    
    // Reset form after opening email client
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-8 max-w-full mx-auto items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col h-full"
          >
            {/* Contact Cards */}
            <div className="flex flex-col justify-start gap-4 h-full">
              <motion.a
                href="mailto:sivaramgs@outlook.com"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-primary-900/50 rounded-lg group-hover:bg-primary-800/60 transition-colors">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-gray-300">sivaramgs@outlook.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/sivaram-gs"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-800/60 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-sm text-gray-300">linkedin.com/in/sivaram-gs</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/sivaramgs"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:shadow-xl transition-all group bg-gray-900/70 backdrop-blur-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-gray-800/80 rounded-lg group-hover:bg-gray-700/80 transition-colors">
                  <Github className="w-6 h-6 text-gray-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-sm text-gray-300">github.com/sivaramgs</p>
                </div>
              </motion.a>

              <div className="glass rounded-xl p-5 flex items-center gap-4 bg-gray-900/70 backdrop-blur-lg border border-gray-700">
                <div className="p-3 bg-green-900/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-sm text-gray-300">Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6 bg-gray-900/70 backdrop-blur-lg border border-gray-700 w-full flex flex-col">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

