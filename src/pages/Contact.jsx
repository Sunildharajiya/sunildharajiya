import React from "react";

const socials = [
  { name: "GitHub", link: "https://github.com/Sunildharajiya" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/sunil-dharajiya-69b185344" },
  { name: "LeetCode", link: "https://leetcode.com/Sunil_dharajiya" },
  { name: "X", link: "https://x.com/_sunil_d_" },
  { name: "Instagram", link: "https://www.instagram.com/sunil_dharajiya__" },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 flex justify-center items-center">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full" />
      </div>

      <section className="relative z-10 max-w-2xl w-full bg-[#0a0a0a] border border-green-900/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.08)]" aria-labelledby="contact-title">
        <h1 id="contact-title" className="text-3xl md:text-4xl font-semibold text-green-400 mb-6 text-center">
          Contact Me
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Feel free to reach out for collaboration, projects, or just to connect.
        </p>

        <div className="mb-8 text-center">
          <p className="text-gray-500 text-sm mb-2">Email</p>
          <a href="mailto:sunildharajiyablack@gmail.com" className="text-green-400 text-lg font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">
            sunildharajiyablack@gmail.com
          </a>
        </div>

        <nav aria-label="Social profiles" className="flex flex-wrap justify-center gap-3">
          {socials.map((item) => (
            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm rounded-lg border border-green-500/20 text-gray-300 hover:text-green-400 hover:border-green-400/50 hover:bg-green-500/10 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">
              {item.name}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
};

export default Contact;
