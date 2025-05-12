"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact = () => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    
  }

  const handleKeyDown = ( e ) => {

    if ( e.key === 'Enter' ) {
    e . preventDefault ( ) ;
    const form = e . target . form ;
    const index = [ ... form ] . indexOf
    ( e . target ) ;
    form . elements [ index + 1 ] ?. focus( ) ;
    
    }
  }

  const submit_button = () => {
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
    });
  }
  return (
<>  <div className="tx flex flex-col justify-center items-center m-3 gap-3 ">
  <h2 className='text-5xl font-bold underline decoration-[#FDC435] '>Contact</h2>
  <p className='text-2xl   '>Feel free to contact</p>
</div>
    <div className='  border-2 border-[#FDC435] md:w-fit w-[90%] mx-auto mb-10 mt-5 p-10 rounded-2xl ' >
      <form action= {`https://formsubmit.co/${process.env.FORM_SUBMIT_ID}`} method="post" className='flex flex-col justify-center'>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_next" value="http://localhost:3000/contact" />
      <p className='text-lg mx-2'>Name</p>
     <input type="text" onKeyDown={handleKeyDown} placeholder='Enter Your Name' className='my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2' name='name'/> 
     <p className='text-lg mx-2'>Email</p>
     <input type="email" onKeyDown={handleKeyDown} placeholder='Enter Your Email' className='my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2' name='email'/> 
     <p className='text-lg mx-2'>Message</p>
     <input type="textarea" onKeyDown={handleKeyDown} placeholder='Enter Your Message' className='my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-10' name='message'/> 
     <Button className={"m-5 p-3"} type='submit' onClick={submit_button}>Send</Button>
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

