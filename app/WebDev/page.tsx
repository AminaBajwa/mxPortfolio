import React from "react";
import WebHero from "../Components/WebHero";
import WebServices from "../Components/WebServices";
import WebFeatures from "../Components/WebFeatures";
import Cta from "../Components/Cta";
import WebsiteSection from "../Components/WebsiteSection";
// import WebSlider from "../Components/WebSlider";
import '.././globals.css'


const WebDev = () => {
  return (
   <>
   <WebHero/>
   <WebsiteSection/>
   <WebServices/>
   <WebFeatures/>
   {/* <WebSlider/> */}
   <Cta/>
   </>
  );
};

export default WebDev;
