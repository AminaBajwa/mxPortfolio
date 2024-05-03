
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";


// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (

//     <div className="font w-full h-full bg-[#03001417] text-gray-200 shadow-lg p-[15px]">
//        <h1 className="font text-[40px] font-bold text-transparent bg-clip-text bg-white flex flex-col items-center justify-center">
//         Contact Us</h1>
//        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
//       <div className="z-10 p-[15px] bg-transparent text-gray-200 shadow-lg p-[15px]" >
//          <div id="glob" className="flex flex-row justify-around absolute flex-wrap mt-14 gap-5 px-[330px] z-10 items-center">
//            <img src="glob_1.png" alt="" width={400} height={400} style={{ opacity: 0.4}}/>
//         </div>
//         <h5 className="text-[30px] font-bold text-white my-2">

//           Looking for a custom software development company?
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md text-white my-2">
          
//           You are in the right place. MetaXperts team will walk you through the process with ease and joy and deliver a high-quality product timely.
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="">
//            metaxperts@gmail.com
//           </Link>
          
//         </div>
//       </div>
//       <div className="z-50 ">
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col w-[500px] justify-center" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="abc@gmail.com"
//               />
//             </div>
//             <div className="mb-6" >
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//         <div className="px-[150px] ">
//         <button
//               type="submit"
//               className="bg-[#1d4137] hover:bg-[#1d4137]-600 text-white font-medium max-w-[200px] py-2.5 px-5 rounded-lg w-[200px]"
             
//             >
//               Send Message
//             </button>
//         </div>
//           </form>
//         )}
//       </div>
//     </section>  
                
//     </div>
//   );
// };

// export default EmailSection;







