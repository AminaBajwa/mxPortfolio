import React from "react";

const features = [
  {
    svg: "/social-growth.png",
    title: "Broadened Audience Reach",
    description: "Mobile apps developed by MetaXperts allow businesses to connect with a larger audience, given the widespread use of smartphones and tablets across the globe.",
  },
  {
    svg:"/securityWeb.png",
    title: "Enhanced Security",
    description: "We ensures that all mobile apps are built with robust security measures to protect user data and privacy, giving users confidence in the safety of their information.",
  },
  {
    svg:"/UIWeb.png",
    title: "User Experience",
    description: "Our mobile apps are designed to deliver a user-friendly and intuitive experience, leading to higher user engagement and increased customer satisfaction.",
  },
  {
    svg:"/increase.png",
    title: "Boosted Sales and Revenue",
    description: "Mobile apps can be a powerful channel for sales and revenue through in-app purchases, subscriptions, and e-commerce functionalities.",
  },
  
  {
    svg:"/internet.png",
    title: "Offline Functionality",
    description: "Many of our mobile apps offer offline capabilities, enabling users to access content and perform tasks even without an internet connection.",
  },
  {
    svg:"/gps-navigation.png",
    title: "Access to Device Features",
    description: "Our developers can leverage device-specific features like GPS, camera, and sensors to create innovative and personalized experiences.",
  },
 
];

const MobFeatures = () => (
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

export default MobFeatures;
