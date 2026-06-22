"use client"

import Image from "next/image"
import { Github, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"


const projects = [
  {
    title: "Social Media App",
    desc: "A Facebook inspired social platform with user profiles, posts, interactions and modern responsive UI.",
    image: "/betagram-app.png",
    tech: ["React", "Next.js", "Tailwind", "Node.js"]
  },
  {
    title: "Personal Portfolio",
    desc: "A modern developer portfolio showcasing projects, skills and experience with a premium dark design.",
    image: "/portfolio.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"]
  }
]


export default function Projects(){


return (

<section className="bg-[#0b0d10] px-5 py-24">


<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
className="max-w-6xl mx-auto"
>


<header className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">


<div className="text-center md:text-left">

<span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-bold">
Featured Work
</span>


<h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
Projects I've
<span className="text-indigo-400"> built</span>
</h2>


</div>




<a
href="https://github.com/yourusername"
target="_blank"
className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-indigo-400/40 transition"
>

<Github size={18}/>

View All Projects

</a>


</header>





<div className="grid md:grid-cols-2 gap-7">


{
projects.map((project,index)=>(


<motion.article
key={index}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.7,delay:index*0.2}}
className="group rounded-3xl overflow-hidden border border-white/10 bg-[#111318] hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2"
>


<div className="relative h-[280px] overflow-hidden">


<Image
src={project.image}
alt={project.title}
fill
className="object-cover group-hover:scale-105 transition duration-500"
/>



<div className="absolute inset-0 bg-linear-to-t from-[#111318] via-transparent"></div>


</div>





<div className="p-7">


<h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition">
{project.title}
</h3>



<p className="mt-3 text-[#9ca3af] leading-7 text-sm">
{project.desc}
</p>




<div className="flex flex-wrap gap-2 mt-5">


{
project.tech.map((item)=>(

<span
key={item}
className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
>

{item}

</span>

))
}


</div>





<a
href="https://github.com/yourusername"
target="_blank"
className="inline-flex items-center gap-2 mt-7 text-sm text-indigo-400 hover:text-indigo-300 transition"
>

Github Code

<ArrowUpRight size={16}/>

</a>



</div>



</motion.article>


))
}


</div>


</motion.div>


</section>

)

}