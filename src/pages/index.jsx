import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Hero } from "./../components/Hero.jsx";
import { About } from "./../components/About.jsx";
import { Projects } from "./../components/projects.jsx";
import { Docs } from "./../components/Docs.jsx";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // optional: scroll to top when no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />

      {/* Make sure IDs exist */}
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="docs">
        <Docs />
      </div>
    </>
  );
};

export default Index;