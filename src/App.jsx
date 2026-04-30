import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "./Layout.jsx";

// Lazy pages
const Index = lazy(() => import("./pages/index.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Docs = lazy(() => import("./pages/Docs.jsx"));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center text-green-400">
    Loading...
  </div>
);

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 🔥 common layout
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "docs",
        element: (
          <Suspense fallback={<Loader />}>
            <Docs />
          </Suspense>
        ),
      },
    ],
  },
]);