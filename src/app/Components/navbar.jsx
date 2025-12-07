     "use client"
      
   
    import React from 'react'
    import Link from 'next/link'
    import { usePathname } from 'next/navigation'
    import {  Menu } from 'lucide-react'
   

   
   
   function Navbar() {
    const pathName = usePathname()

    const linkClass = (path)=>
    pathName === path ?
    "border-b-3 border-blue-600 text-blue-600 p-2 ":" hover:text-blue-600 hover:border-blue-600 hover:border-b-3 hover:p-2 "
        
    return (
           
             <nav className=' bg-slate-900 p-4 w-full text-white flex justify-around text-2xl items-center top-0  fixed z-10000000 '>

                    <div className='font-bold sm:text-3xl text-white'><h1>Portfolio</h1></div>
                    <div className='flex justify-around items-center'>
                  <ul className=' text-xl sm:flex sm:justify-center  gap-x-10 items-center hidden  '>

                    <li> <Link href="/" className={linkClass("/")}>Home</Link> </li>
                    <li> <Link href="About" className={linkClass("/About")}>About</Link></li>
                    <li><Link href="Skills" className={linkClass("/Skills")}>Skills</Link></li>
                  </ul>
                    </div>
                     <li className='list-none hidden sm:flex '><button className=' text-white bg-indigo-500  text-xl  hover:bg-indigo-600 hover:border-indigo-700 duration-300 hover:text-white transition-colors py-2 px-4 rounded-full'>contact</button></li>

                     <button className='sm:hidden flex'>
                     <Menu/>
                     </button>
                     
                     
             </nav>
    )
   }
   
   export default Navbar
   