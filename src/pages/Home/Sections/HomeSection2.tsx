"use client";

import { siteConfig } from "@/config/siteConfig";
import { useIsVisible } from "@/hooks/useIsVisible";
import CardDefault from "@/components/CardDefault";
import HeaderSection from "@/components/HeaderSection";

const HomeSection2 = () => {
  const { isVisible, ref } = useIsVisible();
  return (
    <section
      className={`flex bg-[#f7f7f7] transition-opacity ease-in duration-1000 flex-col items-center justify-start w-full pt-16 pb-16 opacity-0 ${
        isVisible && "animate-fadeUp"
      }`}
    >
      <HeaderSection subtitle="NOVIDADES & EVENTOS" title="ACONTECE NA MADRE" />

      <div className="w-full px-8 pt-16">
        <div
          ref={ref}
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
