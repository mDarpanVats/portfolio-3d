import React from "react";

const produceSpans = (text: string, animation: string): React.ReactNode => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position: React.FC = () => {
  return (
    <div
      className="relative
     cursor-default
      font-medium text-white 
      text-[16px] xs:text-[20px] 
      sm:text-[30px] md:text-[36px]
       2xl:text-[66px] leading-[32px]
        2xl:leading-[40px] 
        w-full
         flex 
         justify-center items-center"
    >
      <div className="absolute lg:text-5xl sm:text-3xl inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div
          className="first absolute left-1 md:left-2 2xl:left-4 flex"
          aria-label="Software Developer"
        >
          {produceSpans("Software Developer", "animate-textRotate1")}
        </div>
        <div
          className="second absolute left-1 md:left-2 2xl:left-4 flex"
          aria-label="Researcher"
        >
          {produceSpans("Researcher", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
