"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";

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
      text:"I didn't deploy yet"
    },
    {
      img:'/Tic-Tic-Toe-Game.png',
      projectname:"Tic-Tac-Toe",
      app:"Game",
      dic:"A simple and fun 3x3 game built using React. The game automatically detects wins, draws, and invalid moves.",
      button:"View",
      openModal: true, 
      text:"I didn't deploy yet"
    },
  ]

  
  const handleScrollToHero = () => {
    const hero = document.getElementById("hero")
    if(hero) hero.scrollIntoView({ behavior: "smooth" })
  }

  
  const handleOpenModal = (project) => {
    setModalContent(project)
    setModalOpen(true)
    
    document.body.style.overflow = 'hidden';
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setModalContent(null)
   
    document.body.style.overflow = 'auto';
  }

  return (
    <div>
      {/* Projects Section */}
      <div className='bg-linear-to-r from-blue-600 to-purple-500 w-full p-10'>
        <h1 className="text-4xl font-semibold text-white sm:pl-20 md:pl-30 text-center sm:text-left pt-10">
          <span className="border-b-4 border-white p-3">Projects</span>
        </h1>

        <div className='flex justify-center flex-wrap mt-10'>
          <div className='sm:grid sm:grid-cols-2 sm:gap-10 flex justify-center gap-y-10 flex-wrap'>
            {Projects.map((project, idx) => (
              <div
                key={idx}
                className="sm:w-full w-full max-w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] active:scale-105 rounded-xl overflow-hidden backdrop-blur-sm hover:backdrop-blur-md relative"
              >
                <Image
                  src={project.img}
                  width={400}
                  height={400}
                  alt={project.projectname}
                  className="rounded-t-xl w-full"
                />

                <div className="bg-black/90 p-4 text-white rounded-b-xl">
                  <h1 className="font-bold text-2xl text-blue-500">{project.projectname}</h1>
                  <h2 className="font-semibold text-lg">{project.app}</h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.dic}</p>

                  <div className='flex justify-center mt-3'>
                    {project.scrollToHero ? (
                      <button
                        onClick={handleScrollToHero}
                        className="px-10 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                      >
                        {project.button}
                      </button>
                    ) : project.openModal ? (
                      <button
                        onClick={() => handleOpenModal(project)}
                        className="px-10 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
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

     
      <AnimatePresence>
        {modalOpen && modalContent && (
          <>
            
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
            />

            
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-lg w-full bg-white rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-500 hover:bg-red-500 active:bg-red-500 active:text-white w-10 h-10 rounded-full font-bold text-2xl transition-colors duration-300"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-2">{modalContent.projectname}</h2>
              <h3 className="text-lg font-semibold mb-2">{modalContent.app}</h3>
              <p className="text-gray-700">{modalContent.dic}</p>
              {modalContent.text && <p className='mt-2'>{modalContent.text}</p>}
              <div className='mt-4'>
                <Image
                  src={modalContent.img}
                  width={400}
                  height={400}
                  alt={modalContent.projectname}
                  className='rounded-xl w-full'
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
