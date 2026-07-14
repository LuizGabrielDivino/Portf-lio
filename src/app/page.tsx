import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProfessionalInfo from "@/components/ProfessionalInfo";
import Technologies from "@/components/Technologies";
import PrimaryProject from "@/components/PrimaryProject";
import OtherProjects from "@/components/OtherProjects";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium cursor trailing effect */}
      <CustomCursor />
      
      {/* Navigation header */}
      <Header />
      
      {/* Portfolio contents */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <ProfessionalInfo />
        <Technologies />
        <PrimaryProject />
        <OtherProjects />
        <Timeline />
        <Philosophy />
        <Stats />
        <Contact />
      </main>
      
      {/* Minimalist footer */}
      <Footer />
    </>
  );
}
