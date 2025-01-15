// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";

// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";

import { Project, projects } from "@data/index";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";

import { EffectCards } from "swiper/modules";
import ProjectCard from "@components/ui/Projectcard";
import SectionWrapper from "@hoc/SectionWrapper";

// import "swiper/swiper-bundle.css";
// import "swiper/modules/effect-cards/effect-cards.css";
// import "swiper/modules/pagination/pagination.css";

// import "swiper/modules/pagination.css";

// import "swiper/swiper-bundle.min.css";

const Projects: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "tween",
            duration: 1,
            delay: 0.2,
          },
        },
      }}
      className=""
    >
      <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px]">
        Projects
      </h2>
      <div className="p-4 sm:p-6 md:p-8">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          parallax={true}
          modules={[EffectCards]}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24"
        >
          {projects.map((project: Project) => (
            <SwiperSlide key={project.name}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "Projects");
