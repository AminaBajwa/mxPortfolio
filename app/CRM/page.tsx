import React from "react";
import Cta from "../Components/Cta";
import MobService from "../Components/MobService";
import MobFeatures from "../Components/MobFeatures";
import DesktopHero from "../Components/DesktopHero";
import ProjectComp from "../Components/ProjectComp";
import DesktopFeatures from "../Components/DesktopFeatures";
import CRMHero from "../Components/CRMHero";
// import WebSlider from "../Components/WebSlider";


const CRM = () => {
  const CRMServices = [
    {
      imgSrc: "/erp03.png",
      category: "Business Management Software",
      title: "E R P Solutions",
      description: "This app seamlessly connects people, places, and processes for effortless management and data-driven decisions.",
    },
    {
      imgSrc: "/IMS.png",
      category: "Business Management Software",
      title: "Inventory System",
      description: "A centralized platform to oversee stock, purchases, various order types (PRRs, SOs, SRs, POs), and individual items.",
    },
  ];
  const serviceDescriptionCRM = "Streamline your customer relationship management with our expert Salesforce CRM services. We customize, integrate, and optimize Salesforce solutions to boost sales, enhance customer service, and maximize marketing effectiveness. Partner with us to transform your business processes and drive growth with tailored Salesforce CRM solutions.";
  
  const steps = [
    "Discovery and Needs Assessment",
    "Customization and Implementation",
    "Training and Adoption",
    "Support and Optimization",
   
  ];
  return (
   <>
  <CRMHero/>
  <MobService
        services={CRMServices}
        serviceDescription={serviceDescriptionCRM}
        image="/CRMimg.png"
        steps={steps}
      />
   {/* <DesktopFeatures/> */}
   {/* <WebSlider/> */}
   <Cta/>
   </>
  );
};

export default CRM;
