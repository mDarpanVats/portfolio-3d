import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Position from "@components/ui/Position";
import RedPlaneCanvas from "@components/ui/RedPlane";

interface HeroProps {
  scrollContainer: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ scrollContainer }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  //   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  //   const cloudMainY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  //   const yCloud4 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const yCloud1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yCloud5 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yCloud6 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <>
      <section
        ref={ref}
        className="
         h-[100vh] 
         sm:h-[90vh] 
         md:h-[100vh] 
         bg-[url('./parallax/sky-with-cloud.svg')] 
         bg-cover 
         bg-center 
         relative
      "
      >
        <div
          className="
            absolute
            w-full
            flex
            flex-col 
            md:flex-column
            md: mt-[10%] 
            lg:flex-row
            gap-24
            p-8
          "
        >
          <div className="flex flex-col">
            <h1
              className="font-medium text-white text-[40px] 
                         xs:text-[50px] 
                         sm:text-[68px] 
                         md:text-[80px] 
                         lg:text-[100px] 
                         2xl:text-[120px] 
                         leading-[110px] 
                         2xl:leading-[160px]"
            >
              DARPAN VATS
            </h1>
            <Position />
          </div>
          {/* <div
            className="bg-slate-900 border border-secondary font-bold 
                       text-[20px] sm:text-[30px] 
                       md:text-[36px] 2xl:text-[46px] 
                       sm:leading-[40px] 
                       md:leading-[50px] 
                       2xl:leading-[60px] 
                       streaky-glow max-w-sm 2xl:max-w-lg text-white text-left"
          >
            I love crafting <br /> captivating experiences for the digital world
            to savor.
          </div> */}
        </div>

        <motion.img
          // style={{ y: backgroundY }}
          className="absolute 
                     w-full 
                     bottom-0"
          src="./parallax/clouds.svg"
          alt="Clouds"
        />
        <motion.img
          style={{ y: yCloud1 }}
          className="absolute 
                     w-full
                     bottom-[-10%] left-[-2%] z-4"
          src="./parallax/cloud1.svg"
          alt="Cloud 1"
        />
        <motion.img
          style={{ y: cloud2Y }}
          className="absolute 
                     w-full
                     bottom-[-25%] right-0 z-[10]"
          src="./parallax/cloud2.svg"
          alt="Cloud 2"
        />
        <motion.img
          style={{ y: cloud3Y }}
          className="absolute 
                     w-full
                     bottom-[-12%]
                     right-[20%] z-[11]"
          src="./parallax/cloud3.svg"
          alt="Cloud 3"
        />
        <motion.img
          style={{ y: yCloud5 }}
          className="w-full 
                     absolute 
                     bottom-[-25%] left-[15%] z-6"
          src="./parallax/cloud5.svg"
          alt="Cloud 5"
        />
        <motion.img
          style={{ y: yCloud5 }}
          className="absolute 
                     w-full
                     bottom-[2%] right-[0%] z-[7]"
          src="./parallax/cloud5.svg"
          alt="Cloud 5"
        />
        <motion.img
          style={{ y: yCloud6 }}
          className="absolute 
                     w-full 
                     bottom-[-5%] right-[5%] z-[9]"
          src="./parallax/cloud6.svg"
          alt="Cloud 6"
        />

        <RedPlaneCanvas scrollContainer={scrollContainer} />
      </section>
    </>
  );
};

export default Hero;
