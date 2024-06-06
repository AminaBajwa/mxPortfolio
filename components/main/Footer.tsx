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
    // <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-12 ">
    //     <div className="w-full flex flex-col items-center justify-center m-auto">
    //         <div className="w-full h-full flex flex-row items-center justify-around flex-wrap shadow-lg bg-[#03001417] backdrop-blur-md z-50">

    //     <div className="w-[400px] h-auto flex flex-col">
    //         <div className="w-full h-full flex flex-row items-center m-auto px-[10px]">
    //             <img src="/MetaXperts.png"   ="logo" width={100} height={100} />
    //             {/* <span className="font-bold ml-[10px] text-[30px] hidden md:block text-white">MetaXperts</span> */}
    //         </div>
          
    //       {/* <p className="ml-[10px] text-[16px] flex flex-row items-center cursor-pointer">
    //         Build fully functional accessible web applications faster than ever
    //       </p > */}
    //        <h1 className=" font font-bold ml-[20px] text-[16px] hidden md:block my-[10px] text-white flex flex-row items-center cursor-pointer">Contact</h1>
    //       {/* <p className="font ml-[20px] text-[16px] hidden md:block text-white flex flex-row items-center cursor-pointer">info@metaxperts.net</p> */}
    //       <a href="mailto:info@metaxperts.net" className="font ml-[20px] text-[16px] hidden md:block text-white flex flex-row items-center cursor-pointer">
    //             info@metaxperts.net
    //     </a>

    //       <h1 className="font font-bold ml-[20px] text-[16px] hidden md:block my-[10px] text-white flex flex-row items-center cursor-pointer">Office</h1>
    //       <p className="font ml-[20px] text-[16px] hidden md:block text-white flex flex-row items-center cursor-pointer">Sublime chowk, Al-khalil Center, Sialkot</p>
    //     </div>
    
    //             <div className="font min-w-[200px] h-auto flex flex-col justify-start">
    //                 <div className="font-bold text-[16px] my-[20px] " >Community</div>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <Youtube /> */}
    //                     <img src="/youtube.png"   ="youtube" width={20} height={20} />
    //                     <a href="https://www.youtube.com/metaxperts.net/"><span className="text-[15px] ml-[6px]">Youtube</span></a> 
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <RxGithubLogo /> */}
    //                     <img src="/gitwhite.png"   ="Github" width={20} height={20} />
    //                     <a href="https://github.com/orgs/metaxperts/"><span className="text-[15px] ml-[6px]">Github</span>   </a> 
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <RxDiscordLogo /> */}
    //                     <img src="/discord_.png"   ="Discord" width={20} height={20} />
    //                     <a href="https://www.discord.com/metaxperts.net/"><span className="text-[15px] ml-[6px]">Discord</span></a>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <RxDiscordLogo /> */}
    //                     <img src="/dribble.png"   ="Dribble" width={20} height={20} />
    //                     <a href="https://dribbble.com/metaxperts.net/"><span className="text-[15px] ml-[6px]">Dribble</span> </a>   
    //                 </p>
    //             </div>
    //             <div className="min-w-[200px] h-auto flex flex-col justify-start">
    //                 <div className="font-bold text-[16px] my-[20px] ">Social Media</div>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <RxDiscordLogo /> */}
    //                     <img src="/facebook.png"   ="Facebook" width={15} height={15} />
    //                     <a href="https://www.facebook.com/metaxperts.net/"><span className="text-[15px] ml-[6px]">Facebook</span>  </a>  
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <FaYoutube /> */}
    //                     <img src="/instagram.png"   ="Instagram" width={15} height={15} />
    //                     <a href="https://www.instagram.com/metaxperts/"><span className="text-[15px] ml-[6px]">Instagram</span>  </a>  
    //                 </p>
                   
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <RxDiscordLogo /> */}
    //                     <img src="/linkedin.png"   ="Linkedin" width={15} height={15} />
    //                     <a href="https://www.linkedin.com/company/meta-xperts/mycompany/"> <span className="text-[15px] ml-[6px]">Linkedin</span>  </a>  
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
    //                     {/* <RxGithubLogo /> */}
    //                     <img src="/twitter.png"   ="Twitter" width={15} height={15} />
    //                     <a href="https://twitter.com/metaxperts.net/"> <span className="text-[15px] ml-[6px]">Twitter</span> </a>   
    //                 </p>
                 
    //             </div>

    //             <div className="min-w-[200px] h-auto flex flex-col justify-start">
    //                 <div className="font-bold text-[16px] my-[20px] ">Services</div>
    //                <p className="flex flex-row items-center my-[10px] cursor-pointer">
                     
    //                     <span className="text-[15px] ml-[6px]">Web Development</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
                      
    //                     <span className="text-[15px] ml-[6px]">Mobile Development</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
                  
    //                     <span className="text-[15px] ml-[6px]">UI/UX design</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[10px] cursor-pointer">
                  
    //               <span className="text-[15px] ml-[6px]">Custome Software</span>    
    //           </p>
    //             </div>
                
    //         </div>

    //         <div className="w-full h-[60px] mb-[20px] text-[15px] top-[-20] mt-[80px] shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10 text-center">
    //             &copy; MetaXperts 2024 Inc. All rights reserved
    //         </div>
    //     </div>
    // </div>


    <section className="py-10 sm:pt-16 lg:pt-24 bg-[#03001417] backdrop-blur-md">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
      <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
        <img className="w-auto h-16" src="/MetaXperts.png"/>
        <p className="text-base leading-relaxed text-gray-400 mt-7">Build fully functional accessible web applications faster than ever.</p>
          <a href="mailto:info@metaxperts.net" className="font text-base mt-6 hidden md:block text-gray-400  flex flex-row items-center cursor-pointer">
                info@metaxperts.net
        </a>
        <ul className="flex items-center space-x-3 mt-9">
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

          {/* <li>
          <a href="https://www.instagram.com/metaxperts/" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#9615DB] focus:bg-[#9615DB]">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0,0,256,256">
  <g fill="#1f2937" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM18,35h-4v-15h4zM16,17c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,35h-4v-5v-2.5c0,-1.925 -1.575,-3.5 -3.5,-3.5c-1.925,0 -3.5,1.575 -3.5,3.5v7.5h-4v-15h4v1.816c1.168,-1.122 2.752,-1.816 4.5,-1.816c3.59,0 6.5,2.91 6.5,6.5z" /></g></g>
</svg> </a>

          </li> */}

          {/* <li>
            <a href="#"   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#9615DB] focus:bg-[#9615DB]">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
              </svg>
            </a>
          </li> */}
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">Company</p>
        <ul className="mt-6 space-y-4">
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> About </a>
          </li>
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Features </a>
          </li>
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Works </a>
          </li>
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Contact </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">Comunity </p>
        <ul className="mt-6 space-y-4">
          <li>
            <a href="https://www.youtube.com/metaxperts.net/"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]">  <img src="/youtube.png" width={20} height={20} /> <span className="text-[15px] ml-[6px]">Youtube</span></a> 
          </li>
          <li>
            <a href="https://github.com/orgs/metaxperts/"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"><img src="/gitwhite.png" width={20} height={20} /> <span className="text-[15px] ml-[6px]">Github</span>  </a>
          </li>
          <li>
            <a href="https://www.discord.com/metaxperts.net/"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> <img src="/discord_.png" width={20} height={20} /> <span className="text-[15px] ml-[6px]">Discord</span> </a>
          </li>
          <li>
            <a href="https://dribbble.com/metaxperts.net/"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"><img src="/dribble.png"  width={20} height={20} /> <span className="text-[15px] ml-[6px]">Dribble</span></a>
          </li>
        </ul>
      </div>
      <div className="w-[300px]">
        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">Services</p>
        <ul className="mt-6 space-y-4">
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Web Development </a>
          </li>
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Mobile App Development </a>
          </li>
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Desktop App Development </a>
          </li>
          <li>
            <a href="#"   className="flex text-base text-gray-400 transition-all duration-200 hover:text-[#9615DB] focus:text-[#9615DB]"> Generative Ai </a>
          </li>
        </ul>
      </div>
      
    </div>
    <hr className="mt-16 mb-10 border-gray-200" />
    <p className="text-sm text-center text-gray-600">&copy; MetaXperts 2024 Inc. All rights reserved</p>
  </div>
</section>


  )
}

export default Footer