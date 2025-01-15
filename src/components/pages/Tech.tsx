import {
  Cloud,
  ICloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import SectionWrapper from "@hoc/SectionWrapper";

//import SectionWrapper from "src/hoc/SectionWrapper";

// import SectionWrapper from "src/hoc/SectionWrapper";

// Update the tooltip value if needed based on the library's expected value

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;
export const cloudProps: Omit<ICloud, "children"> = {
  canvasProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native", // Update this value if the library expects a boolean or another type
    tooltipDelay: 0,
    wheelZoom: false,
  },
};

// Define the type for the icons
// interface SimpleIcon {
//   slug: string;
//   hex: string;
//   source: string;
// }

const useIcons = (slugs: string[]): React.ReactNode[] => {
  //   const [icons, setIcons] = React.useState<{
  //     simpleIcons: Record<string, SimpleIcon>;
  //   } | null>(null);
  const [icons, setIcons] = React.useState<IconData>();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 50,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return [<a key="loading">Loading</a>];
};

const slugs = [
  "react",
  "redux",
  "nextdotjs",
  "tailwindcss",
  "nodedotjs",
  "jest",
  "cypress",
  "mongodb",
  "sass",
  "html5",
  "javascript",
  "graphql",
  "typescript",
  "python",
  "docker",
  "kubernetes",
  "mysql",
  "django",
  "github",
  "java",
  "amazonaws",
  "visualstudiocode",
];

const Tech: React.FC = () => {
  const icons = useIcons(slugs);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className=" flex flex-col overflow-hidden">
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
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <Cloud {...cloudProps}>{icons}</Cloud>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
