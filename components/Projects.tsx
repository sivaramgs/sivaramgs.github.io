/**
 * Projects Component
 * 
 * Personal projects showcase featuring:
 * - Seven featured AI/ML and data engineering projects
 * - Detailed project descriptions and tech stacks
 * - Gradient-colored project headers with emojis
 * - GitHub repository links
 * - Responsive 3-column grid layout
 * - Animated cards with hover effects
 * - Call-to-action link to GitHub profile
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /**
   * Featured projects data
   * Each project includes:
   * - title: Project name
   * - description: Detailed project overview
   * - tech: Array of technologies used
   * - gradient: Tailwind gradient classes for visual distinction
   * - icon: Emoji representing project theme
   * - github: Link to GitHub repository
   */
  const projects = [
    {
      title: 'A sovereign, on-premise Multi-Agent Engine for ICD-10 Clinical Coding',
      description: 'An enterprise-grade, privacy-preserving, local-first architecture designed for secure clinical entity extraction and automated multi-axial ICD-10-CM diagnostic code mapping.',
      tech: ['Sea-Lion 8B', 'MERaLiON-8B', 'Nomic Text Model', 'FastAPI', 'Langfuse', 'Ray', 'Ollama', 'Qdrant', 'Redis', 'A2A', 'MCP', 'nginx'],
      gradient: 'from-green-500 to-red-500',
      icon: '',
      github: 'https://github.com/sivaramgs/clinical_coder',
    },
    {
      title: 'TravelAdvisor AI With MCP',
      description: 'Mult-Agent AI travel planner that turns a user trip request into a perfect travel plan with flight and hotel suggestions, weather details, and a complete itinerary.',
      tech: ['Groq LLM', 'Tavily API', 'AviationStack API', 'Openweather API', 'Langchain', 'LangGraph', 'Langsmith', 'FastAPI', 'Render', 'Docker'],
      gradient: 'from-blue-500 to-red-500',
      icon: '',
      github: 'https://github.com/sivaramgs/TravelAdvisor_AI_With_MCP',
    },
    {
      title: 'Agentic AI Customer Service Databricks RAG App With Unity Catalog Functions as MCP Tools',
      description: 'Created a dual source RAG solution for a customer service scenario and used UC functions as MCP tools',
      tech: ['gemma-3-12b-it', 'Databricks AI Agent', 'Delta Tables', 'MLFLOW', 'Unity Catalog Functions', 'RAG', 'MCP'],
      gradient: 'from-orange-500 to-red-500',
      icon: '',
      github: 'https://github.com/sivaramgs/Agentic_AI_Customer_Service_Databricks_RAG_App_with_MCP_Tools',
    },
    {
      title: 'Multi Agent Creative Studio with Google ADK A2A MCP on CloudRun Agent-Runtime',
      description: 'A distributed multimodal multi-agent system for Instagram campaign generation',
      tech: ['Google ADK', 'A2A Protocol', 'MCP', 'Gemini 3.1 Flash LLM', 'Cloud Run','Gemini Enterprise Agent Platform Runtime'],
      gradient: 'from-green-500 to-red-500',
      icon: '',
      github: 'https://github.com/sivaramgs/Multi_Agent_Creative_Studio_with_Google_ADK_A2A_MCP_on_CloudRun_Agent-Runtime',
    },
    {
      title: 'Sentiment Analysis on Bing News Data Using Microsoft Fabric',
      description: 'Ingested data from Bing V7 API using Fabric Data Factory. Transformed data to curated Delta Table with incremental loading. Performed sentiment analysis classifying news as Positive/Negative/Neutral/Mixed. Used DAX queries in Power BI and configured alerts using Data Activator.',
      tech: ['Microsoft Fabric', 'Bing API', 'Data Factory', 'Synapse', 'Power BI', 'Data Activator'],
      gradient: 'from-purple-500 to-red-500',
      icon: '',
      github: 'https://github.com/sivaramgs/End-to-End-Azure-Data-Engineering-Real-Time-Project',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-[#050505] relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Personal AI/ML and Data Engineering projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all group bg-gray-900/80 backdrop-blur-lg border border-gray-700"
            >
              {/* Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden shadow-lg`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl drop-shadow-lg">{project.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-900/40 text-primary-300 rounded text-xs font-medium border border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Icons */}
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/sivaramgs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

