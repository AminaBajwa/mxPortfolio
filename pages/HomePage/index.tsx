import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import FintechProjects from "@/components/OurProjects";
import WhyChoose from "@/components/WhyChoose";
import ClientList from "@/components/sub/ClientList";
import Cta from "@/components/sub/Cta";
import How from "@/components/sub/How";
import EmailSection from "@/components/main/EmailSection";
import AboutHero from "@/components/sub/AboutHero";


const HomePage = () => {
  return (
    <>
<div className="flex flex-col gap-20">
        
        <Hero />   
        <WhyChoose/>
        <ClientList/>
        <How/>
        <Skills />
        <Cta/>
        <FintechProjects/>
        <Encryption />
        <EmailSection/>

        <AboutHero/>
      </div>


    </>
  )
}

export default HomePage;