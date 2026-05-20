import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Notes = () => {
  const [items, setItems] = useState([]);
  const [currentPath, setCurrentPath] = useState("");
  const [history, setHistory] = useState([]);
  const [content, setContent] = useState("");
  const [activeFile, setActiveFile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const owner = "SunilDharajiya";
  const repo = "Notes";

  // Fetch folders/files
  const fetchContents = async (path = "") => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
      );

      if (!res.ok) {
        throw new Error(
          `GitHub API Error : ${res.status}`
        );
      }

      const data = await res.json();

      const sorted = data.sort((a, b) => {
        if (a.type === "dir" && b.type !== "dir") return -1;
        if (a.type !== "dir" && b.type === "dir") return 1;

        return a.name.localeCompare(b.name);
      });

      setItems(sorted);
      setCurrentPath(path);

    } catch (err) {
      console.log(err);
      setError(err.message);
    }

    setLoading(false);
  };

  // Initial fetch
  useEffect(() => {
    fetchContents();
  }, []);

  // Open markdown file
  const openFile = async (file) => {
    if (!file.name.endsWith(".md")) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(file.download_url);

      if (!res.ok) {
        throw new Error(
          `Unable to fetch markdown file`
        );
      }

      const text = await res.text();

      setContent(text);
      setActiveFile(file);

    } catch (err) {
      console.log(err);
      setError(err.message);
    }

    setLoading(false);
  };

  // Open folder
  const openFolder = (folder) => {
    setHistory((prev) => [...prev, currentPath]);
    fetchContents(folder.path);
  };

  // Back
  const goBack = () => {
    if (activeFile) {
      setActiveFile(null);
      setContent("");
      return;
    }

    const prev = history[history.length - 1] || "";

    setHistory((prevHistory) =>
      prevHistory.slice(0, -1)
    );

    fetchContents(prev);
  };

  // Error UI
  if (error) {
    return (
      <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6">

        <div
          className="
          relative w-full max-w-3xl
          bg-[#0a0a0a]
          border border-red-900/20
          rounded-3xl
          overflow-hidden
          "
        >

          {/* Top */}
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
              w-14 h-14 rounded-2xl
              flex items-center justify-center
              bg-red-500/10
              border border-red-500/20
              text-3xl
              "
            >
              ⚠️
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-red-400">
                Error Logs
              </h2>

              <p className="text-gray-500 mt-1">
                Something failed while loading notes.
              </p>
            </div>

          </div>

          {/* Error Body */}
          <div className="p-6">

            <pre
              className="
              overflow-x-auto
              bg-[#0d1117]
              border border-[#30363d]
              rounded-2xl
              p-5
              text-red-300
              text-sm
              leading-7
              "
            >
              <code>
                {error}
              </code>
            </pre>

            <button
              onClick={() => window.location.reload()}
              className="
              mt-6
              px-5 py-3
              rounded-xl
              bg-red-500/10
              border border-red-500/20
              text-red-300
              hover:bg-red-500/20
              transition-all
              "
            >
              Reload
            </button>

          </div>

        </div>
      </section>
    );
  }

  // Loading
  if (loading) {
    return (
      <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6">

        <div
          className="
          relative w-full max-w-2xl
          bg-[#0a0a0a]
          border border-green-900/20
          rounded-3xl
          p-10
          "
        >

          <div className="relative z-10 flex flex-col items-center gap-5">

            <div
              className="
              w-12 h-12
              border-4 border-green-500/20
              border-t-green-400
              rounded-full
              animate-spin
              "
            ></div>

            <h2 className="text-2xl font-semibold text-green-400">
              Loading Notes
            </h2>

            <p className="text-gray-500 text-center">
              Fetching repository contents...
            </p>

          </div>

        </div>
      </section>
    );
  }

  // Markdown Viewer
  if (activeFile) {
    return (
      <section className="min-h-screen bg-[#050505] py-10 px-4 md:px-6 flex justify-center">

        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[700px] h-[600px]
            bg-green-500/10
            blur-3xl
            rounded-full
            "
          ></div>
        </div>

        <div
          className="
          relative z-10
          w-full max-w-5xl
          bg-[#0d1117]
          border border-[#30363d]
          rounded-2xl
          overflow-hidden
          "
        >

          {/* Topbar */}
          <div
            className="
            sticky top-0 z-20
            bg-[#161b22]/90
            backdrop-blur-xl
            border-b border-[#30363d]
            px-5 py-4
            flex items-center gap-4
            "
          >

            <button
              onClick={goBack}
              className="
              px-4 py-2 rounded-lg
              bg-[#21262d]
              border border-[#30363d]
              text-white
              hover:bg-[#30363d]
              "
            >
              ← Back
            </button>

            <div className="overflow-hidden">

              <h1 className="text-white font-semibold truncate">
                {activeFile.name}
              </h1>

              <p className="text-sm text-gray-500 truncate">
                {activeFile.path}
              </p>

            </div>

          </div>

          {/* Markdown */}
          <div className="px-4 md:px-8 py-8">

            <article
              className="
              markdown-body
              max-w-none
              text-white
              leading-7
              "
            >

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold border-b border-[#30363d] pb-3 mb-6 text-white">
                      {children}
                    </h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold border-b border-[#30363d] pb-2 mb-5 mt-10 text-white">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">
                      {children}
                    </h3>
                  ),

                  p: ({ children }) => (
                    <p className="text-[#e6edf3] mb-5 text-[16px] leading-8">
                      {children}
                    </p>
                  ),

                  a: ({ children, href }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2f81f7] hover:underline"
                    >
                      {children}
                    </a>
                  ),

                  ul: ({ children }) => (
                    <ul className="list-disc pl-8 mb-5 text-[#e6edf3]">
                      {children}
                    </ul>
                  ),

                  ol: ({ children }) => (
                    <ol className="list-decimal pl-8 mb-5 text-[#e6edf3]">
                      {children}
                    </ol>
                  ),

                  li: ({ children }) => (
                    <li className="mb-2">
                      {children}
                    </li>
                  ),

                  blockquote: ({ children }) => (
                    <blockquote
                      className="
                      border-l-4 border-[#3fb950]
                      pl-4 italic
                      text-gray-400
                      my-5
                      "
                    >
                      {children}
                    </blockquote>
                  ),

                  hr: () => (
                    <hr className="border-[#30363d] my-8" />
                  ),

                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="w-full border border-[#30363d]">
                        {children}
                      </table>
                    </div>
                  ),

                  th: ({ children }) => (
                    <th
                      className="
                      border border-[#30363d]
                      bg-[#161b22]
                      px-4 py-2
                      text-left text-white
                      "
                    >
                      {children}
                    </th>
                  ),

                  td: ({ children }) => (
                    <td
                      className="
                      border border-[#30363d]
                      px-4 py-2
                      text-[#e6edf3]
                      "
                    >
                      {children}
                    </td>
                  ),

                  code({ className, children }) {
                    const text = String(children)
                      .replace(/\n$/, "");

                    // Inline Code
                    if (!className) {
                      return (
                        <code
                          className="
                          bg-[#161b22]
                          text-[#ff7b72]
                          border border-[#30363d]
                          px-1.5 py-0.5
                          rounded-md
                          text-sm
                          "
                        >
                          {text}
                        </code>
                      );
                    }

                    // Block Code
                    return (
                      <div className="relative my-6">

                        {/* Topbar */}
                        <div
                          className="
                          flex items-center gap-2
                          bg-[#161b22]
                          border border-b-0 border-[#30363d]
                          rounded-t-xl
                          px-4 py-3
                          "
                        >

                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>

                        </div>

                        {/* Code */}
                        <pre
                          className="
                          overflow-x-auto
                          bg-[#0d1117]
                          border border-[#30363d]
                          rounded-b-xl
                          p-5
                          "
                        >

                          <code
                            className="
                            text-[#7ee787]
                            text-[15px]
                            leading-7
                            font-mono
                            "
                          >
                            {text}
                          </code>

                        </pre>

                      </div>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>

            </article>
          </div>
        </div>
      </section>
    );
  }

  // Explorer
  return (
    <section
      className="
      relative min-h-screen
      py-20 px-6
      bg-[#050505]
      flex justify-center
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[500px]
          bg-green-500/10
          blur-3xl
          rounded-full
          "
        ></div>

      </div>

      {/* Main */}
      <div
        className="
        relative z-10
        max-w-6xl w-full
        bg-[#0a0a0a]
        border border-green-900/20
        rounded-3xl
        p-8 md:p-10
        "
      >

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-3xl md:text-4xl font-semibold text-green-400">
            {repo}
          </h1>

          <p className="text-gray-500 mt-3">
            Browse folders and markdown files directly from GitHub.
          </p>

          <div
            className="
            mt-5 inline-flex items-center gap-2
            px-4 py-2 rounded-xl
            bg-green-500/10
            border border-green-500/20
            text-green-300 text-sm
            "
          >
            📂 /{currentPath || "root"}
          </div>

        </div>

        {/* Back */}
        {history.length > 0 && (
          <button
            onClick={goBack}
            className="
            mb-8 px-4 py-2 rounded-xl
            border border-green-500/20
            bg-green-500/10
            text-green-300
            hover:bg-green-500/20
            "
          >
            ← Back
          </button>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {items.map((item) => {
            const isFolder = item.type === "dir";
            const isMarkdown =
              item.name.endsWith(".md");

            return (
              <div
                key={item.path}
                onClick={() => {
                  if (isFolder) {
                    openFolder(item);
                  } else if (isMarkdown) {
                    openFile(item);
                  }
                }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl border p-5
                  transition-all duration-300
                  ${
                    isFolder || isMarkdown
                      ? `
                        cursor-pointer
                        border-green-900/20
                        bg-[#0d0d0d]
                        hover:border-green-500/40
                        hover:-translate-y-1
                      `
                      : `
                        opacity-40
                        border-gray-800
                      `
                  }
                `}
              >

                {/* Glow */}
                <div
                  className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br
                  from-green-500/5
                  to-transparent
                  "
                ></div>

                <div className="relative z-10 flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className="
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    bg-green-500/10
                    border border-green-500/20
                    text-2xl
                    "
                  >
                    {isFolder ? "📁" : "📄"}
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-hidden">

                    <h2 className="text-lg font-medium text-white truncate">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {isFolder
                        ? "Folder"
                        : isMarkdown
                        ? "Markdown File"
                        : "Unsupported File"}
                    </p>

                    <p className="text-xs text-gray-600 mt-3 truncate">
                      {item.path}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Empty */}
        {items.length === 0 && (
          <div
            className="
            mt-10 text-center
            border border-green-900/20
            rounded-2xl
            bg-green-500/5
            py-16
            "
          >

            <h2 className="text-2xl font-semibold text-green-400">
              Empty Folder
            </h2>

            <p className="text-gray-500 mt-3">
              No files found in this directory.
            </p>

          </div>
        )}

      </div>
    </section>
  );
};

export default Notes;
