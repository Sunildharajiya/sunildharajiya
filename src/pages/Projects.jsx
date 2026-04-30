import React from "react";
import { projects } from "./../Data/projects.js"

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#050505] px-6 py-20 overflow-x-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 
        w-[600px] h-[500px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-green-400 text-center mb-4">
          My Projects
        </h1>

        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Real-world projects focused on functionality, performance, and clean architecture.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-[#0a0a0a] border border-green-900/20 rounded-2xl overflow-hidden
              hover:border-green-400/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
              transition-all duration-300 flex flex-col"
            >

              {/* Image OR Fallback */}{project.image && (
  <div className="overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="w-full h-44 object-cover 
      transition-transform duration-500 group-hover:scale-105"
    />
  </div>
)}
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">

                <h2 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md 
                      bg-green-500/10 text-green-300 border border-green-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 text-sm rounded-lg 
                      bg-green-500 text-black font-medium 
                      hover:bg-green-400 transition-all"
                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 text-sm rounded-lg 
                      border border-green-500/30 text-green-400 
                      hover:bg-green-500/10 transition-all"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Projects;