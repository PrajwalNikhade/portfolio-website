import React from 'react'
import Projects from '../components/Projects'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <Image   className='w-full'
    loading='lazy'
    src="./projects-banner.svg" alt="projects-banner" width={100} height={100}/>
    <Projects/>
    </>
  )
}

export default page
