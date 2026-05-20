import React from "react";

export const ErrorCard = ({ error }) => {
  return (
    <section className="py-20 px-6 bg-[#050505] flex justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[500px]
          bg-red-500/10
          blur-3xl
          rounded-full
          "
        ></div>
      </div>

      {/* Error Card */}
      <div
        className="
        relative z-10
        w-full max-w-4xl
        rounded-3xl
        border border-red-900/20
        bg-[#0a0a0a]
        overflow-hidden
        shadow-[0_0_40px_rgba(239,68,68,0.08)]
        "
      >

        {/* Header */}
        <div
          className="
          px-6 py-5
          border-b border-red-900/20
          bg-red-500/5
          flex items-center gap-4
          "
        >

          <div
            className="
            w-12 h-12
            rounded-xl
            flex items-center justify-center
            bg-red-500/10
            border border-red-500/20
            text-2xl
            "
          >
            ⚠️
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-400">
              Error Logs
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Something failed while loading the component.
            </p>
          </div>

        </div>

        {/* Logs */}
        <div className="p-6">

          <pre
            className="
            overflow-x-auto
            rounded-2xl
            border border-[#30363d]
            bg-[#0d1117]
            p-5
            text-sm
            leading-7
            text-red-300
            "
          >
            <code>
              {typeof error === "object"
                ? JSON.stringify(error, null, 2)
                : error}
            </code>
          </pre>

        </div>

      </div>
    </section>
  );
};