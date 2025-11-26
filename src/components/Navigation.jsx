import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "../constants";

export default function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#00ff88] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            aria-label="Scroll to top"
          >
            Krushal Hirpara
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_LINKS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-[#00f0ff] bg-[#00f0ff]/10"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
                aria-label={`Scroll to ${section.label}`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-gray-800/50"
        >
          <div className="px-4 py-4 space-y-2">
            {NAVIGATION_LINKS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-[#00f0ff] bg-[#00f0ff]/10"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
                aria-label={`Scroll to ${section.label}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}