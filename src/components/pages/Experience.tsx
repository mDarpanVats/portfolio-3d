import React, { useEffect, useState } from "react";

import SectionWrapper from "../../hoc/SectionWrapper";
import { experiences } from "@data/index";
import { motion } from "framer-motion";
import { textVariant } from "@utils/motion";

interface ExperienceDetailsProps {
  title: string;
  company_name: string;
  date: string;
  details: string[];
}

interface ExperienceCardProps {
  experience: ExperienceDetailsProps;
  onClick: () => void;
  isActive: boolean;
  isMobile: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onClick,
  isActive,
  isMobile,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
        {experience.company_name} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails: React.FC<{ experience: ExperienceDetailsProps }> = ({
  experience,
}) => {
  return (
    <div className="mt-5">
      <ul className="max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<ExperienceDetailsProps>(
    experiences[0]
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant(1)}>
        <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px]">
          Experience
        </h2>
      </motion.div>

      <div
        className="
      relative 
      mt-10 
      md:mt-20 md:p-20 
      flex flex-col items-center 
      sm:flex-row 
      sm:items-start
      backdrop-blur-lg bg-zinc-600/30 
      border border-zinc-600/40
      shadow-md
       "
      >
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");
