import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./../Data/projects.js"

export const Projects = () => {
  
  return (
    <section id="projects" className="relative py-20 px-6 bg-[#050505]">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-green-400 mb-10 text-center">
          Projects
        </h2>

        <div className="relative">

          {/* Scroll */}
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">

            {projects.map((project, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[300px] bg-[#0a0a0a] border border-green-900/20 rounded-xl p-5
                hover:border-green-400/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                <span className="text-green-400 text-xs block mb-4">
                  {project.tech}
                </span>

                {/* 🔥 Buttons */}
                <div className="flex gap-2 flex-wrap">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs rounded-md bg-green-500 text-black font-medium 
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
                      className="px-3 py-1.5 text-xs rounded-md border border-green-500/30 text-green-400 
                      hover:bg-green-500/10 transition-all"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>
            ))}

          </div>

          {/* Fade */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 
          bg-gradient-to-l from-[#050505] to-transparent"></div>

          <p className="text-gray-500 text-sm text-right mt-2">
            &gt; &gt; &gt; &gt;
          </p>

        </div>

        {/* View All */}
        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 
            hover:bg-green-500/10 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};