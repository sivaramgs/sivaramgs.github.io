'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      title: 'AWS Cloud Quest: Machine Learning',
      issuer: 'Amazon Web Services',
      credential: 'View Certificate',
      image: '/assets/img/machine_learning.png',
      link: 'https://www.credly.com/badges/51fcc1d2-8f44-4b57-b4b6-77937c97d55b',
    },
    {
      title: 'AWS Cloud Quest: Data Analytics',
      issuer: 'Amazon Web Services',
      credential: 'View Certificate',
      image: '/assets/img/data_analytics.png',
      link: 'https://www.credly.com/badges/16915592-65da-429e-8aca-60d2bda54f9a',
    },
    {
      title: 'AWS Cloud Quest: Serverless Developer',
      issuer: 'Amazon Web Services',
      credential: 'View Certificate',
      image: '/assets/img/serverless_developer.png',
      link: 'https://www.credly.com/badges/82fe44a5-b072-426e-8b80-a390426c4447',
    },
    {
      title: 'AWS Cloud Quest: Solutions Architect',
      issuer: 'Amazon Web Services',
      credential: 'View Certificate',
      image: '/assets/img/solution_architect.png',
      link: 'https://www.credly.com/badges/31da1087-aecd-472a-bd31-14e0778e6342',
    },
    {
      title: 'AWS Cloud Quest: Security',
      issuer: 'Amazon Web Services',
      credential: 'View Certificate',
      image: '/assets/img/security.png',
      link: 'https://www.credly.com/badges/d845fffd-94af-4008-82fb-9c3d04b5ec1e',
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'Amazon Web Services',
      credential: 'View Certificate',
      image: '/assets/img/cloud_practitioner.png',
      link: 'https://www.credly.com/badges/615291ab-ea37-4839-b2dc-8279aaa46dd2',
    },
  ]

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center bg-[#050505] relative z-10 py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
            Certificates
          </h2>
        </motion.div>

        {/* AWS Cloud Quest Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[calc(100vh-200px)] overflow-visible">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass rounded-xl p-4 hover:shadow-2xl transition-all cursor-pointer bg-gray-900/80 backdrop-blur-lg border border-gray-700 h-auto"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-3 bg-gray-800 rounded-lg p-2 shadow-md">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base font-bold mb-1.5 text-white line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-900/30 text-primary-300 rounded-full text-xs font-medium hover:bg-primary-900/50 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {cert.credential}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

