import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";
import { NAVIGATION_LINKS } from "../constants";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of NAVIGATION_LINKS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <SEO />
      <AnimatedBackground />
      <Navigation activeSection={activeSection} />
      <ScrollToTop />
      
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="border-t border-gray-800/50">
          <About />
        </section>
        
        <section id="experience" className="border-t border-gray-800/50">
          <Experience />
        </section>
        
        <section id="skills" className="border-t border-gray-800/50">
          <Skills />
        </section>
        
        <section id="certifications" className="border-t border-gray-800/50">
          <Certifications />
        </section>
        
        <section id="projects" className="border-t border-gray-800/50">
          <Projects />
        </section>
        
        <section id="contact" className="border-t border-gray-800/50">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}