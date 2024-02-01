"use client";

import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
            {siteConfig.slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Image
                  // as={NextImage}
                  fallbackSrc="https://via.placeholder.com/300x200"
                  // width={500}
                  className="w-screen	object-cover"
                  src={slide.image}
                  alt="NextUI hero Image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="flex flex-col items-center justify-start w-full pt-16">
        <div className="flex flex-col items-center justify-center w-full pb-16">
          <h3 className="font-bold text-xl font-mono text-zinc-500 text-center">
            NOVIDADES & EVENTOS
          </h3>
          <h2 className="font-bold text-4xl text-blue-950	text-center">
            ACONTECE NA MADRE
          </h2>
        </div>
        <div className="w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row gap-8">
            <Card className="lg:mb-0 mb-8 w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Card background"
                  width="100%"
                  className="object-cover rounded-xl w-full"
                  src="https://www.grupomadretereza.com.br/storage/images/cache/participe-da-promocao-mensalidade-premiada-550x412-0e460faf.png"
                />
              </CardBody>
              <CardHeader className="pt-8 px-8 pb-8 flex-col items-start gap-4">
                <p className="text-tiny uppercase font-bold">
                  Grupo madre Tereza
                </p>
                <h2 className="font-bold text-large">
                  Participe da Promoção Mensalidade Premiada
                </h2>
                <h3 className="ont-bold text-default-500">
                  Mais uma Super Promoção do Grupo Madre Tereza
                </h3>
              </CardHeader>
            </Card>

            <Card className="lg:mb-0 mb-8 w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Card background"
                  width="100%"
                  className="object-cover rounded-xl w-full"
                  src="https://www.grupomadretereza.com.br/storage/images/cache/grupo-madre-tereza-oferta-500-vagas-em-cursos-gratuitos-550x412-51e4a89f.jpg"
                />
              </CardBody>
              <CardHeader className="pt-8 px-8 pb-8 flex-col items-start gap-4">
                <p className="text-tiny uppercase font-bold">
                  Grupo madre Tereza
                </p>
                <h2 className="font-bold text-large">
                  Participe da Promoção Mensalidade Premiada
                </h2>
                <h3 className="ont-bold text-default-500">
                  Mais uma Super Promoção do Grupo Madre Tereza
                </h3>
              </CardHeader>
            </Card>

            <Card className="lg:mb-0 mb-8 w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Card background"
                  width="100%"
                  className="object-cover rounded-xl w-full"
                  src="https://www.grupomadretereza.com.br/storage/images/cache/atleta-da-faculdade-madre-tereza-se-destaca-na-copa-campos-judo-em-belem-pa-550x412-d3f5321a.jpg"
                />
              </CardBody>
              <CardHeader className="pt-8 px-8 pb-8 flex-col items-start gap-4">
                <p className="text-tiny uppercase font-bold">
                  Grupo madre Tereza
                </p>
                <h2 className="font-bold text-large">
                  Participe da Promoção Mensalidade Premiada
                </h2>
                <h3 className="ont-bold text-default-500">
                  Mais uma Super Promoção do Grupo Madre Tereza
                </h3>
              </CardHeader>
            </Card>

            <Card className="lg:mb-0 mb-8 w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Card background"
                  width="100%"
                  className="object-cover rounded-xl w-full"
                  src="https://www.grupomadretereza.com.br/storage/images/cache/atleta-da-faculdade-madre-tereza-se-destaca-na-copa-campos-judo-em-belem-pa-550x412-d3f5321a.jpg"
                />
              </CardBody>
              <CardHeader className="pt-8 px-8 pb-8 flex-col items-start gap-4">
                <p className="text-tiny uppercase font-bold">
                  Grupo madre Tereza
                </p>
                <h2 className="font-bold text-large">
                  Participe da Promoção Mensalidade Premiada
                </h2>
                <h3 className="ont-bold text-default-500">
                  Mais uma Super Promoção do Grupo Madre Tereza
                </h3>
              </CardHeader>
            </Card>

            <Card className="lg:mb-0 mb-8 w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Card background"
                  width="100%"
                  className="object-cover rounded-xl w-full"
                  src="https://www.grupomadretereza.com.br/storage/images/cache/atleta-da-faculdade-madre-tereza-se-destaca-na-copa-campos-judo-em-belem-pa-550x412-d3f5321a.jpg"
                />
              </CardBody>
              <CardHeader className="pt-8 px-8 pb-8 flex-col items-start gap-4">
                <p className="text-tiny uppercase font-bold">
                  Grupo madre Tereza
                </p>
                <h2 className="font-bold text-large">
                  Participe da Promoção Mensalidade Premiada
                </h2>
                <h3 className="ont-bold text-default-500">
                  Mais uma Super Promoção do Grupo Madre Tereza
                </h3>
              </CardHeader>
            </Card>

            <Card className="lg:mb-0 mb-8 w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Card background"
                  width="100%"
                  className="object-cover rounded-xl w-full"
                  src="https://www.grupomadretereza.com.br/storage/images/cache/atleta-da-faculdade-madre-tereza-se-destaca-na-copa-campos-judo-em-belem-pa-550x412-d3f5321a.jpg"
                />
              </CardBody>
              <CardHeader className="pt-8 px-8 pb-8 flex-col items-start gap-4">
                <p className="text-tiny uppercase font-bold">
                  Grupo madre Tereza
                </p>
                <h2 className="font-bold text-large">
                  Participe da Promoção Mensalidade Premiada
                </h2>
                <h3 className="ont-bold text-default-500">
                  Mais uma Super Promoção do Grupo Madre Tereza
                </h3>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-start w-full h-screen pt-16">
        <div className="w-full h-full">pagina 3</div>
      </section>
    </div>
  );
}
