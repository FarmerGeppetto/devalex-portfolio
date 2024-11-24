import { CodeBracketIcon, PaintBrushIcon, CubeIcon } from '@heroicons/react/24/outline'

const skills = [
  { name: 'Frontend Development', icon: CodeBracketIcon, description: 'React, JavaScript, TypeScript', color: 'bg-blue-500' },
  { name: 'UI/UX Design', icon: PaintBrushIcon, description: 'Figma, Responsive Design', color: 'bg-green-500' },
  { name: 'CSS Frameworks', icon: CubeIcon, description: 'Tailwind CSS, CSS3', color: 'bg-yellow-500' },
]

export default function Skills() {
  return (
    <div id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} 
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gray-700/50">
                  <skill.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

