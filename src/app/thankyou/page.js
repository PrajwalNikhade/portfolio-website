import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import Link from 'next/link'
const thankyou = () => {
  return (
 <>
 <div className="bg-[#F9FAFF] h-screen">
  <div className='main flex flex-col justify-center items-center mt-20 gap-4'>
    <div className='img'>
      <Image src="/letter.png" alt="thankyou" width={100} height={100}/>
    </div>
    <div className='text flex justify-center items-center flex-col gap-3.5'>
     <h3 className='text-3xl'>Thank You for submitting form</h3>
    <h4 className='text-xl'>You will get reply in your email soon </h4>

  </div>
  <div className='btn'>
  <Link  href={"/"}>
   <Button>{"Back to Home Page"}</Button>
   </Link>
  </div>
 </div>
 </div>
 </>
  )
}

export default thankyou
