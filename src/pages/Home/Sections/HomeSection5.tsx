import { Button } from "@nextui-org/button";
import React from "react";

const HomeSection5: React.FC = () => {
  return (
    <section className="w-full bg-[#013160] px-14 py-20">
      <div className="max-w-screen-xl text-center flex justify-center 2lg:text-left items-center flex-col 2lg:flex-row 2lg:justify-between">
        <div className="2lg:w-2/3 w-full 2lg:pr-28 pr-0">
          <h3 className="font-medium text-[1.0em] text-white mb-1">
            O GRUPO MADRE TEREZA
          </h3>
          <h2 className="font-bold text-[2.0em] text-white mb-1">
            Disponibiliza um Banco de talentos!
          </h2>
          <h4 className="font-medium text-[1.0em] text-white mb-1">
            PARA AGILIZAR O PROCESSOS DE RECRUTAMENTO E SELEÇÃO DE NOVOS
            CANDIDATOS A UMA VAGA DE EMPREGO.
          </h4>
        </div>
        <Button
          radius="full"
          className="px-16 py-8 bg-white font-bold mt-10 max-w-[245px]"
        >
          FAÇA SEU CADASTRO
        </Button>
      </div>
    </section>
  );
};

export default HomeSection5;
