import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/KRUSHAL2956",
      color: "#00f0ff",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/krushal-hirpara-29y05",
      color: "#0077b5",
    },
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:krushalhirpara.connect@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, y: -5 }}
          className="relative group"
        >
          <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 transition-all duration-300 group-hover:bg-gray-800 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <social.icon size={24} className="text-gray-400 group-hover:text-[#00f0ff] transition-colors duration-300" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg border border-[#00f0ff]">
              {social.name}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}