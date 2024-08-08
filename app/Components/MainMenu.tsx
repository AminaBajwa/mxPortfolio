"use client"
import React, { useState } from 'react';
// import { Socials } from "@/constants";
import Link from "next/link";

const MainMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='flex bg-[#030014] min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between px-10 py-3 gap-2 w-full z-50'>
          <a href="/" className='flex items-center'>
            <img
              src="/MetaXperts.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold text-[18px] mx-[10px] md:block text-white">
              MetaXperts
            </span>
          </a>

          <div id="collapseMenu" className={`max-lg:before:fixed max-lg:before:bg-[#030014] max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 ${menuOpen ? 'block' : 'hidden lg:block'}`}>
            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-[#030014]" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            <ul className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-[550px] max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='mb-6 hidden max-lg:block'>
                <a href="#about-me" className='flex items-center'>
                  <img
                    src="/MetaXperts.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="cursor-pointer hover:animate-slowspin"
                  />
                  <span className="font-bold mx-[10px] hidden md:block text-black">
                    MetaXperts
                  </span>
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative z-40">
                <a href="javascript:void(0)" className="hover:text-[#9615DB] text-[#030014] lg:text-white text-[13px] font-bold lg:hover:fill-[#9615DB] block">SERVICES
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" data-name={16} data-original="#000000" />
                  </svg>
                </a>
                <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 mt-5 rounded-xl">
                  <li className="border-b py-2 "><Link href="/WebDev" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Web Development</Link></li>
                  <li className="border-b py-2 "><Link href="/MobDev" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Mobile App Development</Link></li>
                  <li className="border-b py-2 "><Link href="/DekstopApp" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Desktop App Development </Link></li>
                  <li className="border-b py-2 "><Link href="/GenAiDev" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Generative AI Development </Link></li>
                  <li className="border-b py-2 "><Link href="/MSPower" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">MS Power Platform </Link></li>
                  <li className="border-b py-2 "><Link href="/CRM" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Salesforce CRM</Link></li>
                </ul>
              </li>

              <li className="group max-lg:border-b max-lg:py-3 relative z-30">
                <a href="javascript:void(0)" className="hover:text-[#9615DB] text-[#030014] lg:text-white text-[13px] font-bold lg:hover:fill-[#9615DB] block">TECHNOLOGIES
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" data-name={16} data-original="#000000" />
                  </svg>
                </a>
                <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 bg-white/3 mt-5 rounded-xl">
                  <li className="border-b py-2 "><Link href="/Flutter" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Flutter</Link></li>
                  <li className="border-b py-2 "><Link href="/MERN" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">MERN Stack</Link></li>
                  <li className="border-b py-2 "><Link href="/OracleApex" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Oracle Apex</Link></li>
                  <li className="border-b py-2 "><Link href="/DotNet" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">.NET</Link></li>
                  <li className="border-b py-2 "><Link href="/ML" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Machine Learning</Link></li>
                </ul>
              </li>

              <li className="group max-lg:border-b max-lg:py-3 relative z-20">
                <a href="/Industries" className="hover:text-[#9615DB] text-[#030014] lg:text-white text-[13px] font-bold lg:hover:fill-[#9615DB] block">INDUSTRIES
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" data-name={16} data-original="#000000" />
                  </svg> */}
                </a>
                {/* <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 bg-white/3 mt-5 rounded-xl">
                  <li className="border-b py-2 "><a href="javascript:void(0)" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Education</a></li>
                  <li className="border-b py-2 "><a href="javascript:void(0)" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Healthcare</a></li>
                  <li className="border-b py-2 "><a href="javascript:void(0)" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Accounting & Finance</a></li>
                  <li className="border-b py-2 "><a href="javascript:void(0)" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Manufacturing & Trading</a></li>
                  <li className="border-b py-2 "><a href="javascript:void(0)" className="hover:text-[#9615DB] text-gray-600 text-[13px] font-bold block">Logistics Management</a></li>
                </ul> */}
              </li>

              <li className="max-lg:border-b max-lg:py-3"><Link href='/About' className="hover:text-[#9615DB] text-[#030014] lg:text-white uppercase text-[13px] font-bold block">About</Link></li>
              <li className="max-lg:border-b max-lg:py-3"><Link href="/Contact_us" className="hover:text-[#9615DB] text-[#030014] lg:text-white text-[13px] uppercase font-bold block">Contact</Link></li>
            </ul>
          </div>

          {/* <div className="lg:flex lg:flex-row gap-3 max-lg:ml-auto hidden">
            {Socials.map((social) => (
              <a key={social.name} href={social.ref} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.src}
                  alt={social.name}
                  width={18}
                  height={18}
                  className="hover-filter"
                />
              </a>
            ))}
          </div> */}

<ul className="flex items-center space-x-3 ">
          <li>
            <a href="https://twitter.com/metaxperts"   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#9615DB] focus:bg-[#9615DB]">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/metaxperts/"   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#9615DB] focus:bg-[#9615DB]">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/metaxperts/"   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#9615DB] focus:bg-[#9615DB]">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                <circle cx="16.806" cy="7.207" r="1.078" />
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
              </svg>
            </a>
          </li>
         
          </ul>

          <button id="toggleMenu" className='lg:hidden' onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-white" viewBox="0 0 48 48">
              <path
                d="M42 36a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h32a2 2 0 0 1 2 2zM42 24a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h32a2 2 0 0 1 2 2zM42 12a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h32a2 2 0 0 1 2 2z"
                data-original="#000000" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default MainMenu;
