import React from "react";
import Technologies from "../Components/Technologies";
import Cta from "../Components/Cta";

const Flutter = () => {
  return (
   <>
   <section className="pt-10 bg-[#03001417] backdrop-blur-md sm:pt-16 lg:pt-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Revolutionizing Cross-Platform App Development</h2>
    </div>
  </div>
  <div className="container mx-auto 2xl:px-12">
    <img className="w-full mt-6" src="/flutterBg.png" />
  </div>
  

  <div className=" text-white my-12 z-50">
  <div className="text-center max-w-4xl max-md:max-w-md mx-auto">
    <div>
      <h2 className="text-2xl mb-4 ">Flutter revolutionizes the development workflow by enabling the creation, testing, and deployment of stunning mobile, web, desktop, and embedded experiences—all from a unified codebase.</h2>     
    </div>
  </div>
</div>


<div className="max-w-5xl mx-auto text-white mt-32">
  <div className="text-center max-w-2xl mx-auto">
   
  </div>
  <div className="mt-32 mx-4">
    <div className="grid md:grid-cols-2 items-center gap-16">

      <div>
        <img src="/Mobile-UX-cuate.svg" className="w-full h-[300px]  object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">FAST</h3>
        <p className="text-gray-200">Flutter compiles code directly into ARM or Intel machine code, optimizing performance for various devices. It also supports compilation to JavaScript for efficient web application development, ensuring fast execution across platforms.</p>
      </div>


      <div className="max-md:order-1 my-16">
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Productive</h3>
        <p className="text-gray-200">Flutter&apos;s Hot Reload feature lets you build and iterate quickly. Update your code and see changes almost instantly, without losing the current state. This speeds up the development process significantly.</p>
      </div>
      <div>
        <img src="/productivityFlutter.png" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>


      <div>
        <img src="/Mobile-security.png" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Flexible</h3>
        <p className="text-gray-200">Control every pixel to create customized, adaptive designs that look and feel great on any screen. Flutter enables highly personalized UIs, ensuring your app looks stunning and functions smoothly on all device sizes. This adaptability enhances the user experience across platforms.</p>
        {/* <button type="button" className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
          Read More
        </button> */}
      </div>

    </div>
  </div>
</div>


<div>
      

  


</div>


<Cta/>

</section>
 
   </>
  );
};

export default Flutter;
