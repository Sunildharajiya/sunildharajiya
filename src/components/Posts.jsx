import React from "react";
import { post } from "./../Data/posts.js";

export const Post = () => {
  const LIMIT = 3; 
  const visiblepost = post.slice(0, LIMIT);

  return (
    <section id="post" className="relative py-20 px-6 bg-[#050505]">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-green-400 mb-10 text-center">
          Posts
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {visiblepost.map((p, i) => (
            <a
              key={p.id || i}
              href={p.link}
              className="bg-[#0a0a0a] border border-green-900/20 rounded-xl p-6
              hover:border-green-400/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]
              transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {p.desc}
              </p>
            </a>
          ))}

        </div>

        {/* View All (only if more post exist) */}
        {post.length > LIMIT && (
          <div className="flex justify-center mt-10">
            <a
              href="/post"
              className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 
              hover:bg-green-500/10 transition-all duration-300"
            >
              View All post
            </a>
          </div>
        )}

      </div>
    </section>
  );
};