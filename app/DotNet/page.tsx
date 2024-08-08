import React from "react";
import Technologies from "../Components/Technologies";
import Cta from "../Components/Cta";

const DotNet = () => {
  return (
   <>
   <section className="relative overflow-hidden">
   <div className="relative inset-0">
          <img className="object-cover w-full h-[500px]" src="/DotNetbg.png" />
        </div>
</section>

<section className="py-10 bg-[#03001417] backdrop-blur-md sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Revolutionizing Application Development with .NET</h2>
      <p className="mt-4 text-base text-gray-200">.NET is a comprehensive framework developed by Microsoft for building a variety of applications, including web, mobile, desktop, cloud, and IoT. It supports multiple programming languages and provides a unified platform for development, integration, and deployment.</p> 
    </div>
  </div>

<div className="max-w-5xl mx-auto text-white mt-32">
  <div className="text-center max-w-2xl mx-auto">
    {/* <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Benefits of MERN</h2> */}
    {/* <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p> */}
  </div>
  <div className="mt-16 mx-4">
    <div className="grid md:grid-cols-2 items-center gap-16">

{/* feature1 */}
      <div>
        <img src="https://readymadeui.com/image-1.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Performance and Efficiency</h3>
        <p className="text-gray-200">.NET provides high performance through its just-in-time compilation and native optimization capabilities. It ensures faster execution and efficient memory management, enhancing overall application performance.</p>
      </div>

{/* feature2 */}
      <div className="max-md:order-3 my-16">
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Versatility and Cross-Platform Compatibility</h3>
        <p className="text-gray-200">With support for multiple programming languages and frameworks, .NET enables developers to build applications for various platforms, including Windows, Linux, and macOS. It offers flexibility in choosing development tools and environments.</p>
      </div>
      <div>
        <img src="/Cross-platform-software.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>


{/* feature3 */}
      <div>
        <img src="/Software-integration.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Cloud and IoT Integration</h3>
        <p className="text-gray-200">.NET supports seamless integration with cloud services like Azure, enabling developers to build, deploy, and manage scalable applications in the cloud. It also provides tools and libraries for Internet of Things (IoT) development, facilitating IoT solutions development.</p>
      </div>

    </div>
  </div>
</div>

{/* <FAQSection/> */}
<Cta/>
</section>
   </>
  );
};

export default DotNet;
