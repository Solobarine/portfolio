import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const opacityVariant = {
  hidden: { opacity: 0, marginTop: "100px" },
  visible: {
    opacity: 1,
    marginTop: "0px",
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Invite = () => {
  const ref = useRef<any>(null);
  const inView = useInView(ref, { amount: 1, once: false });
  return (
    <motion.div
      ref={ref}
      variants={opacityVariant}
      animate={inView ? "visible" : "hidden"}
      className="absolute w-full max-w-3xl bg-black/40 left-1/2 transform -translate-x-1/2 bottom-4 text-center text-3xl md:text-4xl font-semibold text-gray-200 py-5 rounded-xl italic"
    >
      Embark on a Journey of Infinite <br /> Creativity
    </motion.div>
  );
};

export default Invite;
