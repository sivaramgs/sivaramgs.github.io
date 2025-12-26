import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const roles = [
    'Senior Data Science Engineer',
    'LLM & GenAI Specialist',
    'MLOps & LLMOps Expert',
    'US Patent Holder',
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex]
      
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a]">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-gray-900 dark:text-white">Sivaram GS</span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-8 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-primary-600 dark:text-primary-400">{text}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Self-driven, quick starter, passionate engineer with 9.5+ years of experience building, 
              fine-tuning, and deploying LLMs and ML systems. US patent holder with expertise in 
              generative AI, model optimization, and impactful presentations to C-suite leaders.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="https://linkedin.com/in/sivaram-gs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://github.com/sivaramgs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </motion.a>
              <motion.a
                href="#contact"
                className="p-3 glass rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
