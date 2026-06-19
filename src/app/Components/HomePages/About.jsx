"use client"

import Image from "next/image"

export default function AboutGrid() {

  const tech = [
    { id: 1, icon: "⚛️" },
    { id: 2, icon: "▲" },
    { id: 3, icon: "🌊" },
  ]


  const cardStyle =
    "rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#111426]/70 backdrop-blur-md transition-all hover:bg-[#ffffff08] duration-300 hover:-translate-y-1 hover:border-[#2e5bff] hover:shadow-[0_10px_35px_rgba(46,91,255,0.18)]"



  return (

    <section className="min-h-screen px-5 py-[120px]">

      <div className="max-w-6xl mx-auto">


        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-5
        ">



          {/* BIG CARD */}

          <div
          className={`
          ${cardStyle}
          relative
          overflow-hidden
          md:col-span-2
          min-h-[330px]
          p-8
          `}
          >

            <Image
              src="/processor.png"
              alt="processor"
              fill
              className="
              object-cover
              opacity-20
              "
            />


            <div className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#090b18]
              via-transparent
            " />


            <div className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-end
            ">

              <h2 className="
              text-white
              text-2xl
              md:text-3xl
              font-bold
              mb-4
              ">
                Creative Problem Solver
              </h2>


              <p className="
              text-[#a5a9c4]
              text-sm
              md:text-base
              leading-relaxed
              ">
                I transform complex requirements into intuitive digital
                experiences. My approach blends engineering rigor with
                design sensitivity to create products that people love to use.
              </p>


            </div>

          </div>




          {/* EXPERIENCE */}

          <div
          className={`
          ${cardStyle}
          min-h-[330px]
          flex
          items-center
          justify-center
          `}
          >

            <div className="text-center">

              <h1 className="
              text-5xl
              font-bold
              text-[#c9ccff]
              ">
                1+
              </h1>


              <p className="
              mt-3
              text-xs
              font-bold
              tracking-[0.18em]
              text-[#777b9c]
              ">
                YEARS EXPERIENCE
              </p>

            </div>


          </div>





          {/* PROJECTS */}

          <div
          className={`
          ${cardStyle}
          min-h-[330px]
          flex
          items-center
          justify-center
          `}
          >

            <div className="text-center">


              <h1 className="
              text-5xl
              font-bold
              text-[#c9ccff]
              ">
                50+
              </h1>


              <p className="
              mt-3
              text-xs
              font-bold
              tracking-[0.18em]
              text-[#777b9c]
              ">
                PROJECTS DELIVERED
              </p>


            </div>


          </div>





          {/* TECH STACK */}


          <div
          className={`
          ${cardStyle}
          md:col-span-2
          min-h-[170px]
          p-8
          flex
          flex-col
          sm:flex-row
          items-start
          sm:items-center
          justify-between
          gap-5
          `}
          >


            <div>

              <h3 className="
              text-white
              text-xl
              font-bold
              ">
                Modern Tech Stack
              </h3>


              <p className="
              text-[#8c91b0]
              text-sm
              mt-2
              ">
                Always learning, always evolving.
              </p>


            </div>



            <div className="flex gap-3">


              {
                tech.map((item)=>(
                  
                  <div
                  key={item.id}
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#171a2d]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-lg
                  transition
                  hover:bg-[#2e5bff]
                  hover:scale-110
                  "
                  >

                    {item.icon}

                  </div>

                ))
              }


            </div>



          </div>



        </div>


      </div>


    </section>

  )
}