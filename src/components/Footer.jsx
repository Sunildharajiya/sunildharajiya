import React from "react";

export const Footer = () => {

  // ntralized social links (easy to manage)
  const socials = [
    { name: "GitHub", link: "https://github.com/Sunildharajiya" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sunil-dharajiya-69b185344" },
   // { name: "LeetCode", link: "https://leetcode.com/yourusername" },
    { name: "X", link: "https://x.com/yourusername" },
    { name: "Instagram", link: "https://www.instagram.com/sunil_dharajiya__" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-green-900/20 mt-20">

      {/*  Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

        {/* Branding */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-400">
            Sunil Dharajiya
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Building real-world web solutions
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3">

          {socials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 text-sm rounded-lg 
                border border-green-500/20 text-gray-300
                hover:text-green-400 hover:border-green-400/50 
                hover:bg-green-500/10 
                hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]
                transition-all duration-300
              "
            >
              {item.name}
            </a>
          ))}

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-green-900/10"></div>

        {/* Bottom */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Sunil Dharajiya. All rights reserved.
        </p>

      </div>
    </footer>
  );
};