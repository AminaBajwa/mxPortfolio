import ContactUs from "@/components/main/ContactUs";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import EmailSection from "../components/main/EmailSection";
import FintechProjects from "@/components/OurProjects";
// import Ok from "@/components/sub/Ok";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        
        <Hero />
        {/* <Ok/> */}
        <FintechProjects/>
        <Skills />
        <Encryption />
        {/* <Projects /> */}
        <EmailSection/>
        {/* <ContactUs/> */}
      </div>
    </main>
  );
}
