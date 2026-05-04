import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "./Layout.jsx";

// Lazy pages
const Index = lazy(() => import("./pages/index.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Post = lazy(() => import("./pages/posts.jsx"));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center text-green-400">
    Loading...
  </div>
);

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // common layout for every page.
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
        path: "post",
        element: (
          <Suspense fallback={<Loader />}>
            <Post />
          </Suspense>
        ),
      },
    ],
  },
]);