import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [onHero, setOnHero] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scrollY >= 913) {
        setOnHero(false);
      } else {
        setOnHero(true);
      }
    });
  }, []);

  return (
    <div
      className={`fixed top-0 z-40 flex items-center justify-between p-1 w-full backdrop-blur-md text-white ${
        onHero ? "bg-black/10" : "bg-black/20"
      } ${pathname !== "/" ? "bg-black/40" : ""}`}
    >
      <div className="flex items-center gap-2">
        <img
          src="/logo.avif"
          alt="My Professional Logo"
          className="w-10"
          loading="lazy"
        />
      </div>
      <div
        className={`flex flex-col fixed font-semibold bg-gray-600 z-50 p-2 top-0 right-0 transition-all duration-500 ease-in h-screen bottom-0 w-56 lg:flex-row gap-4 ${
          isOpen ? "right-0" : "right-[-100%]"
        } ${
          onHero ? "text-white" : "lg:text-neutral-600 lg:dark:text-white"
        } lg:static lg:h-auto lg:w-auto lg:bg-transparent`}
      >
        <button onClick={toggle} className="ml-auto lg:hidden">
          <i
            className={`fa-solid block transition-all duration-500 ease-in cursor-pointer ${
              isOpen ? "fa-square-xmark" : "fa-bars fixed right-2"
            } text-2xl ${onHero || isOpen ? "text-white" : "text-blue-600"}`}
          />
        </button>
        <NavLink
          to="/#hero"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Home
        </NavLink>
        <NavLink
          to="/case-studies"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400 text-nowrap"
          onClick={toggle}
        >
          Case Studies
        </NavLink>
        <NavLink
          to="/#skills"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Skills
        </NavLink>

        <NavLink
          to="/#education"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Education
        </NavLink>

        <NavLink
          to="/#experience"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Experience
        </NavLink>
        <NavLink
          to="/#projects"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Projects
        </NavLink>
        <NavLink
          to="/#about"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          About Me
        </NavLink>
        <NavLink
          to="/#contact"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Contact Me
        </NavLink>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
