import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

type SectionWrapperProps = {
  idName: string;
};

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P & SectionWrapperProps>,
  idName: string
): React.FC<P> => {
  const HOC: React.FC<P> = (props) => {
    return (
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-0 2xl:px-60 py-10 2xl:py-16 max-w-full  min-h-screen mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} idName={idName} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
