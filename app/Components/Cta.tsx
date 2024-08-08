"use client"
import React from 'react'

const Cta = () => {
  return (
   <section className="py-10 bg-[#03001417] backdrop-blur-md z-50 sm:py-16 lg:py-16">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 -mr-6 overflow-hidden bg-[#9615db] rounded-full">
          <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" />
        </div>
        <div className="relative overflow-hidden bg-[#9615db] border-8 border-#9615db[] rounded-full w-28 h-28">
          <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"  />
        </div>
        <div className="w-20 h-20 -ml-6 overflow-hidden bg-[#9615db] rounded-full">
          <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"  />
        </div>
      </div>
      <h2 className="mt-8 text-3xl font-bold leading-tight text-white lg:mt-12 sm:text-4xl lg:text-5xl">Join Our <span className="border-b-8 border-[#9615db]">vibrant developer</span> community</h2>
      <p className="max-w-xl mx-auto mt-6 text-xl text-gray-400 md:mt-10">Unlock boundless opportunities for collaboration and growth! Join our dynamic developer network and lets bring your projects to life, together.</p>
      {/* <a href="#" className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700" role="button">
        <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Get instant access
      </a> */}
        <div className="mt-10 space-x-4">
        <a href="/Contact_us"
             className=" text-white font-bold text-sm px-10 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" >Get instant access</a>
        </div>
    </div>
  </div>
</section>

  )
}

export default Cta