import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sivaram GS | Senior Data Science Engineer',
  description: 'Senior Data Science Engineer with 9.5+ years of experience in LLMs, GenAI, MLOps, and cloud platforms. US Patent holder specializing in AI-powered solutions.',
  keywords: 'Data Science, Machine Learning, LLM, GenAI, MLOps, AWS, Azure, Python, AI Engineer',
  authors: [{ name: 'Sivaram GS' }],
  openGraph: {
    type: 'website',
    title: 'Sivaram GS | Senior Data Science Engineer',
    description: 'Senior Data Science Engineer specializing in LLMs, GenAI, and MLOps',
    url: 'https://sivaramgs.github.io/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
