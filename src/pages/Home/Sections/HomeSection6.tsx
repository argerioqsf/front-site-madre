"use client";

import CardDefault from "@/components/CardDefault";
import HeaderSection from "@/components/HeaderSection";
import ContainerSection from "@/components/ui/ContainerSection";
import { siteConfig } from "@/config/siteConfig";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

const HomeSection6 = () => {
  const { isVisible, ref } = useIsVisible();
  return (
    <ContainerSection bgColor="bg-[#f7f7f7]">
      <div
        className={`flex transition-opacity ease-in duration-1000 flex-col items-center justify-start w-full pt-16 pb-16 opacity-0 ${
          isVisible && "animate-fadeUp"
        }`}
      >
        <HeaderSection subtitle="NOTÍCIASS & ARTIGOS" title="BLOG MADRE" />
        <div className="w-full px-8 pt-16">
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:flex-row gap-8"
          >
            {siteConfig.cards_noticias_artigos.map((card) => (
              <CardDefault key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </ContainerSection>
  );
};

export default HomeSection6;
