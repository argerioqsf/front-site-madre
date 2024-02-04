"use client";

import ContainerSection from "@/components/ui/ContainerSection";
import { siteConfig } from "@/config/siteConfig";
import { Image } from "@nextui-org/image";

import { Swiper, SwiperSlide } from "swiper/react";

const HomeSection1 = () => {
  return (
    <ContainerSection classNameContainer="max-w-none">
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
                className="w-screen	object-cover min-h-[27vh] rounded-none"
                src={slide.image}
                alt="NextUI hero Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContainerSection>
  );
};

export default HomeSection1;
