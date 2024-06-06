import ContactUs from "@/components/main/ContactUs";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import EmailSection from "../components/main/EmailSection";
import FintechProjects from "@/components/OurProjects";
import WhyChoose from "@/components/WhyChoose";
import ClientList from "@/components/sub/ClientList";
import How from './../components/sub/How';
import Cta from "@/components/sub/Cta";
import Contact from "@/components/main/Contact";


export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <HomePage/> */}
      <div className="flex flex-col gap-20">
        <Hero />  
        <WhyChoose/>
        <ClientList/>
        <How/>
        <Skills />
        <Cta/>
        <FintechProjects/>
        <Encryption />
        {/* <Contact/> */}
        <EmailSection/>
      </div>

    </main>
  );
}
