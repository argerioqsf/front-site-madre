import HeaderSection from "@/components/HeaderSection";
import { MoonFilledIcon } from "@/components/icons";

import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";

const HomeSection3 = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full lg:h-screen pt-16 pb-16">
      <HeaderSection subtitle="NOSSAS" title="FORMAÇÕES" />
      <div className="w-full relative flex flex-row justify-center items-start">
        <div className="w-2/3 border-b-4 hidden	lg:block border-slate-200 h-16 "></div>

        <div className="w-10/12 lg:w-11/12  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 auto-cols-max gap-20 lg:absolute">
          <div className="flex flex-col justify-start items-center px-10 sm:px-16 md:px-0">
            <div className="rounded-full w-36 h-36 flex items-center justify-center p-4 bg-white">
              <Avatar
                as={Link}
                href="/"
                showFallback
                src="https://images.unsplash.com/broken"
                className="w-28 h-28 border-4 border-[#001856] bg-white hover:bg-[#001856] hover:text-white text-[#001856]"
              />
            </div>
            <h1 className="font-bold text-center text-3xl">Educação Básica</h1>
            <h4 className="text-lg text-center pt-2">
              Passou a ser estruturada por etapas, englobando a Educação
              Infantil, o Ensino Fundamental de nove anos e o Ensino Médio.
            </h4>
          </div>

          <div className="flex flex-col justify-start items-center px-10 sm:px-16 md:px-0">
            <div className="rounded-full w-36 h-36 flex items-center justify-center p-4 bg-white">
              <Avatar
                as={Link}
                href="/"
                showFallback
                src="https://images.unsplash.com/broken"
                className="w-28 h-28 border-4 border-[#001856] bg-white hover:bg-[#001856] hover:text-white text-[#001856]"
              />
            </div>
            <h1 className="font-bold text-center text-3xl">Educação Básica</h1>
            <h4 className="text-lg text-center pt-2">
              Passou a ser estruturada por etapas, englobando a Educação
              Infantil, o Ensino Fundamental de nove anos e o Ensino Médio.
            </h4>
          </div>

          <div className="flex flex-col justify-start items-center px-10 sm:px-16 md:px-0">
            <div className="rounded-full w-36 h-36 flex items-center justify-center p-4 bg-white">
              <Avatar
                as={Link}
                href="/"
                showFallback
                src="https://images.unsplash.com/broken"
                className="w-28 h-28 border-4 border-[#001856] bg-white hover:bg-[#001856] hover:text-white text-[#001856]"
              />
            </div>
            <h1 className="font-bold text-center text-3xl">Educação Básica</h1>
            <h4 className="text-lg text-center pt-2">
              Passou a ser estruturada por etapas, englobando a Educação
              Infantil, o Ensino Fundamental de nove anos e o Ensino Médio.
            </h4>
          </div>

          <div className="flex flex-col justify-start items-center px-10 sm:px-16 md:px-0">
            <div className="rounded-full w-36 h-36 flex items-center justify-center p-4 bg-white">
              <Avatar
                as={Link}
                href="/"
                showFallback
                src="https://images.unsplash.com/broken"
                className="w-28 h-28 border-4 border-[#001856] bg-white hover:bg-[#001856] hover:text-white text-[#001856]"
              />
            </div>
            <h1 className="font-bold text-center text-3xl">Educação Básica</h1>
            <h4 className="text-lg text-center pt-2">
              Passou a ser estruturada por etapas, englobando a Educação
              Infantil, o Ensino Fundamental de nove anos e o Ensino Médio.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
