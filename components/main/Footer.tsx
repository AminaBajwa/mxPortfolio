import React from "react";
import ContactUs from "./ContactUs";
// import {
//   RxDiscordLogo,
//   RxGithubLogo,
//   RxInstagramLogo,
//   RxTwitterLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";

//import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap shadow-lg backdrop-blur-md shadow-lg bg-[#03001417] backdrop-blur-md z-50">

        <div className="w-[400px] h-auto flex flex-col">
            <div className="w-full h-full flex flex-row items-center m-auto px-[10px]">
                <img src="/MetaXperts.png" alt="logo" width={100} height={100} />
                {/* <span className="font-bold ml-[10px] text-[30px] hidden md:block text-white">MetaXperts</span> */}
            </div>
          
          {/* <p className="ml-[10px] text-[16px] flex flex-row items-center cursor-pointer">
            Build fully functional accessible web applications faster than ever
          </p > */}
           <h1 className=" font font-bold ml-[20px] text-[16px] hidden md:block my-[10px] text-white flex flex-row items-center cursor-pointer">Contact</h1>
          <p className="font ml-[20px] text-[16px] hidden md:block text-white flex flex-row items-center cursor-pointer">metaxperts@gmail.com</p>
          <h1 className="font font-bold ml-[20px] text-[16px] hidden md:block my-[10px] text-white flex flex-row items-center cursor-pointer">Office</h1>
          <p className="font ml-[20px] text-[16px] hidden md:block text-white flex flex-row items-center cursor-pointer">Sublime chowk, Al-khalil Center, Sialkot</p>
        </div>
    
                <div className="font min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px] my-[20px] " >Community</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <FaYoutube /> */}
                        <img src="/youtube.png" alt="youtube" width={20} height={20} />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <RxGithubLogo /> */}
                        <img src="/gitwhite.png" alt="Github" width={20} height={20} />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <RxDiscordLogo /> */}
                        <img src="/discord_.png" alt="Discord" width={20} height={20} />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <RxDiscordLogo /> */}
                        <img src="/dribble.png" alt="Dribble" width={20} height={20} />
                        <span className="text-[15px] ml-[6px]">Dribble</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px] my-[20px] ">Social Media</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <RxDiscordLogo /> */}
                        <img src="/facebook.png" alt="Facebook" width={15} height={15} />
                        <span className="text-[15px] ml-[6px]">Facebook</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <FaYoutube /> */}
                        <img src="/instagram.png" alt="Instagram" width={15} height={15} />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                   
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <RxDiscordLogo /> */}
                        <img src="/linkedin.png" alt="Linkedin" width={15} height={15} />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        {/* <RxGithubLogo /> */}
                        <img src="/twitter.png" alt="Twitter" width={15} height={15} />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                 
                </div>

                <div className="min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px] my-[20px] ">Services</div>
                   <p className="flex flex-row items-center my-[10px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Web Development</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Mobile Development</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">UI/UX design</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                  
                  <span className="text-[15px] ml-[6px]">Custome Software</span>    
              </p>
                </div>
                
            </div>

            <div className="w-full h-[60px] mb-[20px] text-[15px] top-[-20] mt-[80px] shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10 text-center">
                &copy; MetaXperts 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer