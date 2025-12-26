import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Inference of LaMini with Amazon SageMaker using Hugging Face DLC',
      description: 'Created domain in Amazon SageMaker and deployed LaMini-T5-738M using Hugging Face Deep Learning Container. Tuned the model with hyperparameter payload and integrated with Gradio for text2text-generation inference.',
      tech: ['LaMini-T5-738M', 'Amazon SageMaker', 'Hugging Face DLC', 'PyTorch', 'Gradio', 'Python'],
      gradient: 'from-orange-500 to-red-500',
      icon: '🤖',
      github: 'https://github.com/sivaramgs/Inference-of-LaMini-Text2Text-Generation-with-Amazon-SageMaker-using-Hugging-Face-DLC',
    },
    {
      title: 'Serverless Blog Generation with Titan Model Using Bedrock in Lambda',
      description: 'Built serverless blog generation using AWS Lambda and Amazon Bedrock with Titan Text G1 Express model. Created API Gateway to trigger Lambda function via POST request from Postman, monitored CloudWatch logs, and saved generated blogs to S3.',
      tech: ['AWS Lambda', 'Amazon Bedrock', 'Titan Text G1', 'API Gateway', 'S3', 'CloudWatch', 'Postman'],
      gradient: 'from-violet-500 to-purple-500',
      icon: '📝',
      github: 'https://github.com/sivaramgs',
    },
    {
      title: 'Custom WebSearch LLM Agent with Llama3 Instruct 8B Using Ollama',
      description: 'Built custom LLM agent using Llama3 Instruct 8B with Ollama framework. Created planning agent for query generation and integration agent for Google search via Serper API. Scraped web pages and performed quality assessment before generating final response.',
      tech: ['Llama3 Instruct 8B', 'Ollama', 'Serper API', 'Python', 'Web Scraping'],
      gradient: 'from-indigo-500 to-purple-500',
      icon: '🔎',
      github: 'https://github.com/sivaramgs/custom_websearch_llm_agent_with_llama3_instruct_8B_using_ollama',
    },
    {
      title: 'Sentiment Analysis on Bing News Data Using Microsoft Fabric',
      description: 'Ingested data from Bing V7 API using Fabric Data Factory. Transformed data to curated Delta Table with incremental loading. Performed sentiment analysis classifying news as Positive/Negative/Neutral/Mixed. Used DAX queries in Power BI and configured alerts using Data Activator.',
      tech: ['Microsoft Fabric', 'Bing API', 'Data Factory', 'Synapse', 'Power BI', 'Data Activator'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: '📊',
      github: 'https://github.com/sivaramgs/End-to-End-Azure-Data-Engineering-Real-Time-Project',
    },
    {
      title: 'Stream Processing in Databricks Lakehouse with Unity Catalog',
      description: 'Created storage containers in ADLS Gen2 for metadata and tables. Supported batch and streaming workflows. Designed and implemented secure Lakehouse platform with Unity Catalog. Generated workout BPM and gym summary datasets. Automated deployment pipeline in Azure DevOps.',
      tech: ['Azure Databricks', 'Unity Catalog', 'ADLS Gen2', 'Azure DevOps', 'Key Vault', 'PySpark'],
      gradient: 'from-green-600 to-emerald-600',
      icon: '🏋️',
      github: 'https://github.com/sivaramgs/Gymnasiam_Stream-Processing-in-Azure-Databricks-Lakehouse-following-Medallion-Architecture',
    },
    {
      title: 'End to End Azure Data Engineering Real-Time Project',
      description: 'Data ingestion from on-premises SSMS to Azure using Data Factory. Transformed RAW data using Azure Databricks. Loaded clean data (gold tables) to Synapse Analytics. Created interactive dashboard in Power BI. Integrated Azure Active Directory with Key Vault for authentication.',
      tech: ['Azure Data Factory', 'ADLS Gen2', 'Databricks', 'Synapse Analytics', 'Power BI', 'Active Directory'],
      gradient: 'from-sky-500 to-blue-600',
      icon: '☁️',
      github: 'https://github.com/sivaramgs/End-to-End-Azure-Data-Engineering-Real-Time-Project',
    },
    {
      title: 'Generative Adversarial Network for Fashion MNIST with TensorFlow',
      description: 'Preprocessed Fashion MNIST dataset through caching, shuffling, batching, and prefetching. Built Generator to transform random noise into realistic fashion images. Built Discriminator to distinguish fake from real images. Trained GAN for 100 epochs and reviewed performance by plotting losses.',
      tech: ['TensorFlow', 'Fashion MNIST', 'GANs', 'Deep Learning', 'Python'],
      gradient: 'from-pink-500 to-rose-500',
      icon: '👗',
      github: 'https://github.com/sivaramgs/Generative-Adversarial-Neural-Network-for-Fashion-Mnist-with-Tensorflow',
    },
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-[#050505] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
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
              className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              {/* Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{project.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Icons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
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
