import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    
  }
  return (
<>  <div className="tx flex flex-col justify-center items-center m-3 gap-3 ">
  <h2 className='text-5xl font-bold underline decoration-[#FDC435] '>Contact</h2>
  <p className='text-2xl   '>Feel free to contact</p>
</div>
    <div className='  border-2 border-[#FDC435] w-fit mx-auto mb-10 mt-5 p-10 rounded-2xl ' >
      <form action= {`https://formsubmit.co/${process.env.FORM_SUBMIT_ID}`} method="post" className='flex flex-col justify-center'>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_next" value="http://localhost:3000" />
      <p className='text-lg mx-2'>Name</p>
     <input type="text" placeholder='Enter Your Name' className='my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2' name='name'/> 
     <p className='text-lg mx-2'>Email</p>
     <input type="email" placeholder='Enter Your Email' className='my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2' name='email'/> 
     <p className='text-lg mx-2'>Message</p>
     <input type="textarea" placeholder='Enter Your Message' className='my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-10' name='message'/> 
     <Button className={"m-5"} type='submit'>Send</Button>
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
  
</>
  )
}

export default Contact
