import { HeaderSectionProps } from "@/types";
import React from "react";

const HeaderSection: React.FC<HeaderSectionProps> = ({ subtitle, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className="font-bold text-xl font-mono text-zinc-500 text-center">
        {subtitle}
      </h3>
      <h2 className="font-bold text-4xl text-blue-950	text-center">{title}</h2>
    </div>
  );
};

export default HeaderSection;
