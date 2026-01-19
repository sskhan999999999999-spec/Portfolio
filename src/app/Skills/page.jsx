import React from 'react'
import HeroSection from '../Components/skillsPages/HeroSection';
import Skills from '../Components/skillsPages/Skills';

export const metadata = {
  title: "Skills",
  description: "My technical skills including HTML, CSS, JavaScript, React, and Next.js.",
};


function Project() {
    return (  
        <div>
         <HeroSection/>
         <Skills/>
        </div>

    )
}

export default Project
