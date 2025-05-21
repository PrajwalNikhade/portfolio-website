"use client"
import React from 'react'
import Image from 'next/image'
import { animate, motion, useAnimationControls } from "framer-motion"
import { useState, useEffect } from 'react'

const Home_Skills = () => {
  const [isHovering, setIsHovering] = useState(false)
  const controls = useAnimationControls()
  
  // Effect to control animation based on hover state
  useEffect(() => {
    if (isHovering) {
      controls.stop()
    } else {
      controls.start({ x: "-50%" })
    }
  }, [isHovering, controls])
  
  // Define skills array directly in this component
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
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 underline decoration-[#FDC435]" 
        initial={{opacity:0,y:-50}} 
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y:0}}
      >
        Skills
      </motion.h2>
      <div className="container mx-auto overflow-hidden">
        <div 
          className="flex"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div 
            className="flex flex-row gap-6 px-4 mx-3"
            initial={{ x: "0%" }}
            animate={controls}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <div 
                key={`first-${index}`} 
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-shadow justify-between w-24 h-32 my-2"
              >
                <div className="w-16 h-16 relative mb-3">
                  <Image 
                    loading='lazy'
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
            
            {/* Duplicate set of skills to create seamless loop */}
            {skills.map((skill, index) => (
              <div 
                key={`second-${index}`} 
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-shadow justify-between w-24 h-32 my-2"
              >
                <div className="w-16 h-16 relative mb-3">
                  <Image 
                    loading='lazy'
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home_Skills
