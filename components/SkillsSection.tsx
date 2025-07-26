const skills = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
  ],
  backend: [
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Supabase',
    'Firebase',
  ],
  tools: [
    'Git',
    'Docker',
    'AWS',
    'CI/CD',
    'Vercel',
  ],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Others</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}