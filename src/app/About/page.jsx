  import React from 'react'
import HeroSection from '../Components/About/HeroSection';
import Second from '../Components/About/Second';
import Projects from '../Components/About/Projects';
  
  export const metadata = {
  title: "About | Shah Sawar",
  description: "Learn more about Shah Sawar, a frontend developer specializing in modern UI, React, and Next.js.",
};

  function About () {
    return (
          <div>
              <HeroSection/>
              <Second/>
              <Projects/>
          </div>
    )
  }
  
  export default About 
  