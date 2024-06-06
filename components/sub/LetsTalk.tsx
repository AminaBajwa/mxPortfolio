
import React from 'react'


const LetsTalk = () => {
  return (
    <>
<section className="py-10 bg-[#03001417] backdrop-blur-md z-50 sm:py-16 lg:py-24">
  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
      <div className="pr-12 sm:pr-0">
        <div className="relative max-w-xs mb-12">
          <img className="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" />
          <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg" />
        </div>
      </div>
      <div>
        <p className="mt-4 mb-4 leading-relaxed md:text-xl text-xl text-[#9615db] "> HOW CAN WE HELP </p>
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Lets dive into software.</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-200">Let us hear your challenges. We will listen, ask questions, and deliver our solutions.</p>
        <div className="mt-10 space-x-4">
            <a href="#contact" 
            className=" text-white font-bold text-sm px-6 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300" >
            Plan a Tech Meeting</a>
        </div>
      </div>
    </div>
  </div>
</section>


    </>    
  )
}

export default LetsTalk