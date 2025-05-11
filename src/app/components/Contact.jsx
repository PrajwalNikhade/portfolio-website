import React from 'react'
import Button from './Button'
const Contact = () => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    
  }
  return (
<>  <div className="tx ">
  <h2>Contact</h2>
  <p>Feel free to contact</p>
</div>
    <div className='flex flex-col justify-center  border-2 border-[#FDC435] w-fit mx-auto my-20 p-10 rounded-2xl ' >
      <form action= {`https://formsubmit.co/${process.env.FORM_SUBMIT_ID}`} method="post" >
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
</>
  )
}

export default Contact
