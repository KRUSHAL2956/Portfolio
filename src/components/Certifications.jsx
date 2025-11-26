import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#00f0ff]">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my technical skills and commitment to continuous learning
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-xl bg-gray-800/30 border-2 border-gray-700 hover:border-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                {/* Logo */}
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#00ff88]/20 flex items-center justify-center text-[#00f0ff] border border-[#00f0ff]/30">
                  <cert.icon size={32} />
                </div>

                {/* Badge Icon */}
                <div className="absolute top-6 right-6">
                  <Award className="text-[#00ff88] opacity-20 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-[#00ff88] font-medium mb-2">{cert.issuer}</p>

                <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-1 mb-4">
                  <p className="text-sm text-gray-400">
                    Issued: <span className="text-gray-300">{cert.date}</span>
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>

                {/* Verify Link */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00f0ff] text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>

                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00f0ff]/0 via-[#00f0ff]/5 to-[#00ff88]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#00f0ff]/10 to-[#00ff88]/10 border border-[#00f0ff]/30 text-center max-w-sm w-full">
            <div className="text-4xl mb-2">🎓</div>
            <div className="text-2xl font-bold text-[#00f0ff] mb-1">CGPA 8.02</div>
            <div className="text-sm text-gray-400">Academic Excellence</div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Continuously expanding knowledge through certifications and hands-on experience
          </p>
        </motion.div>
      </div>
    </div>
  );
}