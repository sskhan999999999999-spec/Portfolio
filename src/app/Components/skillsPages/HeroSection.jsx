import React from 'react';
import './herosection.css';

function HeroSection() {
  return (
    <div className="bg-indigo-100 px-6 mt-10 sm:px-12 md:px-20 py-12 sm:py-20  flex justify-center">
      <div className='mx-auto '>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-bl from-blue-500 to-purple-500 mb-6 md:mb-8 slide-from-top   ">
        Where Curiosity Meets Code
      </h1>
      
        <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed sm:max-w-xl md:max-w-2xl slide-from-bottom">
          Every line of code I write comes from a mindset that never stops exploring. My skillset isn’t just a list of tools—it’s a collection of experiences, challenges, experiments, and late-night breakthroughs that shaped me as a developer. From crafting smooth interfaces to engineering reliable backend systems, I use each technology with one goal in mind: creating digital experiences that feel effortless, intuitive, and built with intention. Here’s a curated look at the tools, frameworks, and technologies that fuel my creativity and help me turn ideas into meaningful, functional products.
        </p>
       
      </div>
    </div>
  );
}

export default HeroSection;
