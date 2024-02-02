import React from "react";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="w-full h-20 bg-[#013160]"></div>
      <div className="w-screen p-8 bg-[#0a1635] w-full flex flex-col items-center justify-center">
        <Image
          as={NextImage}
          width={215}
          height={70}
          src="https://www.grupomadretereza.com.br/themes/cemt/assets/images/logos/logo_gmt_white.png"
          alt="NextUI hero Image"
        />

        <div className="flex flex-row justify-center item-center gap-2 mb-4">
          <Link href="http://www.instagram.com/grupomadretereza">
            <div className="rounded-full bg-slate-100 w-8 h-8 flex items-center justify-center bg-black">
              <InstagramIcon />
            </div>
          </Link>
          <Link href="http://www.facebook.com/grupomadretereza">
            <div className="rounded-full bg-slate-100 w-8 h-8 flex items-center justify-center bg-black">
              <FacebookIcon />
            </div>
          </Link>
          <Link href="http://www.linkedin.com/FaculdadeMadreTereza">
            <div className="rounded-full bg-slate-100 w-8 h-8 flex items-center justify-center bg-black">
              <YoutubeIcon />
            </div>
          </Link>
        </div>
        <p className="text-slate-400 text-sm text-center">
          © 2021. Todos os Rireitos Reservados.
        </p>

        <p className="text-slate-400 text-sm text-center">
          Desenvolvido pelo Setor de Tecnologia da Informação!
        </p>
      </div>
    </div>
  );
};

export default Footer;
