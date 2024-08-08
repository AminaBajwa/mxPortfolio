"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
//import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const HeroContent = () => {
  return (
  <>
  <motion.div 
initial="hidden"
animate="visible"
className=" text-[#fff] max-w-6xl max-md:max-w-md mx-auto">
  <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 z-50">
    <motion.div
     variants={slideInFromLeft(0.5)}
      className="max-md:order-1 max-md:text-center">
      
      <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
      <span>
            Providing 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9] font-bold ">
              {" "}
              the best{" "}
            </span>
         project experience
          </span>
      </h2>
      <motion.p 
      variants={slideInFromLeft(0.8)}
      className="mt-6 text-base text-gray-200 leading-relaxed">We are a leading ERP software solutions company, dedicated to providing custom software solutions that redefine business operations. Our expertise and commitment ensure that our tailored solutions align perfectly with our clients objectives.</motion.p>
      <div className="mt-10 space-x-4">

        <motion.a 
        href="#contact"
        variants={slideInFromLeft(1)}
        
        className=" text-white font-bold text-sm px-10 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" 
        whileHover={{ scale: 1.1 }}>Contact Us</motion.a>

      </div>
      
    </motion.div>
    <motion.div
    variants={slideInFromRight(0.8)}
     className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:h-full before:w-3/4 before:right-0 before:z-0 z-10">
      <img src="/mainIconsdark.svg" className="rounded-md lg:w-full md:w-11/12 z-50 relative" alt="Dining Experience" />
    </motion.div>
  </div>
</motion.div>

  </>
  );
};

export default HeroContent;
