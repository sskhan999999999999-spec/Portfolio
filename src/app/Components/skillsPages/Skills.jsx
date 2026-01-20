import React from 'react'
import Progress from './Progress'

function Skills() {
  return (
    <div>
      <div className='bg-teal-800  flex justify-center p-15 '>
        <div className='flex justify-center '>
        <div className='max-w-3xl '>
        <div className='sm:text-5xl  text-2xl text-white mb-4  '>
            <h1>Skills That Power My Development Workflow</h1>
        </div>
        <div className='sm:text-2xl text-xl  text-gray-400 mb-4'>
            <p>Here are the technologies i use to build fast,modern , and scalable applications.</p>
        </div>
        <div className='text-stone-300 flex justify-between  '>
          <div className=''>
            <h1 className='text-xl '>Front-End Skills</h1>
           
            <Progress skill={"Next js"} percentage={70} color={"red"} />
            <Progress skill={"React js"} percentage={90} color={"yellow"} />
            <Progress skill={"Tailwindcss"} percentage={90} color={"blue"} />
            <Progress skill={"Javascript"} percentage={80} color={"green"} />
            <Progress skill={"html/css"} percentage={100} color={"indigo"} />
            </div>
            <div className=' flex-col items-center justify-center'>
              <h1 className='text-xl ml-3'>Tools</h1>
              <p className="bg-yellow-400 text-black px-3 py-1 rounded-full mt-15 sm:mt-2 text-center">Git</p>
              <p className="bg-blue-500 text-white px-3 py-1 rounded-full mt-4 text-center">VS Code</p>
              <p className="bg-green-500 text-white px-3 py-1 rounded-full mt-4 text-center">Postman</p>
              <p className="bg-indigo-500 text-white px-3 py-1 rounded-full mt-4 text-center">Docker</p>
              <p className="bg-pink-500 text-white px-3 py-1 rounded-full mt-4 text-center">Figma</p>
               </div>
          

        </div>
        <div className='sm:text-2xl text-xl  text-gray-400 mt-4'>
            <p>I am constantly expanding my toolkit and plan to learn essential developer tools such as Postman, Docker, and Figma to further streamline my workflow and design efficient, modern applications.</p>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
