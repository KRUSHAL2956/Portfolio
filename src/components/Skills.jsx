import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SKILL_CATEGORIES } from "../constants";

export default function Skills() {
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
            Technical <span className="text-[#00f0ff]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A diverse skillset spanning development, security, and leadership
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-3 rounded-lg bg-opacity-10"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600 hover:border-[#00f0ff] hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
