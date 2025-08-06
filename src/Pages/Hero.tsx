"use client";

import { motion } from "framer-motion";
import Space from "../3d/Scenes/Space";
import Socials from "../Components/Socials";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // Animation variants for better organization and reusability
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const overlayVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 0.1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const socialsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.8,
      },
    },
  };

  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      <Space />

      {/* Gradient overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div
        className="py-10 px-4 sm:pl-32 h-full sm:min-h-screen w-full absolute top-0 z-10"
        id="hero"
      >
        <motion.div
          className="h-full flex flex-col justify-between sm:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1 flex flex-col justify-center sm:justify-start">
            {/* Greeting badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 sm:mt-6 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 w-fit border border-white/20"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
              Available for opportunities
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-7xl font-bold py-2 text-white leading-tight"
              variants={titleVariants}
            >
              Hello, I'm <br />
              <span className="relative inline-block">
                Solomon{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Akpuru
                </motion.span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="font-medium text-gray-200 text-lg sm:text-xl pt-6 block max-w-2xl leading-relaxed"
              variants={subtitleVariants}
            >
              I am a{" "}
              <span className="text-sky-400 font-semibold">
                Software Engineer
              </span>{" "}
              passionate about designing and developing user-centered web
              applications. My mission is to bring ideas to life with apps that
              are{" "}
              <span className="text-white font-semibold">
                scalable, reliable
              </span>{" "}
              and stand out from the competition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="/downloadables/solomon_akpuru_resume.pdf"
                download
                className="group relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-sky-400/20"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </motion.svg>
                </span>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.button
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={buttonVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/#projects")}
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Socials with animation */}
        <motion.div
          variants={socialsVariants}
          initial="hidden"
          animate="visible"
        >
          <Socials customStyles="z-20 hidden sm:text-xl sm:text-3xl sm:absolute sm:left-7 sm:top-0 sm:flex sm:flex-col sm:min-h-screen sm:justify-center gap-4 text-sky-400" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={() => navigate("/#about")}
        >
          <motion.div
            className="flex flex-col items-center text-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
