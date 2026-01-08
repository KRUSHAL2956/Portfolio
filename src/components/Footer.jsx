import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/KRUSHAL2956",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/krushal-hirpara",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:krushalhirpara@gmail.com",
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gray-800/50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left Side - Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#00f0ff] to-[#00ff88] bg-clip-text text-transparent">
                Krushal Hirpara
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              B.Tech Computer Science & Engineering Student
            </p>
            <p className="text-[#00f0ff] text-sm font-medium">
              Web Developer • Exploring Cybersecurity
            </p>
          </div>

          {/* Right Side - Connect */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-[#00f0ff] transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />

        {/* Bottom Middle - Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2026
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Made by Krushal Hirpara
          </p>
        </div>
      </div>
    </footer>
  );
}
