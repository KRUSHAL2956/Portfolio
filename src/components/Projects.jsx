import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "../constants";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-[#00f0ff]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#00ff88] mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my work in web development, cybersecurity, and community building
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-[#00f0ff] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full rounded-xl overflow-hidden bg-gray-800/30 border border-gray-700 hover:border-[#00f0ff] transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#00f0ff]/20 text-[#00f0ff] text-xs font-semibold rounded-full border border-[#00f0ff] backdrop-blur-sm">
                      {project.category === "security" ? "Cybersecurity" : "Web Dev"}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#00f0ff] text-black font-medium rounded-lg hover:bg-[#00f0ff]/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#00f0ff] text-[#00f0ff] font-medium rounded-lg hover:bg-[#00f0ff]/10 transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00f0ff]/0 via-[#00f0ff]/5 to-[#00ff88]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/KRUSHAL2956"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#00f0ff] text-[#00f0ff] font-semibold rounded-lg hover:bg-[#00f0ff]/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}