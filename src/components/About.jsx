import React from 'react';

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-[#050505] flex justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[400px] bg-green-500/10 blur-3xl rounded-full"
        />
      </div>

      {/* Content Card */}
      <div
        className="relative z-10 max-w-4xl w-full bg-[#0a0a0a]
        border border-green-900/20 rounded-2xl p-8 md:p-12
        shadow-[0_0_40px_rgba(34,197,94,0.08)]"
      >

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-green-500/70 text-sm font-medium uppercase tracking-widest mb-2">
            Get to know me
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-green-400">
            About Me
          </h2>
        </div>

        {/* Introduction */}
        <div className="space-y-5 text-gray-300 leading-relaxed text-base md:text-lg">
          <p>
            Hi, I’m{' '}
            <span className="text-green-400 font-medium">
              Sunil Dharajiya
            </span>
            , a developer from Gujarat, India, focused on turning ideas into
            functional, reliable, and real-world web applications.
          </p>

          <p>
            I enjoy understanding how things work beneath the surface — from
            backend logic and application architecture to the way different
            systems communicate and work together. My strongest areas are{' '}
            <span className="text-green-400">
              backend development, system thinking, and problem solving
            </span>
            .
          </p>

          <p>
            I believe development is about more than making something look
            good. I’m interested in how an application actually works — how
            data flows through a system, how components interact, how problems
            are handled, and how everything comes together as one product.
          </p>

          <p>
            While frontend design isn’t my primary specialty, I’m comfortable
            creating clean and functional interfaces when a project requires
            it. I focus on building solutions that are practical, maintainable,
            and designed around real-world requirements.
          </p>

          <p>
            I also use modern{' '}
            <span className="text-green-400">AI tools</span> to explore ideas,
            accelerate repetitive development work, and work efficiently
            across areas outside my strongest expertise — while keeping the
            focus on understanding the technology and the final solution.
          </p>

          <p>
            I’m naturally curious about technology and enjoy going deeper than
            simply making something work. I like exploring how systems are
            built, how technologies connect, why they work the way they do,
            and how they can be improved or scaled.
          </p>
        </div>

        {/* What I Bring */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-green-400 mb-5">
            What I Bring
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 1 */}
            <div
              className="p-5 rounded-xl bg-green-500/5
              border border-green-500/10
              hover:border-green-500/30
              hover:bg-green-500/10
              transition-all duration-300"
            >
              <h4 className="text-green-300 font-medium mb-2">
                Backend & Logic
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I enjoy working with application logic, data flow, APIs, and
                the systems that power web applications behind the interface.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-5 rounded-xl bg-green-500/5
              border border-green-500/10
              hover:border-green-500/30
              hover:bg-green-500/10
              transition-all duration-300"
            >
              <h4 className="text-green-300 font-medium mb-2">
                System Thinking
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I like understanding how individual components connect and
                designing solutions where the complete system works together.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-5 rounded-xl bg-green-500/5
              border border-green-500/10
              hover:border-green-500/30
              hover:bg-green-500/10
              transition-all duration-300"
            >
              <h4 className="text-green-300 font-medium mb-2">
                Problem Solving
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I approach complex requirements by breaking them into smaller,
                understandable problems and building practical solutions.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="p-5 rounded-xl bg-green-500/5
              border border-green-500/10
              hover:border-green-500/30
              hover:bg-green-500/10
              transition-all duration-300"
            >
              <h4 className="text-green-300 font-medium mb-2">
                Continuous Learning
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I continuously explore new technologies and concepts to better
                understand how modern software systems are built and scaled.
              </p>
            </div>

          </div>
        </div>

        {/* My Approach */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-green-400 mb-5">
            My Approach
          </h3>

          <div className="space-y-3">
            {[
              'Understand the idea and its real-world requirements.',
              'Break complex problems into manageable systems.',
              'Design practical solutions and application logic.',
              'Build and connect the different parts of the application.',
              'Test, improve, and solve problems along the way.',
              'Use modern tools and AI to improve development efficiency.'
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-gray-400 text-sm md:text-base"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full
                  bg-green-500/10 border border-green-500/20
                  text-green-400 text-xs flex items-center justify-center"
                >
                  {i + 1}
                </span>

                <p className="pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-green-400 mb-4">
            Skills & Tools
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Tailwind CSS',
              'Git',
              'GitHub',
              'Responsive Design',
              'Backend Development',
              'API Integration',
              'Problem Solving',
              'System Thinking',
              'AI-Assisted Development'
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm rounded-md
                bg-green-500/10 text-green-300
                border border-green-500/20
                hover:bg-green-500/20
                hover:border-green-500/30
                transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className="mt-12 pt-8 border-t border-green-900/20
          text-center"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            For me, development isn’t just about writing code or creating
            attractive interfaces. It’s about{' '}
            <span className="text-green-400 font-medium">
              solving real problems, connecting ideas into working systems,
              and building products that people can actually use.
            </span>
          </p>

          <p className="mt-4 text-gray-500 text-sm">
            I’m continuously learning, experimenting, and building — because
            every project is an opportunity to understand technology a little
            better.
          </p>
        </div>

      </div>
    </section>
  );
};