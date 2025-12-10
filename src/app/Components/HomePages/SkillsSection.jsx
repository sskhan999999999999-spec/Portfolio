import React from 'react'
import Image from 'next/image'

function SkillsSection() {
   const skills = [
    {
      img:"/html-5.png",
      name:'html 5',
      disc:"Crafting clean, semantic, accesible and user-friendly layout."
    },
    {
      img:"/css-3.png",
      name:'CSS 3',
      disc:"Designing pixel-perfect, responsive and modern interfaces."
    },
    {
      img:"/js.png",
      name:'Javascript',
      disc:"Turning logic into experiences that feel alive."
    },
    {
      img:"/tailwindcss.png",
      name:'Tailwind css',
      disc:"Tranforming ideas into UI with utility-powered speed and responsive."
    },
    {
      img:"/React.png",
      name:'React',
      disc:"Building interactive UI flows with modern React patterns."
    },
    {
      img:"/nextjs-icon.png",
      name:'Next js',
      disc:"Delivering fast, optimized apps with SSR,SSG & API power."
    },
   ]
  return (
    <div>
      <div className="bg-teal-800  w-full p-10 ">
        <div><h1 className="text-4xl font-semibold text-white sm:pl-20 md:pl-30 text-center sm:text-left  pt-10 "> <span className="border-b-3 border-b-white p-2 ">Skills</span></h1></div>
        <div className="flex justify-center flex-wrap"> 
        <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 sm:mt-10 gap-y-6 flex justify-center mt-10 lg:mt-4  gap-6 flex-wrap">
                { skills.map((skill,idx)=>(<div key={idx} className="
                w-50   
                rounded-xl
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(0,200,255,5)]
                active:scale-105
                active:shadow-[0_0_25px_rgba(0,200,255,5)]
              ">
                <div className="bg-white/50 p-2  flex justify-center  rounded-t-lg">
                  <Image src={skill.img} width={120} height={120} alt={skill.name}/>
                </div>
      
                <div className="bg-white/90 p-2 text-gray-500 rounded-b-lg">
                  <h1 className="text-lg font-semibold">{skill.name}</h1>
                  <p>{skill.disc} </p>
                </div>
              </div>)) }
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default SkillsSection