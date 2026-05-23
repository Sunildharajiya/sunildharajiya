import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "./Layout.jsx";
import { ErrorCard } from "./components/Error.jsx"

// Lazy pages
const Index = lazy(() => import("./pages/index.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Notes = lazy(() => import("./pages/MarkDown.jsx"));

// Loader
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050505] text-green-400">
    Loading...
  </div>
);

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorCard error="ERR : 502, BAD GATEWAY"/>,
    children: [
        {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <ErrorCard error="ERR : 404,PAGE NOT FOUND"/>
          </Suspense>
        ),
      },
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Index />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },

      {
        path: "/projects",
        element: (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        ),
      },

      {
        path: "/Notes/*",
        element: (
          <Suspense fallback={<Loader />}>
            <Notes />
          </Suspense>
        ),
      },
    ],
  },
]);