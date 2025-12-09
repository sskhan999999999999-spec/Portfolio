"use client"
import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import Image from "next/image";

function HeroSection() {
  return (
    <div id='hero' className='flex justify-center '>
       <div className="bg-indigo-100 w-full flex justify-center items-center md:p-30 p-5 py-20">
     <div className="bg-indigo-100 w-full flex flex-col justify-center px-10 space-y-4">
  
  <h1 className="md:text-5xl sm:text-2xl text-xl font-bold leading-tight">
    Hi, I am 
    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
      {" "}SHAH SAWAR
    </span>
  </h1>

  <h2 className="md:text-3xl sm:text-xl  text-gray-700 tracking-wide">
    Front-End Developer
  </h2>

  <p className="md:text-lg sm:text-md text-gray-600 ">
    I create <span className="font-semibold text-indigo-700">modern</span>, 
    <span className="font-semibold text-indigo-700"> fast</span>, 
    and <span className="font-semibold text-indigo-700">user-friendly</span> web experiences.
  </p>

  <div className="flex items-center gap-2 md:text-xl sm:text-lg font-medium text-gray-700">
    
    <TypewriterComponent
      options={{
        strings: ["using React", "and Next.js"],
        autoStart: true,
        loop: true,
      }}
    />
  </div>
  <div className="flex  gap-5">
    <button className="border border-indigo-500 bg-indigo-500 text-white sm:p-1 md:rounded-full hover:border-indigo-700 hover:bg-indigo-700 duration-300 transition-colors px-1 md:px-4 sm:px-2  rounded-xl  sm:rounded-lg active:bg-indigo-700">Hire me</button>
    <button className="bg-transparent border border-indigo-700 hover:bg-indigo-700   text-black p-1 px-2 rounded-xl  md:p-2 md:px-4 
    md:rounded-full  hover:text-white transition-colors duration-300 active:bg-indigo-700 active:text-white">Download CV</button>
  </div>
</div>
   <div>
    <Image 
    src="/my-photo.jpg"
    width={400}
    height={400}   
    className="rounded-xl hidden sm:flex "
    alt="shahsawar"

    
    />
    </div>  

</div>
    </div>
  )
}

export default HeroSection
