import React from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Krushal_Hirpara_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-[#00f0ff] text-lg font-medium">Hi, I'm</span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#00f0ff] to-[#00ff88] bg-clip-text text-transparent">
              Krushal Hirpara
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              B.Tech CSE Student • 5th Semester
            </p>
            <p className="text-lg sm:text-xl text-[#00f0ff] font-medium mt-2">
              Web Developer • Cybersecurity Enthusiast • CGPA: 8.02
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A passionate B.Tech CSE student driven by curiosity and a love for building secure, scalable tech.
            Specializing in modern web development, DSA, and cybersecurity, I blend problem-solving with real-world impact.
            As a Google Student Ambassador and an active campus leader, I focus on inspiring innovation and
            fostering collaboration within student communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="group px-8 py-4 border-2 border-[#00f0ff] text-[#00f0ff] font-semibold rounded-lg transition-all duration-300 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#00f0ff] rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-[#00f0ff] rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}