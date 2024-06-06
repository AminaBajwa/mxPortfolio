"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
//import { SparklesIcon } from 'heroicons/react/24/solid'

const How = () => {
  return (
    <>
<section className=" py-10 bg-[#03001417] backdrop-blur-md z-50 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
    <h2 className="md:text-xl text-xl text-[#9615db] mt-10 mb-6 uppercase">WHAT ARE THE NEXT STEPS</h2>
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Start Your Journey to Excellence.</h2>
      <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-400"> Discover How MetaXperts Transforms Your Operations for Maximum Efficiency and Growth</p>
    </div>
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
      </div>
      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700"> 1 </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Comprehensive Assessment</h3>
          <p className="mt-4 text-base text-gray-400">We start with a detailed evaluation to identify improvement areas and understand your unique challenges, laying the foundation for tailored solutions.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700"> 2 </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Strategy and Implementation</h3>
          <p className="mt-4 text-base text-gray-400">Our experts develop a customized strategy for your needs and goals, providing hands-on support for seamless implementation and minimal disruption.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700"> 3 </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Support and Improve</h3>
          <p className="mt-4 text-base text-gray-400">We offer ongoing support and improvement beyond implementation. Monitoring performance guarantees our solutions meet your business objectives</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default How;