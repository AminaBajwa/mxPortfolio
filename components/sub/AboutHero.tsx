"use client"
import React from 'react'

const AboutHero = () => {
  return (
    <>
<div className=" text-white my-12 z-50">
  <div className="text-center max-w-4xl max-md:max-w-md mx-auto">
    <div>
    <h2 className="md:text-xl text-xl text-[#9615db] mt-10 mb-6 uppercase">ABOUT METAXPERTS</h2>
      <h2 className="md:text-5xl text-4xl font-extrabold mb-4 md:!leading-[55px]">As a cutting-edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9] font-bold ">
              {" "}
              technology firm{" "} 
            </span>, we specialize in resolving intricate technical challenges.</h2>     
     
      <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
        {/* <button type="button" className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded px-5 py-3">Start a free trial</button> */}

<a href="#contact" className=" text-white font-bold text-sm px-12 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" 
>Contact Us</a>
<a href="#contact" className=" text-white font-bold text-sm px-12 py-4 button-pri border-2 border-[#9615DB] text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" 
>View More</a>
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default AboutHero;