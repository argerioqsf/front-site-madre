import { Button } from "@nextui-org/button";
import React from "react";

const HomeSection5: React.FC = () => {
  return (
    <section className="w-full bg-[#013160] px-14 py-20">
      <div className="max-w-screen-xl text-center flex flex-col justify-center items-center">
        <h3 className="font-medium text-[1.2em] text-white mb-1">
          O GRUPO MADRE TEREZA
        </h3>
        <h2 className="font-bold text-[2.2em] text-white mb-1">
          Disponibiliza um Banco de talentos!
        </h2>
        <h4 className="font-medium text-[1.2em] text-white mb-1">
          PARA AGILIZAR O PROCESSOS DE RECRUTAMENTO E SELEÇÃO DE NOVOS
          CANDIDATOS A UMA VAGA DE EMPREGO.
        </h4>
        <Button radius="full" className="px-16 py-8 bg-white font-bold mt-10">
          FAÇA SEU CADASTRO
        </Button>
      </div>
    </section>
  );
};

export default HomeSection5;
