
import React from "react";

const WebServices = () => {
  return (
   <>

<section className="bg-[#03001417] backdrop-blur-md">
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-16 2xl:py-24">
    <div className="text-center lg:max-w-7xl pt-24">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">Service Description</h2>
      <div className="mt-6">
  <p className="text-base leading-relaxed text-gray-200 md:leading-relaxed my-1">
    We offer Web Development Services to businesses of all sizes to help them grow and succeed.
  </p>
  <p className="text-base leading-relaxed text-gray-200 md:leading-relaxed my-1">
    Web development involves a variety of tasks, including designing an engaging user interface, developing robust back-end functionality, and ensuring the website or web app is responsive and user-friendly.
  </p>
  <p className="text-base leading-relaxed text-gray-200 md:leading-relaxed my-1">
    Our comprehensive web development services cover both the visual design aspects and the underlying technical infrastructure, providing you with a seamless and efficient online presence.
  </p>
</div>


    </div>
  </div>
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
    <div className="py-10 sm:py-16 lg:py-16 2xl:pl-10 ">
      <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
        <div className="lg:order-1 2xl:-mr-10">
          <img className="w-full shadow-xl rounded-xl" src="/webHeroImg.jpg"  />
        </div>
        <div className="lg:order-2">
          {/* <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">Are you ready to <br className="hidden xl:block" />join Celebration?</h2> */}
          <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-1 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
            <li className="flex items-center">
              <svg className="flex-shrink-0 w-10 h-10 text-[#9615DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 font-medium text-white"> Front-end Development </span>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 w-10 h-10 text-[#9615DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 font-medium text-white"> Back-end Development</span>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 w-10 h-10 text-[#9615DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 font-medium text-white"> Content Management System (CMS) Integration </span>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 w-10 h-10 text-[#9615DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 font-medium text-white"> E-commerce Features </span>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 w-10 h-10 text-[#9615DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 font-medium text-white"> Responsive Design</span>
            </li>

          </ul>
          
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  );
};

export default WebServices;
