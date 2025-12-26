'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect } from 'react'
import Navbar from '@/components/Navbar'

// Dynamically import components to avoid SSR issues with Three.js
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Certifications = dynamic(() => import('@/components/Certifications'), { ssr: false })
const Patent = dynamic(() => import('@/components/Patent'), { ssr: false })
const Education = dynamic(() => import('@/components/Education'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  useEffect(() => {
    // Force dark mode permanently
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative bg-black">
        <div className="fixed inset-0 z-0">
          <Suspense fallback={<div className="h-screen w-full bg-black" />}>
            <Hero3D />
          </Suspense>
        </div>
        <div className="relative z-10 pt-[100vh]">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Patent />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
