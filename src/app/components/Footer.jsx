import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='bg-[#FDC435] flex flex-row justify-around'>
        <div className='my-auto text-3xl'>Prajwal</div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <p>Portfolio</p>
            <p>All rights reserved</p>
            <p>&copy; Prajwal</p>
        </div>
        <div className="logos flex flex-row gap-2 justify-around items-stretch  ">
            <Image src="/bi_linkedin.svg" alt="linkedin" width={50} height={50}/>
            <Image src="/bi_envelope-fill.svg" alt="gmail" width={50} height={50}/>
            <Image src="/icons8-github.svg" alt="github" width={50} height={50}/>

        </div>
        
    </footer>
  )
}

export default Footer
