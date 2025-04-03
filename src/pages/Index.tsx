
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const Index = () => {
  const observersInitialized = useRef(false);

  // Add scroll to animate elements as they come into view
  useEffect(() => {
    if (observersInitialized.current) return;
    
    const handleScroll = () => {
      // This triggers the Intersection Observer API
      // All animation is handled by the IntersectionObserver in the hooks
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check for elements in view
    observersInitialized.current = true;
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted opacity-80 dark:opacity-30"></div>
      <div className="fixed inset-0 -z-10 bg-[url('/noise.svg')] opacity-10"></div>
      
      <Navbar />
      <HeroSection />
      <div className="bg-gradient-to-br from-accent/5 to-background dark:from-accent/10">
        <ServicesSection />
      </div>
      <ProjectsSection />
      <div className="bg-gradient-to-tl from-accent/5 to-background dark:from-accent/10">
        <AboutSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
