
'use client'
import React, { useRef } from 'react';

export const Contact = () => {
  return (
 <>
<section className="py-10 bg-[#03001417] backdrop-blur-md z-50 sm:py-16 lg:py-24">
  <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
      <div className="flex flex-col justify-between lg:py-5">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-[40px]">Looking for a custom software development company?</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white" >You are in the right place. MetaXperts team will walk you through the process with ease, joy & deliver high-quality product timely.</p>
        </div>
   
      </div>

      <div className="lg:pl-12">
        <div className="overflow-hidden bg-[#11101B] rounded-md">
          <div className="p-6 sm:p-10">
            <h3 className="text-3xl font-semibold text-white">Get a free quote</h3>
            {/* <p className="mt-4 text-base text-gray-300">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
            <form action="#" method="POST" className="mt-4">
              <div className="space-y-6">
                <div>
                  <label className="text-base font-medium text-gray-300"> Your name </label>
                  <div className="mt-2.5 relative">
                    <input type="text" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:ring-[#603786] focus:border-[#603786] caret-[#603786]" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-300"> Email address </label>
                  <div className="mt-2.5 relative">
                    <input type="text" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md focus:outline-none focus:ring-[#603786] focus:border-[#603786] caret-[#603786]" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-300"> Project brief </label>
                  <div className="mt-2.5 relative">
                    <textarea placeholder="Enter your project brief" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md resize-y focus:outline-none focus:ring-[#603786] focus:border-[#603786] caret-[#603786]" rows={4} defaultValue={""} />
                  </div>
                </div>
                <div>
                <button
            className="shadow button-primary text-white font-medium focus:shadow-outline-purple focus:outline-none py-4 px-6 rounded"
            type="submit"> Get free quote</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </div>
  </div>
</section>


 </>
  );
};

export default Contact;



