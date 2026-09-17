import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { ErrorCard } from "./components/Error.jsx";

const Index = lazy(() => import("./pages/index.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Notes = lazy(() => import("./pages/MarkDown.jsx"));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050505] text-green-400" role="status">
    Loading...
  </div>
);

const LazyPage = ({ children }) => <Suspense fallback={<Loader />}>{children}</Suspense>;

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorCard error="ERR : 502, BAD GATEWAY" />,
    children: [
      { path: "*", element: <ErrorCard error="ERR : 404, PAGE NOT FOUND" /> },
      { index: true, element: <LazyPage><Index /></LazyPage> },
      { path: "contact", element: <LazyPage><Contact /></LazyPage> },
      { path: "projects", element: <LazyPage><Projects /></LazyPage> },
      { path: "notes/*", element: <LazyPage><Notes /></LazyPage> },
    ],
  },
]);
