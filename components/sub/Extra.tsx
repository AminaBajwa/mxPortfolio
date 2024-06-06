

import React from 'react';
// import Image from "next/image";
const Extra = () => {
  return (
    
    <div id="projects" className="container max-w-6xl max-md:max-w-md mx-auto z-50 ">


<div className="px-6 sm:py-20 py-10">
  <div className="max-w-screen-xl mx-auto text-center text-white">
  <h2 className="md:text-xl text-xl text-[#9615db] mt-10 mb-6 uppercase">DELIVERED PROJECTS</h2>
  <h4 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">See how MetaXperts clients are revolutionizing tech.</h4>
  {/* <p className="text-white mt-8">MetaXperts delivers unmatched expertise with custom ERP solutions tailored to your business needs. Our commitment to excellence ensures superior quality and client-focused support, backed by a proven track record of successful projects. Trust us to elevate your operations with innovative, reliable solutions.</p> */}
  </div>
</div>



    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-12">
  {fintechProjects.map((project, index) => (
    <div key={index}
    className="text-gray-200 bg-[#03001417] backdrop-blur-md z-50 p-4 flex flex-col items-center shadow-xl shadow-gray-800/50 from-white to-black dark:from-black dark:to-gray-800 via-gray-800 after:content-[' '] after:absolute after:w-full after:h-full after:top-1/2 after:-translate-y-1/2 after:shadow-xl after:shadow-gray-800/50 dark:after:shadow-gray-800/50 shadow"
    >
        <img
            src={project.imageSrc}
            alt={project.title}
            width={130}
            height={100}
            className="w-50 h-20 object-contain mb-4"
          />
      <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
      <p className="text-gray-400 mb-4 text-center">{project.description}</p>
      {/* <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
        <a className="Welcome-text text-[14px] bg-[#1d4137]">Explore</a>
      </div> */}
    </div>
  ))}
</div>
    </div>
  );
};

const fintechProjects = [
  {
    title: 'MetaXperts',
    description:
      'A leading ERP software solutions company, dedicated to providing custom software solutions that redefine business operations.',
      imageSrc: '/MetaXperts.png',
    exploreHref: '#',
  },
  {
    title: 'Order Booking App',
    description:
      'This app is designed to simplify & optimize the order management process for businesses, ensuring seamless and efficient operations.',
      imageSrc: '/CourageLogo.png',
      exploreHref: '#',
  },
  {
    title: 'Financial Management',
    description: 
    'Streamline accounting management with ledger tracking, stock amounts, and integrated calculations. Gain insights into operations with GPX data visualization',
    // all within a unified ERP platform.',
    imageSrc: '/Finance.png',
    exploreHref: '#',
  },
  {
    title: 'E R P',
    description:
      'This app seamlessly connects people, places, and processes for effortless management and data-driven decisions.',
      //  Gain a holistic view, boost efficiency, and make smarter moves, faster.',
      imageSrc: '/ERP2.png',
      exploreHref: '#',
  },
  {
    title: 'Inventory System',
    description:
      'A centralized platform to oversee stock, purchases, various order types (PRRs, SOs, SRs, POs), and individual items.',
      // Imagine real-time inventory visibility, optimized stock levels, automated workflows',
      imageSrc: '/inventory1.png',
    exploreHref: '#',
  },
  {
    title: 'Food App',
    description:
      'Coming Soon',
      imageSrc: '/FOOD2.png',
    exploreHref: '#',
  },
];

export default Extra;

// bg-[#423c60d0]