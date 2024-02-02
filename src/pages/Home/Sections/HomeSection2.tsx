"use client";

import { siteConfig } from "@/config/siteConfig";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import CardDefault from "@/components/CardDefault";
import HeaderSection from "@/components/HeaderSection";

const HomeSection2 = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <section
      className={`flex bg-[#f7f7f7] transition-opacity ease-in duration-1000 flex-col items-center justify-start w-full pt-16 pb-16 opacity-0 ${
        isVisible1 && "animate-fadeUp"
      }`}
    >
      <HeaderSection subtitle="NOVIDADES & EVENTOS" title="ACONTECE NA MADRE" />

      <div className="w-full px-8">
        <div
          ref={ref1}
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:flex-row gap-8"
        >
          {siteConfig.cards_novidades_eventos.map((card) => (
            <CardDefault key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
