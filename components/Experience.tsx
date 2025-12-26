'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Evertz India Pvt Ltd',
      logo: '/assets/img/evertz_logo.jpg',
      position: 'Senior Data Science Engineer',
      duration: 'April 2020 - Present',
      location: 'Bengaluru, India',
      achievements: [
        'Integrated Glean for a unified AI-powered enterprise search and knowledge discovery.',
        'Designed & deployed an MLOps to detect model drift, reducing customer support overhead.',
        'Delivered evGPT, a production LLM solution working directly with internal stakeholders.',
        'Delivered ML-driven analytics for NBA, MLB, NHL boosting fans engagement by 84%.',
        'Engineered Easelive real-time ETL pipelines, reducing customer reporting time by 90%.',
        'Sphere-headed deployments of inSITE (ELK Stack big data analytics) for global clients.',
        'Scrum Master, driving agile sprints and delivers impactful presentations to C-suite leaders.',
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
        'Built and optimized data pipelines for Digital Lifecare improving accuracy and reliability.',
        'Containerized the Dell EMC Solutions Enabler product, reducing OS image size by 70%.',
        'Awarded US Patent-11256553: Intelligent System to Prioritize Servers for Envisaged Requests.',
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
        'Designed and delivered a Video on Demand non-linear delivery workflow for Comcast.',
        'Enabled automated ad-insertion in content packaging, reduced operator workloads by 60%.',
        'Configured and Deployed File based Media Asset Management Playout systems.',
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
            9.5+ years of delivering impactful AI/ML and data science solutions
          </p>
        </motion.div>

        {/* Timeline */}
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
                {/* Company Header - Centered */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 object-contain rounded-lg bg-white p-2 mb-4 shadow-md"
                  />
                  <h3 className="text-2xl font-bold text-primary-400">
                    {exp.company}
                  </h3>
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

                {/* Achievements - Single line with wrap */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-200 text-center"
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

