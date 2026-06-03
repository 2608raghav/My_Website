import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeLink =
    "text-green-400 border border-green-500 bg-green-500/10 px-3 py-1 rounded-xl transition duration-300";

  const normalLink =
    "text-white hover:text-green-400 transition duration-300";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-400">
          MySite
        </h1>

        <ul className="flex gap-8">

          <li>
            <a
              href="#hero"
              className={activeSection === "hero" ? activeLink : normalLink} 
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? activeLink : normalLink}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? activeLink : normalLink}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#achievements"
              className={
                activeSection === "achievements"
                  ? activeLink
                  : normalLink
              }
            >
              Achievements
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? activeLink : normalLink}
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Header;