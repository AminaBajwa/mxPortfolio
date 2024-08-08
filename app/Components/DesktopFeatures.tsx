import React from "react";

const features = [
  {
    svg: "/customWeb.png",
    title: "Custom Application Development",
    description: "We provide custom desktop application development tailored to your unique business requirements, ensuring a perfect fit for your operational needs.",
},
  {
    svg:"/ScalabilityWeb.png",
    title: "Cross-Platform Solutions",
    description: "Our team specializes in developing cross-platform applications that run seamlessly on Windows, macOS, and Linux, providing a consistent experience across different operating systems.",
  },
  {
    svg:"/trophy.png",
    title: "Performance Optimization",
    description: "Our applications are designed for optimal performance, utilizing efficient code and advanced algorithms to ensure fast and reliable operation.",
  },
  {
    svg:"/UIWeb.png",
    title: "Enhanced User Experience",
    description: "We prioritize intuitive UI and UX design, creating applications that are not only functional but also easy to navigate and aesthetically pleasing.",
  },
  {
    svg:"/securityWeb.png",
    title: "Security",
    description: "We implement robust security measures to protect sensitive data and ensure compliance with industry standards and regulations.",
  },
  {
    svg:"/customer-serviceWEB.png",
    title: "Technical Support",
    description: "We provide ongoing maintenance and support to ensure your application remains up-to-date and continues to perform at its best.",
  },
 
];

const DesktopFeatures = () => (
  <section className="py-10 bg-[#03001417] backdrop-blur-md sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="relative flex items-center justify-center mx-auto">
              <img src={feature.svg}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-base text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DesktopFeatures;
