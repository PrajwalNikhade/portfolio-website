import React from 'react'
import AboutMain from '../components/AboutMain'
import Skills from '../components/Skills'
import { ToastContainer } from 'react-toastify'
import SEO from '../components/SEO'
const about = () => {

  return (
    <>
      <SEO title={"Prajwal Nikhade-About"} />
      <div className='text-black bg-white
    '>
        <AboutMain />
        <Skills />


      </div>
    </>
  )
}

export default about
