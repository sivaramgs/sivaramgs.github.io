/**
 * Experience Component
 * 
 * Professional work experience timeline featuring:
 * - Three major work positions in reverse chronological order
 * - Company logos and detailed achievement lists
 * - Animated cards with glassmorphism effects
 * - Scroll-triggered staggered animations
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /**
   * Work experience data
   * Array of professional positions with detailed achievements
   */
  const experiences = [
    {
      company: 'Evertz India Pvt Ltd',
      logo: '/assets/img/evertz_logo.jpg',
      position: 'Senior Data Science Engineer',
      duration: 'April 2020 - Present',
      location: 'Bengaluru, India',
      achievements: [
        'Served as AI technical lead for a 10-person cross-functional team across India and Poland; defined quarterly AI roadmaps, drove model governance practices, and delivered ROI-driven business cases and strategic AI adoption recommendations to C-Suite stakeholders.',
        'Architected and Built evISR (Intelligence, Surveillance, and Reconnaissance) multi-agent AI system to generate summary of live video streams; showcased at DefTech Conference 2026 as a scalable central command and control solution for synchronized real-time monitoring.',
        'Led end-to-end delivery of evGPT, a production RAG platform (LangGraph, LangChain, GPT-5.2) of indexing 1 GB/day data, in <2 secs latency.',
        'Architected Glean, a unified AI enterprise search platform, indexing 100+ documents/day with sub-second relevance ranking across sources.',
        'Led real-time ML analytics for Easelive (NBA, MLB and NHL), processing 1K–2K events/sec and driving 84% fan engagement uplift.',
        'Owned global inSITE deployments for WBD, Fox, Disney, and du, operating ELK pipelines ingesting 50 GB/day at 99.9% availability SLOs.',
        'Built a custom production MLOps framework (mlflow, zenml) for inSITE Logsnap, orchestrating monitoring across 10–20 models in batch and streaming workloads using custom drift detectors; reduced data drift detection time under 10 minutes via statistical monitoring (PSI, KS-test).',
      ],
      color: 'from-primary-500 to-primary-700',
    },
    {
      company: 'Dell Technologies',
      logo: '/assets/img/dell_technologies.png',
      position: 'Software Engineer 1',
      duration: 'June 2017 - March 2020',
      location: 'Bengaluru, India',
      achievements: [
        'Designed and optimized production ML/DL inference pipelines for Dell Digital Lifecare, powering the Government of India Ayushman Bharat.',
        'Designed and containerized Dell EMC Solutions Enabler, reducing image size by 70% and provided solution to run application under non-root.',
        'Named Inventor on US Patent 11256553, an intelligent system for dynamic server prioritization to improve request handling efficiency.',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      company: 'Tata Elxsi',
      logo: '/assets/img/tata_elxsi.png',
      position: 'Engineer',
      duration: 'July 2016 - June 2017',
      location: 'Bengaluru, India',
      achievements: [
        'Delivered production Video-On-Demand (non-linear delivery workflow) for Comcast, enabling automated C3, C7, D4 (Dynamic Ad Insertion).',
        'Configured and deployed File based Playout systems for Media Asset Management of global clients (PBS, Blue Ant Media, Channel One).',
        'Written backend scripts to automate ad-insertion (National and local ads) in content packaging pipelines, reducing operator workload by 60%.',
      ],
      color: 'from-purple-500 to-purple-700',
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            10 years of delivering impactful AI/ML and data science solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all bg-gray-900/70 backdrop-blur-lg border border-gray-700">
                {/* Company Header - Centered Layout */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Company Logo */}
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 object-contain rounded-lg bg-white p-2 mb-4 shadow-md"
                  />
                  
                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-primary-400">
                    {exp.company}
                  </h3>
                  
                  {/* Position Title */}
                  <p className="text-lg font-semibold text-gray-100 mt-1">
                    {exp.position}
                  </p>
                  
                  {/* Duration & Location */}
                  <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Achievements List */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-200 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                    >
                      <span className="text-primary-400 font-bold">• </span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
