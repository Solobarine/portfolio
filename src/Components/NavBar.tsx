import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "About Me", href: "/#about" },
  { name: "Contact Me", href: "/#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onHero, setOnHero] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Update hero state
      setOnHero(scrollY < 913 && pathname == "/");

      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sections = [
        "hero",
        "skills",
        "education",
        "experience",
        "projects",
        "about",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <motion.nav
        className={`fixed top-0 z-40 w-full backdrop-blur-md transition-all duration-300 ${
          onHero
            ? "bg-black/10 border-b border-white/10"
            : "bg-white/90 dark:bg-stone-900/90 border-b border-gray-200/50 dark:border-stone-700/50 shadow-lg"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <motion.button
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate("/")}
            >
              <motion.div
                className="relative"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <img
                  src="/logo.avif"
                  alt="Solomon Akpuru - Portfolio Logo"
                  className="w-10 h-10 rounded-full border-2 border-sky-400/50 shadow-lg"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-purple-400/20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <div className="hidden sm:block">
                <h1
                  className={`font-bold text-lg ${onHero ? "text-white" : "text-gray-900 dark:text-white"}`}
                >
                  Solomon Akpuru
                </h1>
                <p
                  className={`text-sm ${onHero ? "text-sky-200" : "text-sky-600 dark:text-sky-400"}`}
                >
                  Software Engineer ✨
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive =
                  activeSection === item.href.substring(2) ||
                  (item.href === "/case-studies" &&
                    window.location.pathname === "/case-studies");

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                      onHero
                        ? "text-white hover:text-sky-300"
                        : "text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-xl border border-sky-400/30"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover background */}
                    <motion.div className="absolute inset-0 bg-white/10 dark:bg-stone-700/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="relative z-10 flex items-center gap-2">
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}

              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggle}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                onHero
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-stone-700/50 z-50 lg:hidden shadow-2xl"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-200/50 dark:border-stone-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.avif"
                    alt="Solomon Akpuru"
                    className="w-10 h-10 rounded-full border-2 border-sky-400/50"
                  />
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-white">
                      Solomon Akpuru
                    </h2>
                    <p className="text-sm text-sky-600 dark:text-sky-400">
                      Software Engineer ✨
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={toggle}
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive =
                  activeSection === item.href.substring(2) ||
                  (item.href === "/case-studies" &&
                    window.location.pathname === "/case-studies");

                return (
                  <motion.button
                    key={item.name}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-r from-sky-500/10 to-purple-500/10 text-sky-600 dark:text-sky-400 border border-sky-400/30"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-700 hover:text-sky-600 dark:hover:text-sky-400"
                    }`}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? "bg-sky-500/20 text-sky-600 dark:text-sky-400"
                          : "bg-gray-100 dark:bg-stone-700 group-hover:bg-sky-500/20 group-hover:text-sky-600"
                      } transition-all duration-300`}
                    ></div>

                    <span className="flex-1 text-left">{item.name}</span>

                    {isActive && (
                      <motion.div
                        className="w-2 h-2 bg-sky-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-6 right-6">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
