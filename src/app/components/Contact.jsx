"use client"
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  // Error state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  
  // Validate form - MOVED INSIDE THE COMPONENT
  const validateForm = () => {
    let valid = true
    const newErrors = { name: '', email: '', message: '' }
    
    // Name validation - at least 2 characters
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
      valid = false
    }
    
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      valid = false
    }
    
    // Message validation - at least 10 characters
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
      valid = false
    }
    
    setErrors(newErrors)
    return valid
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form before submission
    if (validateForm()) {
      // Form is valid, proceed with submission
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // You can add your form submission logic here
      // For example, send data to an API
    } else {
      // Form has errors
      toast.error("Please fill correct information ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      })
    }
  }

  const handleKeyDown = ( e ) => {
    if ( e.key === 'Enter' ) {
      e.preventDefault();
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1]?.focus();
    }
  }

  // Remove this function as it's not being used correctly and causes errors
  // The submit_button function references 'input' which doesn't exist
  // and it's redundant with handleSubmit
  
  return (
    <>  
      <div className="tx flex flex-col justify-center items-center m-3 gap-3 ">
        <h2 className='text-5xl font-bold underline decoration-[#FDC435] '>Contact</h2>
        <p className='text-2xl'>Feel free to contact</p>
      </div>
      <div className='border-2 border-[#FDC435] md:w-fit w-[90%] mx-auto mb-10 mt-5 p-10 rounded-2xl'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
          <input type="hidden" name="_captcha" value="false"/>
          
          <p className='text-lg mx-2'>Name</p>
          <input 
            type="text" 
            placeholder='Enter Your Name' 
            className={`my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2 ${errors.name ? 'border-red-500' : ''}`} 
            name='name'
            value={formData.name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          /> 
          {errors.name && <p className="text-red-500 text-sm ml-2">{errors.name}</p>}
          
          <p className='text-lg mx-2'>Email</p>
          <input 
            type="email" 
            placeholder='Enter Your Email' 
            className={`my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2 ${errors.email ? 'border-red-500' : ''}`} 
            name='email'
            value={formData.email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          /> 
          {errors.email && <p className="text-red-500 text-sm ml-2">{errors.email}</p>}
          
          <p className='text-lg mx-2'>Message</p>
          <textarea  
            placeholder='Enter Your Message' 
            className={`my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2 min-h-[100px] ${errors.message ? 'border-red-500' : ''}`} 
            name='message'
            value={formData.message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          /> 
          {errors.message && <p className="text-red-500 text-sm ml-2">{errors.message}</p>}
          
          <Button className={"m-5 p-3"} type='submit'>Send</Button>
        </form>
      </div>
      
      <div className="logos flex flex-col gap-2 justify-center items-center my-5  ">
    
      <h4 className='font-bold underline decoration-[#FDC435] text-3xl my-2'>Other ways to contact</h4>
      <div className="flex flex-row gap-3"> 
            <Link href="https://linkedin.com" target="_blank">
              <Image src="/bi_linkedin.svg" alt="linkedin" width={50} height={50} className='hover:scale-110'/>
            </Link>
            <Link href="mailto:your-email@example.com">
              <Image src="/bi_envelope-fill.svg" alt="gmail" width={50} height={50} className='hover:scale-110'/>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Image src="/icons8-github.svg" alt="github" width={50} height={50} className='hover:scale-110'/>
            </Link>
      </div>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
</>
  )
}
export default Contact

