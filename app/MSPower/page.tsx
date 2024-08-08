import React from "react";
import WebServices from "../Components/WebServices";
import WebFeatures from "../Components/WebFeatures";
import Cta from "../Components/Cta";
import WebsiteSection from "../Components/WebsiteSection";
import MobDevServices from "../Components/MobDevServices";
import MobService from "../Components/MobService";
import MobFeatures from "../Components/MobFeatures";
// import WebSlider from "../Components/WebSlider";
import GenAiHero from "../Components/GenAiHero";
import MSHero from "../Components/MSHero";


const MSPower = () => {
  const MSPowerServices = [
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
  
  
  const serviceDescriptionMSPower = "MS Power Platform is a low-code application development solution that empowers users to create custom applications, automate business processes, and build workflows, forms, and reports. Utilizing built-in connectors to Microsoft data sources like Dynamics 365, SharePoint, and Excel, Power Platform allows non-technical users to quickly develop solutions, streamline operations, improve collaboration, and boost productivity.";
  
  const steps = [
    "Consultation and Requirement Analysis",
    "Solution Design and Planning",
    "Development and Configuration",
    "Integration and Testing",
    "Deployment and Training",
  ];
  
  return (
   <>
   <MSHero/>
   {/* <MobService/> */}
   <MobService
        services={MSPowerServices}
        serviceDescription={serviceDescriptionMSPower}
        image="/MSPowerImg.png"
        steps={steps}
      />
   {/* <MobFeatures/> */}
   {/* <WebSlider/> */}
   <Cta/>
   </>
  );
};

export default MSPower;
