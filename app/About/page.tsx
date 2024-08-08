'use client'
import React from 'react';
import AboutHero from '../Components/AboutHero';
// import Team from '../Components/Team';
import Vision from '../Components/Vision';

const About = () => {
  return (
    <>
<div className="flex flex-col gap-20">
        
        <AboutHero/>
        <Vision/>
        {/* <Team/> */}

      </div>


    </>
  )
}

export default About;