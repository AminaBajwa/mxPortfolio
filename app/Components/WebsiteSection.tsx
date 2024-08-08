
import React from "react";


const WebsiteSection = () => {
  return (
   <>
   <div className="bg-[#03001417] backdrop-blur-md text-white ">
  <div className="grid md:grid-cols-2 items-center gap-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-16 2xl:pt-24">
    <div className="max-md:text-center">
      <h3 className="md:text-3xl font-bold text-2xl md:leading-10">Web Development Project - Enhancing Digital Presence</h3>
      <p className="mt-6 ">Our Web Development project aims to create dynamic, user-friendly, and visually appealing websites that cater to diverse client needs. Leveraging modern technologies and best practices, our team focuses on delivering robust, scalable, and high-performance web solutions.</p>
      <div className="mt-10 space-x-4">
        <a href="/Contact_us"
             className=" text-white font-bold text-sm px-10 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" >Get instant access</a>
        </div>
    </div>
    <div className="md:h-[400px]">
      <img src="/websiteAlnoor.png" className="w-full h-full object-contain" />
    </div>
  </div>
</div>
   </>
  );
};

export default WebsiteSection;
