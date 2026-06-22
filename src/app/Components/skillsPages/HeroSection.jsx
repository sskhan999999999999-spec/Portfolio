import React from 'react';

export default function ExpertiseHeader() {
  return (
    <header className=" text-gray-300 py-12 md:py-[120px] px-6 sm:px-8 lg:px-12 w-full font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
        
        {/* Badge / Top Line */}
        <div className="flex items-center gap-3 mb-5 group">
          <span className="w-8 h-0.5 bg-indigo-500 inline-block transition-all duration-300 group-hover:w-12"></span>
          <span className="text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Expertise & Technologies
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6 max-w-4xl">
          Architecting Digital Excellence <br className="hidden sm:inline" />
          Through <span className="italic font-serif text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-purple-300 to-pink-200">Technical Precision.</span>
        </h1>
        
        {/* Description Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl opacity-90">
          A comprehensive overview of my core technical stack and proficiency levels, focused on building 
          scalable, performant, and visually captivating web experiences.
        </p>

      </div>
    </header>
  );
}