import React from "react";
import { docs } from "./../Data/docs.js";

export const Docs = () => {
  const LIMIT = 3; // 🔥 control how many docs show
  const visibleDocs = docs.slice(0, LIMIT);

  return (
    <section id="docs" className="relative py-20 px-6 bg-[#050505]">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-green-400 mb-10 text-center">
          Documentation
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {visibleDocs.map((doc, i) => (
            <a
              key={doc.id || i}
              href={doc.link}
              className="bg-[#0a0a0a] border border-green-900/20 rounded-xl p-6
              hover:border-green-400/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]
              transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {doc.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {doc.desc}
              </p>
            </a>
          ))}

        </div>

        {/* View All (only if more docs exist) */}
        {docs.length > LIMIT && (
          <div className="flex justify-center mt-10">
            <a
              href="/docs"
              className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 
              hover:bg-green-500/10 transition-all duration-300"
            >
              View All Docs
            </a>
          </div>
        )}

      </div>
    </section>
  );
};