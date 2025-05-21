import React from 'react'
import Image from 'next/image'

const Skills = () => {
  // Array of skills with their names and logo paths
  const skills = [
    { name: 'HTML', logo: './logos/html5-original.svg' },
    { name: 'TailwindCSS', logo: './logos/tailwindcss-original.svg' },
    { name: 'JavaScript', logo: './logos/javascript-original.svg' },
    { name: 'React', logo: './logos/react-original.svg' },
    { name: 'Node.js', logo: './logos/nodejs-plain-wordmark.svg' },
    { name: 'MongoDB', logo: './logos/mongodb-original-wordmark.svg' },
    { name: 'Next.js', logo: './logos/nextjs-original.svg' },
    { name: 'Python', logo: './logos/python-original.svg' },
    { name: 'MySQL', logo: './logos/mysql-original-wordmark.svg' },
    { name: 'Git', logo: './logos/git-original.svg' },
    { name: 'Express.js', logo: './logos/express-original-wordmark.svg' },
    // { name: 'C', logo: './logos/c-original.svg' },
    { name: 'Bootstrap', logo: './logos/bootstrap-original.svg' },
    // Add more skills as needed based on the logos you have
  ]

  return (
    <div className="py-10 bg-[#F9FAFF]">
      <h2 className="text-3xl font-bold text-center mb-8 underline decoration-[#FDC435]">Skills</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 relative mb-3">
                <Image 
                loading='lazy'
                  src={skill.logo}
                  alt={`${skill.name}  logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
