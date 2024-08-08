import React from "react";
import Technologies from "../Components/Technologies";
import Cta from "../Components/Cta";

const Industries = () => {
  return (
   <>
    <section className="relative overflow-hidden">
        <div className="relative inset-0">
          <img className="object-cover w-full h-[500px]" src="/industrisbg.png" />
        </div>

   </section>

   <section className="py-10 bg-[#03001417] backdrop-blur-md sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Industries We Serve</h2>
      <p className="mt-4 text-base text-gray-200">At MetaXperts, we pride ourselves on delivering tailored solutions across a diverse range of industries. Our expertise and commitment to excellence ensure that we meet the unique needs of each sector.</p> 
    </div>
  </div>

<div className="max-w-5xl mx-auto text-white mt-32">
  <div className="text-center max-w-2xl mx-auto">
    {/* <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Benefits of MERN</h2> */}
    {/* <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p> */}
  </div>
  <div className="mt-16">

    <div className="grid md:grid-cols-2 items-center gap-16">

{/* feature1 */}
      <div>
        <img src="/Course app-pana.png" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Education</h3>
        <p className="text-gray-200">In the dynamic field of education, we provide innovative solutions that enhance learning experiences and streamline administrative processes. Our services are designed to improve educational outcomes, foster collaboration, and manage resources efficiently.</p>
            <ul className="list-disc text-gray-200 space-y-2 pl-4 mt-6">
              <li>Learning Management System (LMS)</li>
              <li>Student Information System (SIS)</li>
              <li>Virtual Classrooms & E-learning Platforms</li>
              <li>Administrative & Financial Management Software</li>
            </ul>
      </div>

{/* feature2 */}
      <div className="max-md:order-3 my-20">
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Healthcare</h3>
        <p className="text-gray-200">We understand the critical nature of healthcare services and are dedicated to supporting medical professionals with cutting-edge technology and efficient management systems. Our solutions aim to improve patient care, optimize operations, and ensure compliance with industry regulations.</p>
        <ul className="list-disc text-gray-200 space-y-2 pl-4 mt-6">
              <li>Electronic Health Records (EHR)</li>
              <li>Patient Management Systems</li>
              <li>Medical Billing & Coding Software</li>
            </ul>
      </div>
      <div>
        <img src="/Health professional team-cuate.png" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>


{/* feature3 */}
      <div className="">
        <img src="/Manage money-cuate.png" className=" w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Accounting & Finance</h3>
        <p className="text-gray-200">In the complex world of accounting and finance, precision and reliability are paramount. Our comprehensive solutions are designed to help businesses manage their financial operations with accuracy, transparency, and compliance, ensuring robust financial health and sustainability.</p>
        <ul className="list-disc text-gray-200 space-y-2 pl-4 mt-6">
              <li>Financial Management Software</li>
              <li>Accounting & Auditing Tools</li>
              <li>Portfolio Management Platforms</li>
            </ul>
      </div>


      {/* feature4 */}
      <div className="max-md:order-3 my-16">
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Manufacturing and Trading</h3>
        <p className="text-gray-200">We offer advanced solutions to the manufacturing and trading sectors, helping businesses optimize their production processes, manage supply chains, and improve overall efficiency. Our technologies are geared towards driving innovation, reducing costs, and enhancing competitiveness.</p>
        <ul className="list-disc text-gray-200 space-y-2 pl-4 mt-6">
              <li>Inventory & Warehouse Management Systems</li>
              <li>Manufacturing Execution Systems (MES)</li>
              <li>Supply Chain Management (SCM) Software</li>
            </ul>
      </div>
      <div>
        <img src="/Investor presentation-rafiki.svg" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>


{/* feature5 */}
      <div className="">
        <img src="/Logistics-amico.svg" className=" w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Logistic Management</h3>
        <p className="text-gray-200">In the fast-paced logistics industry, effective management of transportation, warehousing, and distribution is essential. Our comprehensive logistic management solutions are designed to streamline operations, enhance visibility, and improve delivery performance, ensuring timely and cost-effective movement of goods.</p>
        <ul className="list-disc text-gray-200 space-y-2 pl-4 mt-6">
              <li>Warehouse Management Systems (WMS)</li>
              <li>Freight & Cargo Management Solutions</li>
              <li>Real-time Tracking & Fleet Management Systems</li>
              <li>Transportation Management Systems (TMS)</li>
            </ul>
      </div>


    </div>
  </div>
</div>

</section>


   </>
  );
};

export default Industries;
