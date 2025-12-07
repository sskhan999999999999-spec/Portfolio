 "use client"
 import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <div >
      <div className='bg-linear-to-r from-blue-600 to-purple-500 w-full p-10'>
        <div>
            <h1 className="text-4xl font-semibold text-white sm:pl-20 md:pl-30 text-center sm:text-left  pt-10 "> <span className="border-b-3 border-b-white p-3 ">Projects</span></h1>
        </div>
        <div className='flex justify-center flex-wrap'>
        <div className='mt-10  sm:grid sm:grid-cols-2  sm:gap-10 flex justify-center gap-y-10 flex-wrap'>
            <div className="sm:w-full max-w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(200,200,700,10)] overflow-hidden rounded-xl">
              <div>
                <Image
                  src="/betagram-app.png"
                  width={400}
                  height={400}
                  alt="my portfolio"
                  className="rounded-t-xl w-full"
                />
              </div>
              <div className="bg-black/90 p-4 text-white rounded-b-xl">
                <h1 className="font-bold text-2xl text-blue-500 ">Betagram</h1>
                <h2 className="font-semibold text-lg">Blog App</h2>
                <p>
                  A responsive blog platform with CRUD functionality, clean design, and smooth user experience using React and Tailwind CSS.
                </p>
                <div className='flex justify-center mt-3 '>
                <button  className=" px-15 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300" onClick={() => window.open("https://betagram.vercel.app/", "_blank")}> View</button></div>
              </div>
            </div>

            {/* =========== first image */}
            <div className="sm:w-full max-w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(200,200,700,10)] overflow-hidden rounded-xl">
            <div>
              <Image
                src="/project-1.png"
                width={400}
                height={400}
                alt="my portfolio"
                className="rounded-t-xl w-full"
              />
            </div>
            <div className="bg-black/90 p-4 text-white rounded-b-xl">
              <h1 className="font-bold text-2xl text-blue-500">Portfolio</h1>
              <h2 className=" font-semibold text-lg">My portfolio</h2>
              <p>
                My personal portfolio showcasing projects, skills, and professional UI built with Next.js and Tailwind CSS.
              </p>
              <div className='flex justify-center'>
                  <button
                  onClick={() =>
                    document.getElementById("hero")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="mt-3 px-15 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  
                  View
                </button>

              </div>
            </div>
          </div>

            {/* ====== second image  */}
            <div className="sm:w-full max-w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(200,200,700,10)] overflow-hidden rounded-xl">
            <div>
              <Image
                src="/Todo-app.png"
                width={400}
                height={400}
                alt="my portfolio"
                className="rounded-t-xl w-full"
              />
            </div>
            <div className="bg-black/90 p-4 text-white rounded-b-xl">
              <h1 className="font-bold text-2xl text-blue-500">Todo-App</h1>
              <h2 className="font-semibold text-lg ">Task mangement</h2>
              <p>
               A task management app with interactive UI, local storage support, and seamless performance built with React.
              </p>
            </div>
          </div>

            {/* third imga ====== */}
            <div className="sm:w-full max-w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(200,200,700,10)] overflow-hidden rounded-xl">
            <div>
              <Image
                src="/Tic-Tic-Toe-Game.png"
                width={400}
                height={400}
                alt="my portfolio"
                className="rounded-t-xl w-full"
              />
            </div>
            <div className="bg-black/90 p-4 text-white rounded-b-xl">
              <h1 className="font-bold text-2xl text-blue-500">Portfolio</h1>
              <h2 className="font-semibold text-lg">My portfolio</h2>
              <p>
                My personal portfolio showcasing projects, skills, and professional UI built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>

            {/* ====== fourth image */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
