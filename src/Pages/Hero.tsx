import { motion } from "framer-motion";
import Space from "../3d/Scenes/Space";
import Socials from "../Components/Socials";

const Hero = () => {
  return (
    <div className="relative">
      <Space />
      <div
        className="py-10 px-2 sm:pl-32 h-full sm:min-h-screen w-full absolute top-0"
        id="hero"
      >
        <motion.div
          className="z-10 sm:mt-0 h-full flex flex-col justify-between sm:block"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div>
            <motion.h1
              className="text-4xl sm:text-6xl font-bold pt-10 sm:pt-20 py-2 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Hello, I'm <br />
              Solomon <span className="text-sky-500">Akpuru</span>
            </motion.h1>
            <motion.small
              className="font-semibold text-gray-200 text-xl pt-4 block max-w-lg w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              I am a Software Engineer passionate about designing and developing
              user centered web applications. My mission is to bring ideas to
              life with apps that are scalable, reliable and stand out from the
              competition.
            </motion.small>
          </div>
          <motion.a
            href="/downloadables/solomon_akpuru_resume.pdf"
            download
            className="bg-sky-500 text-white font-semibold block w-fit px-4 py-3 rounded-lg mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Download My Resume
          </motion.a>
        </motion.div>
        <Socials customStyles="z-20 hidden sm:text-xl sm:text-3xl sm:absolute sm:left-7 sm:top-0 sm:flex sm:flex-col sm:min-h-screen sm:justify-center gap-2 text-sky-400" />
        <motion.div
          className="bg-gray-200 absolute -z-20 inset-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Hero;
