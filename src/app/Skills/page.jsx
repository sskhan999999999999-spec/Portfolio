import React from 'react'
import HeroSection from '../Components/skillsPages/HeroSection';
import Skills from '../Components/skillsPages/Skills';
import Journey from '../Components/skillsPages/Journey';

export const metadata = {
  title: "Skills",
  description: "My technical skills including HTML, CSS, JavaScript, React, and Next.js.",
};


function Project() {
    return (  
        <div className='bg-[#101415]'>
         <HeroSection/>
         <Skills/>
         <Journey/>
        </div>

    )
}

export default Project
