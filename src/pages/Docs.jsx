import React from "react";
import { docs } from "./../Data/docs.js"

const Docs = () => {
  return (
    <div className="min-h-screen bg-[#050505] px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 
        w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-green-400 mb-6 text-center">
          Documentation
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center mb-12">
          Notes, guides, and learnings from my development journey.
        </p>

        {/* Docs List */}
        <div className="flex flex-col gap-6">

          {docs.map((doc, i) => (
            <a
              key={i}
              href={doc.link}
              className="block bg-[#0a0a0a] border border-green-900/20 rounded-xl p-6
              hover:border-green-400/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]
              transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">

                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {doc.title}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {doc.desc}
                  </p>
                </div>

                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {doc.date}
                </span>

              </div>
            </a>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Docs;