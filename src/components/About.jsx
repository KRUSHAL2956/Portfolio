import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { GraduationCap, Award, Users, Briefcase } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-[#00f0ff]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] mx-auto" />
        </motion.div>



        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] rounded-2xl blur-xl opacity-30 animate-pulse" />
              
              {/* Profile image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#00f0ff] shadow-[0_0_50px_rgba(0,240,255,0.3)]">
                <img
                  src="/profile.jpg?v=3"
                  alt="Krushal Hirpara"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#00ff88] rounded-lg opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#00f0ff] rounded-lg opacity-30" />
            </div>
          </motion.div>

          {/* About Text */}
            {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Aspiring Software Engineer
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a Computer Science undergraduate at Parul University with a strong foundation in modern web development and cybersecurity. Specializing in building secure, scalable applications, I combine technical expertise in JavaScript, Python, and Linux with a passion for problem-solving. My focus is on creating impactful digital solutions that bridge the gap between functionality and security.
                </p>

                <p>
                  As a Google Student Ambassador and two-time Smart India Hackathon team leader, I actively foster technical communities and drive innovation. I thrive in collaborative environments, leveraging my leadership skills to mentor peers and deliver complex projects.
                </p>
              </div>
            </div>

            {/* Education Info */}
            <div className="pt-6 border-t border-gray-700">
              <div className="inline-flex items-start gap-4 p-4 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                <div className="p-2 bg-[#00f0ff]/20 rounded-lg">
                  <GraduationCap className="text-[#00f0ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Education</h4>
                  <p className="text-[#00f0ff] font-medium">Parul University</p>
                  <p className="text-gray-400 text-sm">B.Tech CSE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}