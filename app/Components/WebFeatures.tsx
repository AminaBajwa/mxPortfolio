import React from "react";

const features = [
  {
    svg: "/customWeb.png",
    title: "Custom Solutions",
    description: "We provide tailored web development solutions that meet the specific needs and goals of your business, ensuring that your website stands out from the competition.",
  },
  {
    svg:"/ScalabilityWeb.png",
    title: "Scalability",
    description: "We build scalable websites that can grow with your business, accommodating increased traffic and new features as your needs evolve.",
  },
  {
    svg:"/UIWeb.png",
    title: "Enhanced User Experience",
    description: "Our web development services focus on creating an engaging and intuitive user interface, ensuring visitors have a seamless and enjoyable experience on your website or web app.",
  },
  {
    svg:"/securityWeb.png",
    title: "Security",
    description: "We implement the latest security measures to protect your website from threats and vulnerabilities, ensuring your data and your customers' data remain safe.",
  },
  {
    svg:"/customer-serviceWEB.png",
    title: "Technical Support",
    description: "Our team provides ongoing technical support and maintenance, ensuring your website remains up-to-date and functions smoothly at all times.",
  },
  {
    svg:"/trophy.png",
    title: "Competitive Advantage",
    description: "A professionally developed website gives your business a competitive edge, enhancing your brand image and helping you achieve your business objectives.",
  },
];

const WebFeatures = () => (
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

export default WebFeatures;
