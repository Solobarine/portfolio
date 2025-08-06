import { motion } from "framer-motion";
import {
  Fiverr,
  Freelancer,
  GitHub,
  Gmail,
  Upwork,
  X,
} from "../assets/icons/logos";

interface SocialsProps {
  customStyles?: string;
}

const Socials = ({ customStyles = "" }: SocialsProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/solobarine",
      icon: GitHub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/solomon-akpuru",
      icon: "fab fa-linkedin",
    },
    {
      name: "X",
      url: "https://x.com/solomonakpuru",
      icon: X,
    },
    {
      name: "Email",
      url: "mailto:solobarine@gmail.com",
      icon: Gmail,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01d7b0469a7602559b",
      icon: Upwork,
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/solomonakpuru",
      icon: Fiverr,
    },
    {
      name: "Freelancer",
      url: "https://www.freelancer.com/u/solobarine",
      icon: Freelancer,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={customStyles}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid place-content-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {typeof social.icon == "string" ? (
            <i
              className={`${social.icon} group-hover:text-sky-300 transition-colors duration-300`}
            ></i>
          ) : (
            <social.icon className="w-6 h-6 text-sky-500 hover:text-sky-300" />
          )}

          {/* Tooltip */}
          <motion.div
            className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            {social.name}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Socials;
