import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between p-2 bg-emerald-300">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="My Logo" className="w-10" />
        <span className="text-xl font-bold">Solly</span>
      </div>
      <div
        className={`flex flex-col fixed font-semibold bg-gray-300 z-50 p-2 top-0 right-0 transition-all duration-500 ease-in h-screen bottom-0 w-56 lg:flex-row gap-4 ${
          isOpen ? "right-0" : "right-[-100%]"
        } lg:static lg:h-auto lg:w-auto lg:bg-transparent`}
        onBlur={toggle}
      >
        <i
          className={`fa-solid block transition-all duration-500 ease-in cursor-pointer ${
            isOpen ? "fa-square-xmark" : "fa-bars fixed right-2"
          } ml-auto text-2xl mt-1 lg:fixed lg:right-[-100%] lg:hidden`}
          onClick={toggle}
          onBlur={toggle}
        ></i>
        <a
          href="#hero"
          className={`p-2 flex items-center lg:mt-0 gap-2 text-md ${
            !isOpen ? "mt-10" : ""
          }`}
          onClick={toggle}
        >
          Home
        </a>
        <a
          href="#skills"
          className="p-2 flex items-center gap-2 text-md"
          onClick={toggle}
        >
          {" "}
          Skills
        </a>

        <a
          href="#education"
          className="p-2 flex items-center gap-2 text-md"
          onClick={toggle}
        >
          Education
        </a>

        <a
          href="#experience"
          className="p-2 flex items-center gap-2 text-md"
          onClick={toggle}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="p-2 flex items-center gap-2 text-md"
          onClick={toggle}
        >
          Projects
        </a>
        <a
          href="#about"
          className="p-2 flex items-center gap-2 text-md"
          onClick={toggle}
        >
          About Me
        </a>
        <a
          href="#contact"
          className="p-2 flex items-center gap-2 text-md"
          onClick={toggle}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default NavBar;
