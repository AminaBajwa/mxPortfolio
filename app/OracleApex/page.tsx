import React from "react";
import Technologies from "../Components/Technologies";
import Cta from "../Components/Cta";

const OracleApex = () => {
    return (
        <>
        <section className="relative overflow-hidden bg-[#03001417] backdrop-blur-md ">
        <div className="relative inset-0">
          <img className="object-cover w-full h-[500px]" src="/oraclwbh.png" />
        </div>

       
     
       <div className=" text-white my-12 z-50">
       <div className="text-center max-w-4xl max-md:max-w-md mx-auto">
         <div>
         <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Empowering Enterprise Application Development with Oracle Apex</h2>
           <h2 className="mt-4 text-base text-gray-200">Oracle Application Express (APEX), empowers developers with a low-code environment to create robust enterprise applications. Integrated with Oracle Database, it simplifies web app development through SQL and PL/SQL, ensuring scalability and security.</h2>     
         </div>
       </div>
     </div>
     
     
     <div className="max-w-5xl mx-auto text-white mt-32">
       <div className="text-center max-w-2xl mx-auto">
        
       </div>
       <div className="mt-32 mx-4 mb-[100px]">
         <div className="grid md:grid-cols-2 items-center gap-16">
     
           <div>
             <img src="/fastserver.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
           </div>
           <div>
             <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Rapid Development</h3>
             <p className="text-gray-200"> With its low-code approach, Oracle Apex allows developers to quickly prototype and develop applications. It provides a declarative environment where developers can build applications by simply defining components and their relationships.</p>
           </div>
     
     
           <div className="max-md:order-1 my-16">
             <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Scalability</h3>
             <p className="text-gray-200">Applications built with Oracle Apex leverage the scalability and reliability of Oracle Database. This ensures that applications can handle large amounts of data and user interactions without compromising performance.</p>
           </div>
           <div>
             <img src="/Server-cuate.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
           </div>
     
     
           <div>
             <img src="/Secure-Server.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
           </div>
           <div>
             <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Security</h3>
             <p className="text-gray-200">Oracle Apex integrates tightly with Oracle Database, inheriting its robust security features. It supports fine-grained access control, authentication mechanisms, and data encryption, ensuring that applications meet enterprise-level security standards.</p>
             
           </div>
     
         </div>
       </div>
     </div>
     <div>
     </div>
     <Cta/>
     
     </section>
      
        </>
  );
};

export default OracleApex;
