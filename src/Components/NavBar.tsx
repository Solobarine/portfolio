import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      }`}
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
        } lg:static lg:h-auto lg:w-auto lg:bg-transparent`}
        onBlur={toggle}
      >
        <button
          onClick={toggle}
          onBlur={toggle}
          className="ml-auto lg:fixed lg:right-[-100%] lg:hidden"
        >
          <i
            className={`fa-solid block transition-all duration-500 ease-in cursor-pointer ${
              isOpen ? "fa-square-xmark" : "fa-bars fixed right-2"
            } text-2xl ${onHero || isOpen ? "text-white" : "text-blue-600"}`}
          />
        </button>
        <a
          href="#hero"
          className={`p-2 flex items-center lg:mt-0 gap-2 text-md $ hover:text-sky-400 ${
            !isOpen ? "mt-10" : ""
          }`}
          onClick={toggle}
        >
          Home
        </a>
        <a
          href="#skills"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Skills
        </a>

        <a
          href="#education"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Education
        </a>

        <a
          href="#experience"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Projects
        </a>
        <a
          href="#about"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          About Me
        </a>
        <a
          href="#contact"
          className="p-2 flex items-center gap-2 text-md hover:text-sky-400"
          onClick={toggle}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default NavBar;
