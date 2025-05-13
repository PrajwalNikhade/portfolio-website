import React from 'react'
import Projects from '../components/Projects'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <div className="relative w-full">
      <Image
        className='w-full h-auto'
        src="/projects-banner.svg"
        alt="projects-banner"
        width={1920}
        height={300}
        priority
        sizes="(max-width: 768px) 100vw, 1920px"
      />
    </div>
    <Projects/>
    </>
  )
}

export default page
