import React, { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative bg-[#fee440] w-full h-auto overflow-hidden">
      <div
        className="absolute inset-0 bg-hero-pattern bg-repeat-y bg-[length:100%_auto] bg-top"
        style={{ backgroundImage: "url('/background/hero.svg')" }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
