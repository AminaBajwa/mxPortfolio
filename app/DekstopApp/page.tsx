import React from "react";
import Cta from "../Components/Cta";
import MobService from "../Components/MobService";
import MobFeatures from "../Components/MobFeatures";
import DesktopHero from "../Components/DesktopHero";
import ProjectComp from "../Components/ProjectComp";
import DesktopFeatures from "../Components/DesktopFeatures";
// import WebSlider from "../Components/WebSlider";


const DekstopApp = () => {
  const desktopServices = [
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
  const serviceDescriptionDesktop = "Our Desktop App Development Services cover various operating systems including Windows, macOS, and Linux. We specialize in creating high-performance, user-friendly desktop applications that enhance productivity and provide seamless digital experiences.";
  
  const steps = [
    "Requirement Analysis",
    "Design and Prototyping",
    "Development",
    "Testing and Quality Assurance",
    "Deployment and Integration",
    "Training and Support",
  ];
  return (
   <>
  <DesktopHero/>
  <div className="bg-[#03001417] backdrop-blur-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
        {desktopServices.map((service, index) => (
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
        services={desktopServices}
        serviceDescription={serviceDescriptionDesktop}
        image="/Untitled design (13).png"
        steps={steps}
      />
   <DesktopFeatures/>
   {/* <WebSlider/> */}
   <Cta/>
   </>
  );
};

export default DekstopApp;
