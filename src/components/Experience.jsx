import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCES } from "../constants";

export default function Experience() {
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
            Experience & <span className="text-[#00f0ff]">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#00ff88] to-transparent transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#00f0ff] rounded-full border-4 border-[#0a0a0a] transform md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,240,255,0.5)]" />

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                  >
                    <div className="mb-3">
                      <div className="flex items-center gap-2 text-[#00f0ff] mb-2">
                        <Briefcase size={20} />
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <h4 className="text-lg text-[#00ff88] font-semibold">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-[#00ff88] mt-1">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-[#00f0ff]/10 text-[#00f0ff] rounded-full border border-[#00f0ff]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}