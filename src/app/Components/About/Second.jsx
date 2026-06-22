"use client"

import { Search, PenTool, Code2, Rocket } from "lucide-react"


const process = [
  {
    icon: <Search size={24}/>,
    number: "01",
    title: "Discover & Research",
    desc: "I understand the idea, goals and requirements to find the best possible solution."
  },
  {
    icon: <PenTool size={24}/>,
    number: "02",
    title: "Plan & Design",
    desc: "I create a clear structure, user flow and design direction before development."
  },
  {
    icon: <Code2 size={24}/>,
    number: "03",
    title: "Develop & Build",
    desc: "I turn concepts into clean, scalable and high performance applications."
  },
  {
    icon: <Rocket size={24}/>,
    number: "04",
    title: "Launch & Improve",
    desc: "I optimize, test and improve the product for better user experience."
  }
]


export default function HowIWork(){


return (

<section className="bg-[#0b0d10] px-5 py-24">

<div className="max-w-6xl mx-auto">


<header className="text-center mb-14">

<span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-bold">
My Workflow
</span>


<h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
How I turn ideas into
<span className="text-indigo-400"> products</span>
</h2>


<p className="mt-5 max-w-2xl mx-auto text-[#9ca3af] leading-7">
A structured process that helps me create modern, scalable and user-friendly digital experiences.
</p>


</header>





<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">


{
process.map((item)=>(


<article
key={item.number}
className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50"
>


<div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>



<div className="relative z-10">


<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 flex items-center justify-center">
{item.icon}
</div>



<span className="block mt-6 text-sm text-indigo-400 font-bold">
{item.number}
</span>



<h3 className="mt-2 text-lg font-bold text-white group-hover:text-indigo-200 transition">
{item.title}
</h3>



<p className="mt-3 text-sm text-[#9297aa] leading-7">
{item.desc}
</p>



</div>


</article>


))
}


</div>


</div>


</section>

)

}