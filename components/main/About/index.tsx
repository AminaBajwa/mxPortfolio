'use client'
import React from 'react';
import Vision from "@/components/sub/Vision";
import Team from "@/components/sub/Team";
import Contact from "@/components/main/Contact";
import AboutHero from '@/components/sub/AboutHero';


const About = () => {
  return (
    <>
<div className="flex flex-col gap-20">
        
        <AboutHero/>
        <Vision/>
        <Team/>

      </div>


    </>
  )
}

export default About;