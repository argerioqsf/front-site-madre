import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type HeaderSectionProps = SVGProps<SVGSVGElement> & {
  subtitle: string;
  title: string;
};

export type CardType = {
  id: number;
  image: string;
  subTitle: string;
  title: string;
  describe: string;
};
