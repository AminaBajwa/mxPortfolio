import React from "react";
import WebServices from "../Components/WebServices";
import WebFeatures from "../Components/WebFeatures";
import Cta from "../Components/Cta";
import WebsiteSection from "../Components/WebsiteSection";
import MobDevServices from "../Components/MobDevServices";
import MobService from "../Components/MobService";
import MobFeatures from "../Components/MobFeatures";
import ProjectComp from "../Components/ProjectComp";
// import WebSlider from "../Components/WebSlider";



const MobDev = () => {
  const mobileServices = [
    {
      imgSrc: "/Obapp.png",
      category: "MOBILE APP DEVELOPMENT",
      title: "Order Booking App",
      description: "This app is designed to simplify & optimize the order management process for businesses, ensuring seamless and efficient operations.",
    },
    {
      imgSrc: "/zipzapp.png",
      category: "MOBILE APP DEVELOPMENT",
      title: "Zip Zap",
      description: "Enjoy seamless parcel delivery from your doorstep with Zip Zap. Choose from various vehicle options, enter the delivery address in our app, and track your parcel in real-time.",
    },
  ];
  
  
  
  const serviceDescriptionMobile = "Our Mobile App Development Services encompass building applications for various platforms, including iOS, Android, and others. Our expertise plays a crucial role in shaping the way people interact with technology in our increasingly mobile-driven world. Our mobile developers focus on designing, coding, testing, and optimizing mobile apps to provide users with seamless and efficient digital experiences on their handheld devices.";
  
  
  const steps = [
    "Discovery and Planning",
    "Design and User Experience",
    "Development",
    "Testing & Deployment",
    "Maintenance and Updates",
  ];
  
  return (
   <>
   <MobDevServices/>
   {/* <MobService/> */}
   <div className="bg-[#03001417] backdrop-blur-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
        {mobileServices.map((service, index) => (
          <ProjectComp
            key={index}
            imgSrc={service.imgSrc}
            category={service.category}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
   <MobService
        services={mobileServices}
        serviceDescription={serviceDescriptionMobile}
        image="/mob2.jpg"
        steps={steps}
      />
   <MobFeatures/>
   {/* <WebSlider/> */}
   <Cta/>
   </>
  );
};

export default MobDev;
