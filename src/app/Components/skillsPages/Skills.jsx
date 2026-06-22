import Image from 'next/image';
import React from 'react';

// SVGs for Icons to keep it lightweight and matching the design
const CodeIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CubeIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function SkillsGrid() {
  return (
    <div className=" text-[#e0e3e5] py-12 px-4 sm:px-6 lg:px-8 w-full font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* ================= COLUMN 1 ================= */}
        <div className="flex flex-col gap-6">
          {/* React.js Card */}
          <div className="bg-[#ffffff08] border hover:-translate-y-1 hover:bg-[#ffffff10] border-[#FFFFFF1A] rounded-xl p-6 h-[260px] flex flex-col justify-between hover:border-[#2e5bff] transition-all duration-300 hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]">
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="bg-[#17191f] border border-[#242731] p-2.5 rounded-lg">
                  <CodeIcon  />
                </div>
                <span className="bg-[#17191f] border border-[#242731] text-[11px] font-semibold text-gray-400 px-3 py-1 rounded-full">
                  Expert
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">React.js</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">
                Building complex dynamic interfaces with state hooks and custom logic.
              </p>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                <span>Proficiency</span>
                <span className="text-[#a5b4fc]">95%</span>
              </div>
              <div className="w-full bg-[#181a21] h-[5px] rounded-full">
                <div className="bg-[#b4c6ef] h-full rounded-full w-[95%]" />
              </div>
            </div>
          </div>

          {/* TypeScript Card */}
          <div className="bg-[#ffffff08] border hover:-translate-y-1 hover:bg-[#ffffff10] border-[#FFFFFF1A] rounded-xl p-6 h-[260px] flex flex-col justify-between hover:border-[#2e5bff] transition-all duration-300 hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]">
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="bg-[#17191f] border border-[#242731] p-2.5 rounded-lg">
                  <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="bg-[#17191f] border border-[#242731] text-[11px] font-semibold text-gray-400 px-3 py-1 rounded-full">
                  Advanced
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">TypeScript</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">
                Static typing for bulletproof JavaScript development and scalability.
              </p>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                <span>Proficiency</span>
                <span className="text-[#a5b4fc]">85%</span>
              </div>
              <div className="w-full bg-[#181a21] h-[5px] rounded-full">
                <div className="bg-[#b4c6ef] h-full rounded-full w-[85%]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2 ================= */}
        <div className="flex flex-col gap-6">
          {/* Next.js Card */}
          <div className="bg-[#ffffff08] border hover:-translate-y-1 hover:bg-[#ffffff10] border-[#FFFFFF1A] rounded-xl p-6 h-[260px] flex flex-col justify-between hover:border-[#2e5bff] transition-all duration-300 hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]">
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="bg-[#17191f] border border-[#242731] p-2.5 rounded-lg">
                  <CubeIcon />
                </div>
                <span className="bg-[#17191f] border border-[#242731] text-[11px] font-semibold text-gray-400 px-3 py-1 rounded-full">
                  Expert
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">Next.js</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">
                Full-stack React framework optimized for production and SEO.
              </p>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                <span>Proficiency</span>
                <span className="text-[#a5b4fc]">90%</span>
              </div>
              <div className="w-full bg-[#181a21] h-[5px] rounded-full">
                <div className="bg-[#b4c6ef] h-full rounded-full w-[90%]" />
              </div>
            </div>
          </div>

          {/* JavaScript Card */}
          <div className="bg-[#ffffff08] border hover:-translate-y-1 hover:bg-[#ffffff10] border-[#FFFFFF1A] rounded-xl p-6 h-[260px] flex flex-col justify-between hover:border-[#2e5bff] transition-all duration-300 hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]">
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="bg-[#17191f] border border-[#242731] px-2.5 py-2 rounded-lg text-xs font-bold text-indigo-300 tracking-tighter">
                  JS
                </div>
                <span className="bg-[#17191f] border border-[#242731] text-[11px] font-semibold text-gray-400 px-3 py-1 rounded-full">
                  Expert
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">JavaScript</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">
                Core logic, ES6+, and asynchronous programming mastery.
              </p>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                <span>Proficiency</span>
                <span className="text-[#a5b4fc]">98%</span>
              </div>
              <div className="w-full bg-[#181a21] h-[5px] rounded-full">
                <div className="bg-[#b4c6ef] h-full rounded-full w-[98%]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3 ================= */}
        <div className="flex flex-col gap-6">
          {/* Styling List Card */}
          <div className="bg-[#ffffff08] border hover:-translate-y-1 hover:bg-[#ffffff10] border-[#FFFFFF1A] rounded-xl p-8 h-full max-h-50 flex flex-col justify-between hover:border-[#2e5bff] transition-all duration-300 hover:shadow-[0_3px_10px_rgba(46,91,255,0.15)]">
            <div className="flex items-center gap-2.5 mb-6">
              <PaletteIcon />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Styling</h4>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <span className="text-indigo-300 text-[11px]">92%</span>
                </div>
                <div className="w-full bg-[#181a21] h-1 rounded-full">
                  <div className="bg-[#b4c6ef] h-full rounded-full w-[92%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-gray-300">HTML5 & CSS3</span>
                  <span className="text-indigo-300 text-[11px]">98%</span>
                </div>
                <div className="w-full bg-[#181a21] h-1 rounded-full">
                  <div className="bg-[#b4c6ef] h-full rounded-full w-[98%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Tools List Card */}
          <div className="bg-[#ffffff08] border border-[#FFFFFF1A]
          hover:bg-[#ffffff10] hover:-translate-y-1 rounded-xl p-6 flex flex-col justify-center min-h-[140px] hover:border-indigo-500/40 transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-5">
              <SettingsIcon />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Tools</h4>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-gray-300">Git & GitHub</span>
                <span className="text-indigo-300 text-[11px]">88%</span>
              </div>
              <div className="w-full bg-[#181a21] h-1 rounded-full">
                <div className="bg-[#b4c6ef] h-full rounded-full w-[88%]" />
              </div>
            </div>
          </div>

          {/* System Architecture Card */}
<div className="relative overflow-hidden border border-[#1d1f26] rounded-xl min-h-45 opacity-20 hover:opacity-80 flex flex-col justify-end hover:border-indigo-500/40 transition-all duration-300 group">

  {/* Background Image */}
  <Image
    alt="processor2"
    width={600}
    height={500}
    src="/processor2.png"
    className="absolute inset-0 w-full h-full object-cover"
  />


  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />


  {/* Text Content */}
  <div className="relative z-10 p-6">

    <span className="text-[9px] text-gray-300 uppercase font-extrabold tracking-widest block mb-0.5">
      Current Focus
    </span>

    <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-indigo-200 transition-colors">
      System Architecture
    </h4>

  </div>

</div>
        </div>

      </div>
    </div>
  );
}