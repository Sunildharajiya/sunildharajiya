import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Notes = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const owner = "SunilDharajiya";
  const repo = "Notes";

  // Fetch folders
  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents`
        );

        if (!res.ok) {
          throw new Error(
            `GitHub API Error: ${res.status}`
          );
        }

        const data = await res.json();

        const onlyFolders = data
          .filter((item) => item.type === "dir")
          .slice(0, 3);

        setFolders(onlyFolders);

      } catch (err) {
        console.log(err);
        setError(err);
      }

      setLoading(false);
    };

    fetchFolders();
  }, []);

  // Loading UI
  if (loading) {
    return (
      <section className="py-20 px-6 bg-[#050505]">

        <div className="max-w-6xl mx-auto">

          <div className="mb-12 text-center">

            <div className="h-10 w-72 bg-[#111] rounded-xl mx-auto animate-pulse"></div>

            <div className="h-5 w-96 bg-[#111] rounded-lg mx-auto mt-5 animate-pulse"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                h-[260px]
                rounded-3xl
                border border-green-900/20
                bg-[#0a0a0a]
                animate-pulse
                "
              ></div>
            ))}

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="notes"
      className="
      relative py-20 px-6
      bg-[#050505]
      overflow-hidden
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[500px]
          bg-green-500/10
          blur-3xl
          rounded-full
          "
        ></div>

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-semibold text-green-400">
            Notes Library
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-7">
            Structured development notes directly synced from my GitHub repository.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {folders.map((folder) => (
<Link
  key={folder.path}
  to="/notes"
  className="
  group relative overflow-hidden
  rounded-3xl
  border border-green-900/20
  bg-[#0a0a0a]
  p-8
  transition-all duration-500
  hover:border-green-500/40
  hover:-translate-y-2
  hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]
  "
>

              {/* Hover Glow */}
              <div
                className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                bg-gradient-to-br from-green-500/10 to-transparent
                "
              ></div>

              {/* Card Content */}
              <div className="relative z-10">

                {/* Folder Icon */}
                <div
                  className="
                  w-16 h-16
                  rounded-2xl
                  flex items-center justify-center
                  bg-green-500/10
                  border border-green-500/20
                  text-3xl
                  "
                >
                  📁
                </div>

                {/* Folder Name */}
                <h3
                  className="
                  mt-7
                  text-2xl font-semibold
                  text-white
                  group-hover:text-green-300
                  transition-colors
                  "
                >
                  {folder.name}
                </h3>

                {/* Path */}
                <p className="mt-3 text-sm text-gray-600 truncate">
                  {folder.path}
                </p>

                {/* Description */}
                <p className="mt-5 text-gray-500 leading-7">
                  Browse markdown notes, structured concepts,
                  and categorized technical documentation.
                </p>

                {/* Footer */}
                <div
                  className="
                  mt-8
                  flex items-center gap-2
                  text-green-400
                  font-medium
                  "
                >
                  Explore Notes
                  <span
                    className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};
