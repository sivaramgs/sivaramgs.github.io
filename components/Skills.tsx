/**
 * Skills Component
 * 
 * Technical skills showcase featuring:
 * - Six categorized skill groups (Languages, Databases, Platforms, Libraries, MLOps, Frameworks)
 * - Icon-based visual representation for each category
 * - Interactive hover effects on skill badges
 * - Grid layout with gradient-colored category headers
 * - Scroll-triggered staggered animations
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Cloud, Brain, Cpu, GitBranch } from 'lucide-react'

const Skills = () => {
  // Reference for intersection observer
  const ref = useRef(null)
  // Trigger animations when section comes into view
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /**
   * Skills categorized by domain
   * Each category includes:
   * - title: Category name
   * - icon: Lucide React icon component
   * - skills: Array of technology/tool names
   * - color: Tailwind gradient classes for visual distinction
   */
  const skillCategories = [
    {
      title: 'Agentic AI & LLM Orchestration',
      icon: LLM,
      skills: ['LangGraph', 'CrewAI', 'AutoGen', 'LangChain', 'MCP', 'Google ADK', 'IBM BeeAI', 'MCP', 'A2A', 'Agent SDK', 'Agentcore'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'AI & Data Science',
      icon: AI,
      skills: ['PyTorch', 'PySpark', 'Python', 'Optuna', 'Advanced Tracking (BoT-SORT)', 'RF-DETR', 'Video LLaVA', 'vLLM', 'Ollama', 'LoRA', 'QLoRA'],
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Data Architecture (RAG & Graph)',
      icon: Data,
      skills: ['Pinecone', 'PGVector', 'Neo4j', 'PostgreSQL', 'Redis', 'Snowflake', 'Databricks', 'DBT'],
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      title: 'Production & Observability',
      icon: Observability,
      skills: ['LangSmith', 'MLflow', 'ZenML', 'Kedro', 'Airflow', 'Kafka', 'Deep Eval'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Kubernetes (K8s)', 'Docker', 'Istio', 'ELK Stack', 'MinIO'],
      color: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Enterprise Vibe Coding Tools',
      icon: GitBranch,
      skills: ['Claude CLI', 'Gemini CLI', 'Github Co-pilot'],
      color: 'from-pink-500 to-pink-700',
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-[#050505] relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Comprehensive technical stack across AI/ML, Cloud, and Modern Software Engineering
          </p>
        </motion.div>

        {/* Skills Grid - Responsive 3-column layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 hover:shadow-2xl transition-all bg-gray-900/70 backdrop-blur-lg border border-gray-700"
              >
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800 rounded-full text-sm font-medium shadow-sm border border-gray-600 text-gray-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

