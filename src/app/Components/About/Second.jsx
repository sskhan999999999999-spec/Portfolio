import React from 'react'

function Second() {
    
    const obj = [
        {
          name:"🎨",
          dic:"Detail-Driven UI/UX"  
        },
        {
          name:"⚡",
          dic:"Performance Focused"  
        },
        {
          name:"🚀",
          dic:"React & Next.js"  
        },
        {
          name:"🌱",
          dic:"Always Improving"  
        },
    ]

  return (
    <div className='bg-teal-700 p-15 flex justify-center '>
        <div >
      <div className='mb-6'>
        <h1 className='text-gray-900 font-bold sm:text-5xl text-2xl'>Development Mindset </h1>
      </div>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-6 grid-cols-1'>

        {obj.map((text,id)=>(
            <div key={id} className='bg-black/70 w-full max-w-[300] text-white rounded-2xl p-4 md:py-10'>
                <p className='text-xl mb-2'>{text.name}</p>
                <p className='text-xl'>{text.dic}</p>
            </div> 
        ))}
      </div>
        </div>
    </div>
  )
}

export default Second
