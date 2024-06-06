'use client'
import React, { useEffect } from 'react';
import Link from "next/link";
import { Socials } from "@/constants";
// import Image from "next/image";

const Header = () => {

  const handleClick = () => {
    const collapseMenu = document.getElementById('collapseMenu');

    if (collapseMenu) {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap gap-5 w-full items-center justify-between  top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50">
         <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src="/MetaXperts.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold text-[25px] ml-[10px] hidden md:block text-white">
            MetaXperts
          </span>
        </a>
        <div className='flex max-lg:ml-auto lg:order-1'>
          <button id="toggle" className='lg:hidden' onClick={handleClick}>
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

       
        <ul id="collapseMenu" className='lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full lg:border lg:border-[#603786] bg-[#0300145e] lg:ml-20 px-[20px] py-[10px] rounded-full text-gray-200'>
        <li className='cursor-pointer button-pri px-4 py-1 rounded-full transition duration-300'><Link href="#about-me"
            className=' text-[#fff] block font-semibold text-[15px]'>About Us</Link>
        </li>
          <li className='cursor-pointer button-pri px-4 py-1 rounded-full transition duration-300'>
            <Link href="#skills"
              className=' text-[#fff] block font-semibold text-[15px]'>Services</Link>
          </li>
        <li className='cursor-pointer button-pri px-4 py-1 rounded-full transition duration-300'><Link href="#projects" 
            className=' text-[#fff] block font-semibold text-[15px]'>Projects</Link>
        </li>
        <li className='cursor-pointer button-pri px-4 py-1 rounded-full transition duration-300'><Link href="#contact"
            className='text-[#fff] block font-semibold text-[15px]'>Contact</Link>
        </li>
        
      </ul>
     
       
      
       
       
      {/* <div className="lg:flex lg:flex-row gap-3 max-lg:ml-auto lg:ml-24 hidden">
        {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={18}
              height={18}
            />
          ))}
        </div> */}

<div className="lg:flex lg:flex-row gap-3 max-lg:ml-auto lg:ml-24 hidden">
  {Socials.map((social) => (
    <a key={social.name} href={social.ref} target="_blank" rel="noopener noreferrer">
      <img
        src={social.src}
        alt={social.name}
        width={18}
        height={18}
      />
    </a>
  ))}
</div>

        
    </div>
  </header>
  )
}

export default Header


