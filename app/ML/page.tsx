import React from "react";
import Technologies from "../Components/Technologies";
import Cta from "../Components/Cta";

const ML = () => {
  return (
   <>
   <section className="relative pb-10 overflow-hidden ">
  <div className="relative inset-0 w-full h-[450px]">
    <img className="object-fit w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/MLHero.png" />
  </div>


</section>

<section className="py-10 bg-[#03001417] backdrop-blur-md sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Leveraging Machine Learning for Strategic Growth</h2>
      <p className="mt-4 text-base text-gray-200">Machine Learning empowers data-driven insights, enhancing decision-making, innovation, & operational efficiency. It automates processes, predicts outcomes accurately, & personalizes customer experiences. ML continuously improves products & services through real-time data analysis, ensuring competitiveness & strategic growth.</p> 
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
      <div >
        <img src="/Artificialintelligence.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Enhanced Predictive Capabilities:</h3>
        <p className="text-gray-200">ML algorithms analyze historical data to predict future trends and outcomes with high accuracy. This capability allows software companies to anticipate user behavior, market trends, and operational needs, thereby making informed decisions and strategies.</p>
      </div>

{/* feature2 */}
      <div className="max-md:order-3 my-16">
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Enhanced Security and Fraud Detection</h3>
        <p className="text-gray-200">ML algorithms are effective in detecting anomalies and patterns indicative of cybersecurity threats, fraud, and malicious activities. By integrating ML-based security measures, software companies can bolster their defenses and protect sensitive data.</p>
      </div>
      <div>
        <img src="/SecurityML.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>


{/* feature3 */}
      <div>
        <img src="/Development.svg" className="w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Innovative Product Development</h3>
        <p className="text-gray-200">ML empowers software companies to develop innovative products and features that leverage advanced capabilities like natural language processing, computer vision, and recommendation systems. These innovations drive competitive advantage and attract new customers.</p>
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

export default ML;
