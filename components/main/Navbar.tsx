import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="font w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10 text-[22px]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/MetaXperts.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-white">
            MetaXperts
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 ml-[90px] text-[16px]">
          <div className="flex items-center justify-between w-full h-auto border border-[#1d4137] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:bg-[#1d4137] px-4 py-1 rounded-full transition duration-300">
              About Us
            </a>
            <a href="#skills" className="cursor-pointer hover:bg-[#1d4137] px-4 py-1 rounded-full transition duration-300">
              Services
            </a>
            <a href="#projects" className="cursor-pointer hover:bg-[#1d4137] px-4 py-1 rounded-full transition duration-300">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer hover:bg-[#1d4137] px-4 py-1 rounded-full transition duration-300">
              Contact
            </a>
           
          </div>
        </div>

        <div className="flex flex-row gap-3">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={18}
              height={18}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
