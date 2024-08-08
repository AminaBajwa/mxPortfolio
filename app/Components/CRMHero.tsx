import React from "react";
import StatsSection from "./StatsSection";

const WebHero = () => {
  return (
   <>
 <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
  <div className="absolute inset-0">
    <img className="object-cover w-full h-full md:object-left md:scale-180 md:origin-top-left" src="/CRM.png" />
  </div>
  <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />
  <div className="absolute inset-0 block bg-black/60 md:hidden" />
  <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="text-center lg:max-w-2xl md:text-left">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Salesforce CRM services</h2>
      <p className="mt-4 text-base text-gray-200">We offering comprehensive Salesforce CRM services to meet your business needs. From customizing Salesforce implementations to integrating advanced solutions, we ensure your sales, customer service, and marketing strategies are finely tuned for success. </p>
      
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

export default WebHero;
