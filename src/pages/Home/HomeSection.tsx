"use client";

import { siteConfig } from "@/config/siteConfig";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

const HomeSection = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {siteConfig.slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Image
                  fallbackSrc="https://via.placeholder.com/300x200"
                  className="w-screen	object-cover min-h-[27vh] rounded-none	"
                  src={slide.image}
                  alt="NextUI hero Image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section
        className={`flex transition-opacity ease-in duration-1000 flex-col items-center justify-start w-full pt-16 opacity-0 ${
          isVisible1 && "animate-fadeUp"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full pb-16">
          <h3 className="font-bold text-xl font-mono text-zinc-500 text-center">
            NOVIDADES & EVENTOS
          </h3>
          <h2 className="font-bold text-4xl text-blue-950	text-center">
            ACONTECE NA MADRE
          </h2>
        </div>
        <div className="w-full px-8">
          <div
            ref={ref1}
            className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:flex-row gap-8"
          >
            {siteConfig.cards_novidades_eventos.map((card) => (
              <Card key={card.id} className="lg:mb-0 mb-8 w-full">
                <CardBody className="overflow-visible p-0">
                  <Image
                    alt="Card background"
                    width="100%"
                    className="object-cover rounded-xl w-full"
                    src={card.image}
                  />
                </CardBody>
                <CardHeader className="flex pt-8 px-8 pb-8 flex-col justify-start items-start gap-4 h-full">
                  <p className="text-tiny uppercase font-bold">
                    {card.subTitle}
                  </p>
                  <h2 className="font-bold text-large">{card.title}</h2>
                  <h3 className="ont-bold text-default-500">{card.describe}</h3>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-start w-full h-screen pt-16">
        <div className="w-full h-full">pagina 3</div>
      </section>
    </div>
  );
}

export default HomeSection