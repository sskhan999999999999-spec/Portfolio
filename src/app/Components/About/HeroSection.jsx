import React from 'react'

function HeroSection() {
  return (
    <div className='bg-indigo-100  mt-15 py-20 px-6 sm:px-15 '>
      <div className='flex justify-center  '>
        <div className='max-w-3xl'>
        <h1 className='capitalize   text-indigo-500 font-bold sm:text-5xl mb-6 text-2xl '>A little more about me</h1>
        <h2 className='sm:text-2xl text-xl text-gray-500'>React Developer building modern, scalable, and user-focused web experiences.</h2>
        <div>
            <p>I’m a React Developer who believes that great user experiences are built with clean code, thoughtful design, and attention to detail.</p>
            <p>I enjoy creating modern, responsive web applications that are not only visually appealing but also performant and scalable. My focus is on writing maintainable code and building interfaces that feel simple, fast, and intuitive.</p>
            <p>Currently, I am learning at AntonX, I actively contribute to real-world projects while continuously sharpening my skills and staying up to date with modern front-end technologies. I’m always motivated to learn, grow, and turn ideas into impactful digital products.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
