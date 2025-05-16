import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-[#FDC435] flex flex-col md:flex-row justify-around py-4'>
        <div className=' text-3xl text-center md:text-left my-2 md:my-auto'>Prajwal Nikhade</div>
        <div className='flex flex-col gap-1 md:gap-2 justify-center items-center my-2'>
            <p>Portfolio</p>
            <p>All rights reserved</p>
            <p>&copy; Prajwal</p>
        </div>
        <div className="logos flex flex-row gap-2 justify-center items-center my-2 md:my-auto">
           <Link href={"https://linkedin.com/in/prajwalnikhade"} target='_blank' rel="noopener noreferrer">
           <Image loading='lazy' src="/bi_linkedin.svg" alt="linkedin"  width={40} height={40} className="md:w-[50px] md:h-[50px] hover:scale-125"/>
           </Link>
           <Link href={"mailto:prajwalnikhade09@gmail.com"} target='_blank' rel="noopener noreferrer">
           <Image loading='lazy' src="/bi_envelope-fill.svg" alt="gmail"  width={40} height={40} className="md:w-[50px] md:h-[50px] hover:scale-125"/>
           </Link>
           <Link href={"https://github.com/PrajwalNikhade"} target='_blank' rel="noopener noreferrer">
           <Image loading='lazy' src="/icons8-github.svg" alt="github"  width={40} height={40} className="md:w-[50px] md:h-[50px] hover:scale-125"/>
           </Link>
        </div>
    </footer>
  )
}

export default Footer
