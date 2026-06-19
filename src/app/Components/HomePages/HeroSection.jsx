"use client"
import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import Image from "next/image";

function HeroSection() {
  return (
    <div id='hero' className='flex justify-center pt-28 md:pt-40'>
      
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:p-30 p-3">

        {/* TEXT SECTION */}
        <div className="w-full flex flex-col justify-center px-3 sm:px-4 md:px-10 space-y-4 order-1">

          <span className='border border-white/10 rounded-full w-fit px-4 bg-[#b8c3ff1a] text-[#b8c3ff] text-sm'>
            Available for Freelance
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#b8c3ff] to-[#c5c4df]">
              Shahsawar
            </span>
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#c8c5cd] tracking-wide">
            Frontend Developer | React.js | Next.js | JavaScript
          </h2>

          <p className="text-lg sm:text-xl md:text-lg text-[#e0e3e5b3] font-medium leading-relaxed">
            I build modern, responsive and scalable web applications with 
            <br className="hidden md:block" />
            clean UI and great user experience. Obsessed with high-performance code and artistic digital interfaces.
          </p>

          <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
            <TypewriterComponent
              options={{
                strings: ["using React", "and Next.js"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">

            <button className="px-8 py-2 font-semibold rounded-lg text-base bg-linear-120 from-[#2e5bff] to-[#00d2ff] text-white transition-all hover:scale-105 hover:shadow-[0_4px_20px_rgba(46,91,255,0.2),0_0_20px_rgba(0,210,255,0.15)]">
              Hire me
            </button>

            <button className="px-5 py-3 font-semibold rounded-lg text-base bg-[#ffffff08] border border-[#FFFFFF1A] hover:border-[#2e5bff] hover:bg-[#ffffff11] hover:-translate-y-1 transition-all duration-300 hover:text-white hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]">
              Download CV
            </button>

          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className='order-2 border border-white p-2 rounded-xl hover:border-blue-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden'>

          <Image 
            src="/unnamed.png"
            width={600}
            height={600}
            className="rounded-xl hover:scale-105 transition-all duration-300 object-cover"
            alt="shahsawar"
          />

        </div>

      </div>
    </div>
  )
}

export default HeroSection