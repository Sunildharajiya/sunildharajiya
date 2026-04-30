import profileImg from './../assets/profileImg.webp'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl text-center bg-[#0a0a0a] border border-green-900/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.08)]">

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center">

            {/* 🔥 Outer soft glow */}
            <div className="absolute w-52 h-52 bg-green-500/20 rounded-full blur-3xl"></div>

            {/* 🔥 Inner glow ring */}
            <div className="absolute w-44 h-44 border border-green-500/30 rounded-full blur-sm"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="profile"
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-green-500/40 object-cover
              shadow-[0_0_25px_rgba(34,197,94,0.5)]"
            />

          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          Sunil Dharajiya
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-8">
          A Web Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold 
            hover:bg-green-400 transition-all duration-300 
            shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
          >
            View My Work
          </a>

          <a
            href="#docs"
            className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 
            hover:bg-green-500/10 transition-all duration-300"
          >
            Documentation
          </a>

        </div>

        <div className="mt-4">
          <a
            href="#notes"
            className="px-6 py-2 rounded-xl border border-green-500/20 text-green-400 
            hover:bg-green-500/10 transition-all duration-300"
          >
            Notes
          </a>
        </div>

      </div>
    </section>
  );
};