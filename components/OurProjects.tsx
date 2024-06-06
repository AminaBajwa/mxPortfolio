

import React from 'react';
// import Image from "next/image";
const FintechProjects = () => {
  return (
    
<div id="projects" className="container max-w-6xl max-md:max-w-md mx-auto z-50 ">


<div className="px-6 sm:py-20 py-10">
  <div className="max-w-screen-xl mx-auto text-center text-white">
  <h2 className="md:text-xl text-xl text-[#9615db] mt-10 mb-6 uppercase">DELIVERED PROJECTS</h2>
  <h4 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">See how MetaXperts clients are revolutionizing tech.</h4>
  {/* <p className="text-white mt-8">MetaXperts delivers unmatched expertise with custom ERP solutions tailored to your business needs. Our commitment to excellence ensures superior quality and client-focused support, backed by a proven track record of successful projects. Trust us to elevate your operations with innovative, reliable solutions.</p> */}
  </div>
</div>
{/* bg-[#03001417] */}
{/* shadow-[0_2px_10px_-3px_#9615db]  */}
<div className="bg-[#03001417] backdrop-blur-md z-50 my-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-16 max-md:max-w-lg mx-auto">
      
    <div className="bg-[#03001417] backdrop-blur-md cursor-pointer rounded overflow-hidden relative top-0 hover:-top-2 transition-all duration-300 m-10">
        <img src="/erp03.png" alt="Blog Post 2" className="w-full h-[450px]" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2 uppercase">Business Management Software</span>
          <h3 className="text-xl font-bold text-gray-200">E R P Solutions</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">This app seamlessly connects people, places, and processes for effortless management and data-driven decisions.</p>
        </div>
    </div>

      <div className="bg-[#03001417] backdrop-blur-md cursor-pointer rounded overflow-hidden  relative top-0 hover:-top-2 transition-all duration-300 m-10">
        <img src="/Obapp.png" alt="Blog Post 1" className="w-full h-[450px] " />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">MOBILE APP DEVELOPMENT</span>
          <h3 className="text-xl font-bold text-gray-200">Order Booking App</h3>
          <hr className="my-6 text-gray-900" />
          <p className="text-gray-400 text-sm">This app is designed to simplify & optimize the order management process for businesses, ensuring seamless and efficient operations.</p>
        </div>
      </div>

      <div className="bg-[#03001417] backdrop-blur-md cursor-pointer rounded overflow-hidden relative top-0 hover:-top-2 transition-all duration-300 m-10">
        <img src="/zipzapp.png" alt="Blog Post 3" className="w-full h-[450px]" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2 uppercase">MOBILE APP DEVELOPMENT</span>
          <h3 className="text-xl font-bold text-gray-200">Zip Zap</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">Enjoy seamless parcel delivery from your doorstep with Zip Zap. Choose from various vehicle options, enter the delivery address in our app, and track your parcel in real-time.</p>
        </div>
      </div>

      <div className="bg-[#03001417] backdrop-blur-md cursor-pointer rounded overflow-hidden relative top-0 hover:-top-2 transition-all duration-300 m-10">
        <img src="/IMS.png" alt="Blog Post 3" className="w-full h-[450px]" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2 uppercase">Business Management Software</span>
          <h3 className="text-xl font-bold text-gray-200">Inventory System</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">A centralized platform to oversee stock, purchases, various order types (PRRs, SOs, SRs, POs), and individual items.</p>
        </div>
      </div>

    
      
    </div>
  </div>
</div>

    </div>
  );
};

const fintechProjects = [
 
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

export default FintechProjects;

// bg-[#423c60d0]