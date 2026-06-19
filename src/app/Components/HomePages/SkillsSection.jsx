"use client"
import { useState } from "react"

const technologies = [
  {
    id: "html",
    name: "HTML5",
    description: "Building semantic and accessible web structures for modern browsers.",
    iconBg: "bg-orange-900",
    iconColor: "text-orange-400",
    label: "HTML",
  },
  {
    id: "css",
    name: "CSS3 / Tailwind",
    description: "Creating stunning layouts and fluid animations using modern techniques.",
    iconBg: "bg-blue-900",
    iconColor: "text-blue-400",
    label: "CSS",
  },
  {
    id: "js",
    name: "JavaScript",
    description: "Developing complex logic and dynamic interactions with ES6+ features.",
    iconBg: "bg-yellow-900",
    iconColor: "text-yellow-400",
    label: "JS",
  },
  {
    id: "react",
    name: "React.js",
    description: "Architecting component-based UIs with hooks and state management.",
    iconBg: "bg-cyan-900",
    iconColor: "text-cyan-400 text-xl",
    icon: "{ }",
  },
  {
    id: "next",
    name: "Next.js",
    description: "Optimizing performance with SSR, SSG, and routing systems.",
    iconBg: "bg-gray-900",
    iconColor: "text-gray-300 text-2xl",
    icon: "🚀",
  },
  {
    id: "git",
    name: "Git & GitHub",
    description: "Version control and collaborative workflows for enterprise projects.",
    iconBg: "bg-purple-900",
    iconColor: "text-purple-400 text-xl",
    icon: "🌿",
  },
]

export default function TechStack() {
  const [activeId, setActiveId] = useState("")
  const [hovered, setHovered] = useState(null)

  return (
    <section className=" pt-[120px] px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-center  text-xs font-bold tracking-widest text-[#b8c3ff] uppercase">
          Tech Stack
        </p>

        <h2 className="text-center text-4xl md:text-5xl font-bold  mt-2">
          Technologies I Use
        </h2>

        <div className="w-24 h-1 bg-linear-to-r from-[#b8c3ff] to-transparent mx-auto my-6 rounded"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {technologies.map((tech) => {
            const isActive = activeId === tech.id
            const isHovered = hovered === tech.id

            return (
              <div
                key={tech.id}
                onClick={() => setActiveId(tech.id)}
                onMouseEnter={() => setHovered(tech.id)}
                onMouseLeave={() => setHovered(null)}
                className={`cursor-pointer text-center p-8 w-full  bg-[#ffffff08] rounded-xl transition-all duration-300 hover:bg-[#ffffff11]
                border border-[#FFFFFF1A]
                ${isActive || isHovered ? "border-indigo-500 shadow-[0_3px_10px_rgba(99,102,241,0.2)] -translate-y-1" : "border-[#2a2d4a]"}`}
              >

                {/* ICON */}
                <div className={`w-16 h-16 mx-auto flex items-center justify-center  rounded-xl mb-4 ${tech.iconBg}`}>
                  <span className={`font-bold ${tech.iconColor}`}>
                    {tech.label || tech.icon}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className=" font-bold text-lg mb-2">
                  {tech.name}
                </h3>

                {/* DESC */}
                <p className="text-md text-[#c8c5c7] font-semibold leading-relaxed">
                  {tech.description}
                </p>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}