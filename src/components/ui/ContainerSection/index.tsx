import React, { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

type ContainerSectionProps = {
  children: ReactNode;
  bgColor?: string;
  classNameSection?: string;
  classNameContainer?: string;
};

const ContainerSection: React.FC<ContainerSectionProps> = ({
  children,
  bgColor = "bg-white",
  classNameSection,
  classNameContainer = "max-w-screen-xl",
}) => {
  return (
    <section
      className={`${bgColor} w-full flex flex-col items-center justify-start ${classNameSection}`}
    >
      <div className={`w-full max-w-screen-xl ${classNameContainer}`}>
        {children}
      </div>
    </section>
  );
};

export default ContainerSection;
