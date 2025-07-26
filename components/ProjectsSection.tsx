'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: 'トライアスロンコミュニティサイト',
    description: 'トライアスロンコミュニティのためのWebサイト。イベント情報の管理、メンバー登録、コミュニティ機能を実装。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'React'],
    github: 'https://github.com/hit0sh1/triathlon-community-site',
    demo: 'https://triathlon-community-site.vercel.app/',
  },
  {
    id: 2,
    title: 'クイズアプリ',
    description: 'インタラクティブなクイズアプリケーション。多様なクイズ形式とスコア管理機能を搭載。',
    technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
    github: 'https://github.com/hit0sh1/quiz-app',
    demo: 'https://quiz-app-seven-orcin-64.vercel.app/',
  },
  {
    id: 3,
    title: 'トライスーツECサイト',
    description: 'トライアスロン用ウェアの専門ECサイト。商品管理、ショッピングカート、決済機能を実装。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'E-commerce'],
    github: 'https://github.com/hit0sh1/trisuit-store',
    demo: 'https://trisuit-store-8i4vxwqyn-hit0sh1s-projects.vercel.app/',
  },
  {
    id: 4,
    title: 'イベントサイト',
    description: 'トライアスロンイベント「あらはトライアスロン」の公式サイト。イベント情報、参加登録機能を実装。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/hit0sh1/araha-triathlon',
    demo: 'https://araha-triathlon.vercel.app/',
  },
]

interface OGPData {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function ProjectsSection() {
  const [ogpImages, setOgpImages] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    const fetchOGPImages = async () => {
      const imagePromises = projects.map(async (project) => {
        try {
          console.log(`Fetching OGP for project ${project.id}:`, project.demo)
          const response = await fetch(`/api/ogp?url=${encodeURIComponent(project.demo)}`)
          console.log(`Response status for ${project.demo}:`, response.status)
          
          if (!response.ok) {
            console.error(`API request failed for ${project.demo}:`, response.status, response.statusText)
            return { id: project.id, image: `/project-placeholder.svg` }
          }
          
          const data: OGPData = await response.json()
          console.log(`OGP data for ${project.demo}:`, data)
          
          const finalImage = data.image || `/project-placeholder.svg`
          console.log(`Final image for ${project.demo}:`, finalImage)
          
          return { id: project.id, image: finalImage }
        } catch (error) {
          console.error('Failed to fetch OGP for', project.demo, error)
          return { id: project.id, image: `/project-placeholder.svg` }
        }
      })

      const results = await Promise.all(imagePromises)
      const imageMap = results.reduce((acc, { id, image }) => {
        acc[id] = image
        return acc
      }, {} as { [key: number]: string })

      setOgpImages(imageMap)
    }

    fetchOGPImages()
  }, [])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img 
                    src={ogpImages[project.id] || `/project-placeholder.svg`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}