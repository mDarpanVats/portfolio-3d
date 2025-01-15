import React, { useEffect } from "react";
import { fadeIn, textVariant } from "@utils/motion";
import { motion, useAnimation } from "framer-motion";

import SectionWrapper from "@hoc/SectionWrapper";
import { portfolio } from "@data/index";
import { useInView } from "react-intersection-observer";

// import SectionWrapper from "src/hoc/SectionWrapper";

// import { styles } from "../styles";

// Define types for project data
interface Project {
  index: number;
  name: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px]
        p-6
        rounded-lg
        flex flex-col md:flex-row 
        ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
        gap-5 items-center
        backdrop-blur-lg bg-zinc-600/30 
        border border-zinc-600/40
        shadow-lg`}
    >
      <div
        className={`relative w-full md:w-3/5 flex justify-${
          isEven ? "end" : "start"
        }`}
      >
        <img
          src={image}
          alt="project_image"
          className="w-100 h-auto object-cover md:rounded-3xl"
        />
      </div>

      <div
        className={`w-full md:w-2/5 px-4 md:px-8 flex flex-col justify-center ${
          isEven ? "text-left md:text-left" : "text-left md:text-left"
        }`}
      >
        <h3 className="text-slate-600 font-medium text-md sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight">
          {name}
        </h3>
        <p className="mt-4 text-slate-600 text-sm sm:text-s md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <motion.div variants={textVariant(1)}>
        <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px]">
          Portfolio
        </h2>
      </motion.div>

      <div
        className="mt-10 md:mt-20 flex flex-col 
      gap-10 md:gap-20
      items-center"
      >
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
