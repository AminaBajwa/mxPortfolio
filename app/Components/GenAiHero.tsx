import React from "react";
import StatsSection from "./StatsSection";

const GenAiHero = () => {
  return (
   <>
 <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
 <div className="absolute inset-0 overflow-hidden">
          <video
            className="object-cover w-full h-full min-w-full min-h-full"
            src="/genAi.mp4"
            autoPlay
            loop
            muted
          />
        </div>
  <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />
  <div className="absolute inset-0 block bg-black/60 md:hidden" />
  <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="text-center lg:max-w-2xl md:text-left">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Generative AI Development Services</h2>
      <p className="mt-4 text-base text-gray-200">Our comprehensive generative AI services empower businesses to innovate and optimize their operations. Whether you’re looking to enhance content creation, automate tasks, or personalize user experiences, our AI solutions are designed to meet your unique needs and drive significant growth and efficiency across your organization. Partner with us to unlock the full potential of generative AI</p>
      <div className="mt-10 space-x-4">
      <a href="/Contact_us" className=" text-white font-bold text-sm px-10 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" >
      Lets Talk</a>
      </div>
    </div>
  </div>
</section>
<StatsSection/>
   </>
  );
};

export default GenAiHero;
