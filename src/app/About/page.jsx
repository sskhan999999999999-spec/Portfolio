  import React from 'react'
import HeroSection from '../Components/About/HeroSection';
import Second from '../Components/About/Second';
  
  export const metadata = {
  title: "About | Shah Sawar",
  description: "Learn more about Shah Sawar, a frontend developer specializing in modern UI, React, and Next.js.",
};

  function About () {
    return (
          <div>
              <HeroSection/>
              <Second/>
          </div>
    )
  }
  
  export default About 
  