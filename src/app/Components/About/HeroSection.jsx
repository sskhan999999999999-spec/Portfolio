"use client"

import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"


export default function AboutProfile() {

  return (

    <section className="bg-[#0b0d10] px-5 py-24">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">


        {/* Image Section */}

        <figure className="relative group flex justify-center">

          <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full"></div>


          <div className="relative w-[260px] h-[330px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-[#111318]">

            <Image
              src="/my-photo.jpg"
              alt="Developer profile"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-all duration-500"
            />

          </div>

        </figure>





        {/* Content Section */}

        <article>


          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-bold">
            Who I Am
          </span>



          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">

            Turning ideas into

            <span className="text-indigo-400">
              {" "}powerful web experiences
            </span>

          </h2>




          <p className="mt-6 text-[#9ca3af] leading-8 text-sm md:text-base">

            I am a passionate developer who enjoys building modern,
            scalable and user-friendly applications. I focus on clean
            architecture, performance and creating smooth digital
            experiences.

          </p>



          <p className="mt-4 text-[#9ca3af] leading-8 text-sm md:text-base">

            My goal is to transform complex problems into simple,
            elegant solutions using modern technologies.

          </p>





          <nav className="flex gap-4 mt-8">


            <a className="w-11 h-11 rounded-xl bg-[#171a21] border border-white/10 text-gray-300 flex items-center justify-center hover:text-indigo-400 hover:border-indigo-500/50 hover:-translate-y-1 transition">

              <Github size={20}/>

            </a>



            <a className="w-11 h-11 rounded-xl bg-[#171a21] border border-white/10 text-gray-300 flex items-center justify-center hover:text-indigo-400 hover:border-indigo-500/50 hover:-translate-y-1 transition">

              <Linkedin size={20}/>

            </a>



            <a className="w-11 h-11 rounded-xl bg-[#171a21] border border-white/10 text-gray-300 flex items-center justify-center hover:text-indigo-400 hover:border-indigo-500/50 hover:-translate-y-1 transition">

              <Mail size={20}/>

            </a>


          </nav>


        </article>


      </div>


    </section>

  )
}