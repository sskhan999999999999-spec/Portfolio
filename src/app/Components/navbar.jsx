     "use client"
      
   
    import React, { useState } from 'react'
    import Link from 'next/link'
    import { usePathname } from 'next/navigation'
    import {  Menu } from 'lucide-react'
   

   
   
   function Navbar() {
    const pathName = usePathname()
    const [open,setOpen] = useState(false)

    const linkClass = (path)=>
    pathName === path ?
    "border-b-3 border-blue-600 text-blue-600 p-2 ":" hover:text-blue-600 hover:border-blue-600 hover:border-b-3 hover:p-2 "
        
    return (
           <div>
             <nav className=' bg-slate-900 p-4 w-full text-white flex justify-between text-2xl items-center top-0  fixed z-10000000 px-6 sm:flex sm:justify-around '>
                  <button className='sm:hidden flex' onClick={()=>setOpen(!open)}>
                     <Menu/>
                     </button>
                    <div className='font-bold sm:text-3xl text-white'><h1>Portfolio</h1></div>
                    <div className='sm:flex justify-around items-center hidden '>
                  <ul className=' text-xl sm:flex sm:justify-center  gap-x-10 items-center hidden  '>

                    <li> <Link href="/" className={linkClass("/")}>Home</Link> </li>
                    <li> <Link href="About" className={linkClass("/About")}>About</Link></li>
                    <li><Link href="Skills" className={linkClass("/Skills")}>Skills</Link></li>
                  </ul>
                    </div>
                     <li className='list-none hidden sm:flex '><button className=' text-white bg-indigo-500  text-xl  hover:bg-indigo-600 hover:border-indigo-700 duration-300 hover:text-white transition-colors py-2 px-4 rounded-full cursor-pointer'>contact</button></li>
             </nav>
             {open && (
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            ></div>
          )}
                            <div
                    className={`fixed top-0 left-0 h-full w-64 bg-slate-900 p-6 z-50 
                    transform ${open ? "translate-x-0" : "-translate-x-full"} 
                    transition-transform duration-300`}
                  >
                    <ul className="flex flex-col gap-6 text-xl mt-10 text-white">
                      <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                      <Link href="/About" onClick={() => setOpen(false)}>About</Link>
                      <Link href="/Skills" onClick={() => setOpen(false)}>Skills</Link>
                      {/* <Link href="/Contact" onClick={() => setOpen(false)}>Contact</Link> */}
                    </ul>
                  </div>


             </div>
    )
   }
   
   export default Navbar
   