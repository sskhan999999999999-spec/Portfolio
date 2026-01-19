import React from 'react'
import Progress from './Progress'

function Skills() {
  return (
    <div>
      <div className='bg-teal-800  flex justify-center p-5 '>
        <div className='flex justify-center '>
        <div className='max-w-3xl '>
        <div className='sm:text-5xl  text-2xl text-white mb-4  '>
            <h1>Skills That Power My Development Workflow</h1>
        </div>
        <div className='sm:text-2xl text-xl  text-gray-400 mb-4'>
            <p>Here are the technologies i use to build fast,modern , and scalable applications.</p>
        </div>
        <div className='text-stone-300 flex justify-center  '>
          <div className=''>
            <h1 className='text-xl '>Front-End Skills</h1>
            {/* <li>Next js</li>
            <progress className='' value="70" max='100'>70%</progress>
            <li>React</li>
            <li>Tailwind css</li>
            <li>html/css/javascript</li> */}
            <Progress skill={"Next js"} percentage={70} color={"red"} />
            <Progress skill={"React js"} percentage={70} color={"yellow"} />
            <Progress skill={"Tailwind css"} percentage={70} color={"blue"} />
            <Progress skill={"Javascript"} percentage={70} color={"green"} />
            <Progress skill={"html/css"} percentage={70} color={"indigo"} />
            </div>
          {/* <div>
            <h1 className='text-xl '>tools</h1>
            <li>Git/Github</li>
            <li>VS code</li>
            <li></li>
            <li>html/css/javascript</li>
            </div> */}

        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
