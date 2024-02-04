import ContainerSection from "@/components/ui/ContainerSection";
import { Image } from "@nextui-org/image";
import React from "react";

const HomeSection4: React.FC = () => {
  return (
    <ContainerSection bgColor="bg-[#f7f7f7]">
      <div className="flex flex-row justify-center items-start">
        <div className="w-full flex flex-col justify-center items-center lg:items-top md:p-20 p-10 px-38 pb-0 lg:flex-row">
          <div className="w-full md:w-4/5 lg:w-1/2 h-full pb-16 pr-0 md:pr-10">
            <div className="pb-6 lg:pb-10">
              <h4 className="font-semibold text-[1.2em] text-[#001856]">
                VANTAGENS DE SER
              </h4>
              <h2 className="font-semibold	text-[2.30em]">ALUNO MADRE</h2>
            </div>

            <div className="grid gap-8 lg:gap-10 pr-0 lg:pr-8">
              <div className="w-full flex flex-row justify-start">
                <div className="h-full pr-6">
                  <Image
                    alt="seguro madre"
                    width="50"
                    src="https://www.grupomadretereza.com.br/themes/gmtweb/assets/images/img_logo_seguro_madre.png"
                  />
                </div>
                <div className="w-full h-full">
                  <h4 className="font-bold text-[1.50em]">Seguro Madre</h4>
                  <p className="text-sm leading-6 text-[#777]">
                    Com o Seguro Madre, você estuda sem preocupações. Afinal, se
                    algum imprevisto surgir, é só falar com a Madre e a gente
                    aciona para você
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-row justify-start">
                <div className="pr-6 h-full">
                  <Image
                    alt="clube madre"
                    width="50"
                    src="https://www.grupomadretereza.com.br/themes/gmtweb/assets/images/img_logo_clube_madre.png"
                  />
                </div>
                <div className="w-full h-full">
                  <h4 className="font-bold text-[1.50em]">Seguro Madre</h4>
                  <p className="text-sm leading-6 text-[#777]">
                    Com o Seguro Madre, você estuda sem preocupações. Afinal, se
                    algum imprevisto surgir, é só falar com a Madre e a gente
                    aciona para você
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-row justify-start">
                <div className="pr-6 h-full">
                  <Image
                    alt="mensalidade"
                    width="50"
                    src="https://www.grupomadretereza.com.br/themes/gmtweb/assets/images/img_logo_mensalidade.png"
                  />
                </div>
                <div className="w-full h-full">
                  <h4 className="font-bold text-[1.50em]">Seguro Madre</h4>
                  <p className="text-sm leading-6 text-[#777]">
                    Com o Seguro Madre, você estuda sem preocupações. Afinal, se
                    algum imprevisto surgir, é só falar com a Madre e a gente
                    aciona para você
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full pt-12 flex flex-col justify-end items-center ">
            <div className="w-3/5 lg:w-full flex flex-col justify-end items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-full"
                src="https://www.grupomadretereza.com.br/themes/gmtweb/assets/images/foto_aluna.png"
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerSection>
  );
};

export default HomeSection4;
