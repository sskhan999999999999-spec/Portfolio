"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const Projects = [
    {
      img:'/betagram-app.png',
      projectname:"Betagram",
      app:"Blog App",
      dic:"A responsive blog platform with CRUD functionality, clean design, and smooth user experience using React and Tailwind CSS.",
      button:"View",
      link:"https://betagram.vercel.app/",
    },
    {
      img:'/project-1.png',
      projectname:"Portfolio",
      app:"My portfolio",
      dic:"My personal portfolio showcasing projects, skills, and professional UI built with Next.js and Tailwind CSS.",
      button:"View",
      scrollToHero: true, 
    },
    {
      img:'/Todo-app.png',
      projectname:"Todo-App",
      app:"My portfolio",
      dic:"A task management app with interactive UI, local storage support, and seamless performance with React.",
      button:"View",
      openModal: true, 
      text:"I did'nt deploy yet"
    },
    {
      img:'/Tic-Tic-Toe-Game.png',
      projectname:"Tic-Tac-Toe",
      app:"Game",
      dic:"A simple and fun 3x3 game built using React. The game automatically detects wins, draws, and invalid moves.",
      button:"View",
      openModal: true, 
      text:"I did'nt deploy yet"
    },
  ]

  // Scroll to Hero function
  const handleScrollToHero = () => {
    const hero = document.getElementById("hero")
    if(hero) hero.scrollIntoView({ behavior: "smooth" })
  }

  // Open Modal function
  const handleOpenModal = (project) => {
    setModalContent(project)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setModalContent(null)
  }

  return (
    <div>
      <div className='bg-linear-to-r from-blue-600 to-purple-500 w-full p-10'>
        <div>
          <h1 className="text-4xl font-semibold text-white sm:pl-20 md:pl-30 text-center sm:text-left pt-10">
            <span className="border-b-3 border-b-white p-3">Projects</span>
          </h1>
        </div>

        <div className='flex justify-center flex-wrap'>
          <div className='mt-10 sm:grid sm:grid-cols-2 sm:gap-10 flex justify-center gap-y-10 flex-wrap'>
            {Projects.map((project, idx) => (
              <div
                key={idx}
                className="sm:w-full w-full max-w-[400px] transition-all duration-300 
                  hover:scale-[1.02]
                  hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]
                  active:scale-[1.02]
                  rounded-xl overflow-hidden backdrop-blur-sm hover:backdrop-blur-md"
              >
                <div>
                  <Image
                    src={project.img}
                    width={400}
                    height={400}
                    alt={project.projectname}
                    className="rounded-t-xl w-full"
                  />
                </div>

                <div className="bg-black/90 p-4 text-white rounded-b-xl">
                  <h1 className="font-bold text-2xl text-blue-500">{project.projectname}</h1>
                  <h2 className="font-semibold text-lg">{project.app}</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{project.dic}</p>

                  <div className='flex justify-center mt-3'>
                    {project.scrollToHero ? (
                      <button
                        onClick={handleScrollToHero}
                        className="px-10 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer "
                      >
                        {project.button}
                      </button>
                    ) : project.openModal ? (
                      <button
                        onClick={() => handleOpenModal(project)}
                        className="px-10 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors  duration-300 cursor-pointer"
                      >
                        {project.button}
                      </button>
                      
                    ) : (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="px-10 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                          {project.button}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}  
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:bg-red-500 active:bg-red-500 w-10 hover:text-white font-bold text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{modalContent.projectname}</h2>
            <h3 className="text-lg font-semibold mb-2">{modalContent.app}</h3>
            <p className="text-gray-700">{modalContent.dic}</p>
            <p>{modalContent.text}</p>
            <div className="mt-4">
              <Image 
                src={modalContent.img}
                width={400}
                height={400}
                alt={modalContent.projectname}
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
