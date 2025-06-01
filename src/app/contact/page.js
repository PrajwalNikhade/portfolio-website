import React from 'react'
import Contact from '@/app/components/Contact'
import SEO from '../components/SEO'
const page = () => {
  return (
    <>
      <SEO title={"Contact-Prajwal Nikhade"} />
      <div className='w-screen'>
        <Contact />
      </div>
    </>
  )
}

export default page
