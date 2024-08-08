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


const GenAiDev = () => {
  const GenAiServices = [
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
  
  
  const serviceDescriptionGenAi = "Our Generative AI Development Services encompass the creation of custom AI models that can produce diverse types of content, including text, images, videos, and more. We help businesses automate content creation, personalize user experiences, and innovate their products with cutting-edge AI technologies.";
  
  const steps = [
    "Discovery and Consultation",
    "Model Design and Prototyping",
    "Data Collection and Preparation",
    "Training and Fine-Tuning",
    "Integration and Deployment",
    "Evaluation and Improvement"
  ];
  
  return (
   <>
   <GenAiHero/>
   {/* <MobService/> */}
   <MobService
        services={GenAiServices}
        serviceDescription={serviceDescriptionGenAi}
        image="/genAiImg.png"
        steps={steps}
      />
   {/* <MobFeatures/> */}
   {/* <WebSlider/> */}
   <Cta/>
   </>
  );
};

export default GenAiDev;
