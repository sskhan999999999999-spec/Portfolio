"use client"

import { div } from "framer-motion/client"

export default function KnowledgeDistribution() {

  const levels = [
    {
      name: "Beginner",
      color: "bg-[#3b4145]"
    },
    {
      name: "Intermediate",
      color: "bg-[#66708f]"
    },
    {
      name: "Advanced",
      color: "bg-[#9aa7df]"
    },
    {
      name: "Expert",
      color: "bg-[#aebcff]"
    },
  ]


  return (
    <div className="py-[120px]">
    <div className="
      w-full
      max-w-6xl
      mx-auto
      rounded-2xl
      border
      border-white/5
      hover:border-[#2e5bff] 
      bg-[#ffffff08]
      hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]
      transition-all
      duration-300
      hover:-translate-y-1
      px-5
      md:px-8
      py-5
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-6
      
    ">


      {/* Left */}

      <div className="text-center lg:text-left">

        <h3 className="text-[#b8c4ff] font-semibold text-base">
          Knowledge Distribution
        </h3>


        <p className="text-[#a4a6af] text-sm mt-1">
          Verified technical proficiency and field experience.
        </p>

      </div>



      {/* Right */}

      <div className="
        flex
        flex-wrap
        justify-center
        items-center
        gap-x-6
        gap-y-3
      ">

        {
          levels.map((level)=>(
            
            <div 
            key={level.name}
            className="flex items-center gap-2"
            >

              <span 
              className={`w-3 h-3 rounded-full ${level.color}`}
              />

              <span className="text-[#c2c2ca] text-sm font-medium">
                {level.name}
              </span>

            </div>

          ))
        }


      </div>


    </div>
    </div>
  )
}