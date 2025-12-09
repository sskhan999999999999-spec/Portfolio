"use client"
import { GitBranch, Github, GithubIcon, LinkedinIcon, LucideLinkedin, MessageCircle, PhoneCallIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const footers = [
    {
      img:<Github/>,
      name:'Github',
      link:"https://github.com/sskhan999999999999-spec"
    },
    {
      img:<LinkedinIcon/>,
      name:'Linkedin',
      link:"https://www.linkedin.com/in/shah-sawar-683573352/"
    },
    {
      img:<PhoneCallIcon/>,
      name:'phone',
      link:"tel:+923098841413"
    },
  ]
  return (
    <div>
      <div className='bg-gray-900 text-gray-300 p-6 '>
      <div className='flex justify-between px-5 items-center gap-2  '>
        <p>© 2025 Shah Sawar. All rights reserved.</p>
        <p>Frontend Developer • React • Next.js</p>
        <div className='flex justify-around gap-5'>
          {footers.map((footer,idx)=>(<div key={idx}>
          <div className='bg-gray-100 rounded-full p-2 w-fit text-black'>
            {footer.img}
            </div>
           <Link href={footer.link} target="_blank">{footer.name}</Link>
          </div>))}
         
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
