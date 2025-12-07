import React from 'react'
import Image from 'next/image'

function SkillsSection() {
  return (
    <div>
      <div className="bg-teal-800  w-full p-10 ">
        <div><h1 className="text-4xl font-semibold text-white sm:pl-20 md:pl-30 text-center sm:text-left  pt-10 "> <span className="border-b-3 border-b-white p-2 ">Skills</span></h1></div>
        <div className="flex justify-center flex-wrap"> 
        <div className="sm:grid sm:grid-cols-3 sm:mt-10 gap-y-6 flex justify-center mt-10 lg:mt-4  gap-6 flex-wrap">
                  <div className="
                w-50   
                rounded-xl
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(0,200,255,5)]
              ">
                <div className="bg-white/50 p-2  flex justify-center  rounded-t-lg">
                  <Image src="/html-5.png" width={120} height={120} alt="html 5"/>
                </div>
      
                <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                  <h1 className="text-lg font-semibold">html 5</h1>
                  <p>Crafting clean, semantic, accesible and user-friendly layout </p>
                </div>
              </div>
      
                  <div className="
                  w-50 
                  transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-[0_0_25px_rgba(0,200,255,5)]
                  rounded-xl
                  overflow-hidden
                ">
                  <div className="bg-white/50 p-2  flex justify-center  ">
                    <Image src="/css-3.png" width={120} height={120} alt="css-3" />
                  </div>
      
                  <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                    <h1 className="text-lg font-semibold">CSS 3</h1>
                    <p>Designing pixel-perfect, responsive and modern interfaces.</p>
                  </div>
                </div>
      
          <div className="
                  w-50 
                  transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-[0_0_25px_rgba(0,200,255,5)]
                  rounded-xl
                  overflow-hidden
                ">
                  <div className="bg-white/50 p-2  flex justify-center  ">
                    <Image src="/js.png" width={120} height={120} alt="Java script" />
                  </div>
      
                  <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                    <h1 className="text-lg font-semibold">Javascript</h1>
                    <p> Turning logic into experiences that feel alive.</p>
                  </div>
                </div>
          <div className="
                  w-50 
                  transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-[0_0_25px_rgba(0,200,255,5)]
                  rounded-xl
                  overflow-hidden
                ">
                  <div className="bg-white/50 p-2  flex justify-center  ">
                    <Image src="/tailwindcss.png" width={120} height={120} alt="Tailwind css" />
                  </div>
      
                  <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                    <h1 className="text-lg font-semibold">Tailwind css</h1>
                    <p>Tranforming ideas into UI with utility-powered speed and responsive.</p>
                   
                  </div>
                </div>
          <div className="
                  w-50 
                  transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-[0_0_25px_rgba(0,200,255,5)]
                  rounded-xl
                  overflow-hidden
                ">
                  <div className="bg-white/50 p-2  flex justify-center  ">
                    <Image src="/React.png" width={120} height={120} alt="React" />
                  </div>
      
                  <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                    <h1 className="text-lg font-semibold">React</h1>
                    <p>Building interactive UI flows with modern React patterns.</p>
                    
                  </div>
                </div>
          <div className="
                  w-50 
                  transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-[0_0_25px_rgba(0,200,255,5)]
                  rounded-xl
                  overflow-hidden
                ">
                  <div className="bg-white/50 p-2  flex justify-center  ">
                    <Image src="/nextjs-icon.png" width={120} height={120} alt="Next js" />
                  </div>
      
                  <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                    <h1 className="text-lg font-semibold">Next js</h1>
                    <p>Delivering fast, optimized apps with SSR,SSG & API power</p>
                  </div>
                </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default SkillsSection
