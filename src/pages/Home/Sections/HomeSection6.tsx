"use client";

import CardDefault from "@/components/CardDefault";
import HeaderSection from "@/components/HeaderSection";
import { siteConfig } from "@/config/siteConfig";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

const HomeSection6 = () => {
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);
  return (
    <section
      className={`flex bg-[#f7f7f7] transition-opacity ease-in duration-1000 flex-col items-center justify-start w-full pt-16 pb-16 opacity-0 ${
        isVisible2 && "animate-fadeUp"
      }`}
    >
      <HeaderSection subtitle="NOTÍCIASS & ARTIGOS" title="BLOG MADRE" />
      <div className="w-full px-8 pt-16">
        <div
          ref={ref2}
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:flex-row gap-8"
        >
          {siteConfig.cards_noticias_artigos.map((card) => (
            <CardDefault key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
