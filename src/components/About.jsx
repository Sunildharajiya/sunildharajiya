import React from 'react';

export const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 bg-[#050505] flex justify-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 max-w-4xl w-full bg-[#0a0a0a] border border-green-900/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.08)]">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-green-400 mb-6 text-center">
          About Me
        </h2>

        {/* Content */}
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          Hi, I’m <span className="text-green-400 font-medium">Sunil Dharajiya</span> — a developer from Gujarat, India.
          <br /><br />
          I focus on building complete web solutions by understanding both structure and functionality. My strength lies in backend logic, system thinking, and how different parts of an application work together.
          <br /><br />
          While frontend design isn’t my primary specialty, I can still create functional and clean interfaces. I also leverage modern AI tools to speed up development and handle areas outside my core focus efficiently.
          <br /><br />
          I enjoy turning ideas into working products — not just designing them, but making them actually function in real-world scenarios.
          <br /><br />
          I continuously explore technology at a deeper level to understand how systems are built, connected, and scaled.
          <br /><br />
          For me, development is about solving real problems and building things that work reliably.
        </p>

        
        <div className="mt-8">
          <h3 className="text-lg font-medium text-green-400 mb-4">
            Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "Responsive Design",
              "Problem Solving"
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-md bg-green-500/10 text-green-300 border border-green-500/20
                hover:bg-green-500/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};