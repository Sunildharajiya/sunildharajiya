import React from "react";

const Contact = () => {

  const socials = [
    { name: "GitHub", link: "https://github.com/yourusername" },
    { name: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { name: "LeetCode", link: "https://leetcode.com/yourusername" },
    { name: "X", link: "https://x.com/yourusername" },
    { name: "Instagram", link: "https://instagram.com/yourusername" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] px-6 py-20 flex justify-center items-center">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full bg-[#0a0a0a] border border-green-900/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.08)]">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-green-400 mb-6 text-center">
          Contact Me
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-center mb-8">
          Feel free to reach out for collaboration, projects, or just to connect.
        </p>

        {/* Email Box */}
        <div className="mb-8 text-center">
          <p className="text-gray-500 text-sm mb-2">Email</p>
          <a
            href="mailto:your@email.com"
            className="text-green-400 text-lg font-medium hover:underline"
          >
            sunildharajiyablack@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3">

          {socials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-lg 
              border border-green-500/20 text-gray-300
              hover:text-green-400 hover:border-green-400/50 
              hover:bg-green-500/10 
              hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]
              transition-all duration-300"
            >
              {item.name}
            </a>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Contact;