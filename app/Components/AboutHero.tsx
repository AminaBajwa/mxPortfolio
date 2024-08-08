"use client"
import React from 'react'

const AboutHero = () => {
  return (
    <>
<div className=" text-white my-12 ">
  <div className="text-center max-w-4xl max-md:max-w-md mx-auto">
    <div className=''>
    <h2 className="md:text-xl text-xl text-[#9615db] mt-10 mb-6 uppercase">ABOUT MetaXperts</h2>
      <h2 className="md:text-5xl text-4xl font-extrabold mb-4 md:!leading-[55px] ">As a cutting-edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9] font-bold ">
              {" "}
              technology firm{" "} 
            </span>, we specialize in resolving intricate technical challenges.</h2>     
     
            <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col max-sm:items-center">
  <a
    href="/Contact_us"
    className="text-white font-bold text-sm px-12 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40"
  >
    Contact Us
  </a>
  <a
    href="/Industries"
    className="text-white font-bold text-sm px-12 py-4 button-pri border-2 border-[#9615DB] text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40"
  >
    View More
  </a>
</div>

    </div>
  </div>
</div>

    </>
  )
}

export default AboutHero;