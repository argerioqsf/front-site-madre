export type SiteConfig = typeof siteConfig;

import { UserCog, UserGraduate, UserTie, Users } from "@/components/icons";
export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "INSTITUCIONAL",
      href: "/",
    },
    {
      label: "FORMAÇÃO",
      href: "/docs",
    },
    {
      label: "SERVIÇOS",
      href: "/pricing",
    },
    {
      label: "FIQUE POR DENTRO",
      href: "/blog",
    },
    {
      label: "EXTENÇÃO",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  slides: [
    {
      id: "1",
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/projeto-de-extensao-nex-1920x800-ad44f9da.png",
    },
    {
      id: "2",
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/vestibular-curso-de-direito-1920x800-f486d9d6.jpg",
    },
    {
      id: "3",
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/resultado-do-concurso-de-bolsas-2024-1920x800-59c691b5.png",
    },
    {
      id: "4",
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/pesquisa-de-egressos-1920x800-c8c86e0e.png",
    },
  ],
  cards_novidades_eventos: [
    {
      id: 1,
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/participe-da-promocao-mensalidade-premiada-550x412-0e460faf.png",
      subTitle: "Grupo madre Tereza",
      title: "Participe da Promoção Mensalidade Premiada",
      describe: "Mais uma Super Promoção do Grupo Madre Tereza",
    },
    {
      id: 2,
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/grupo-madre-tereza-oferta-500-vagas-em-cursos-gratuitos-550x412-51e4a89f.jpg",
      subTitle: "Curso Técnico",
      title: "Grupo Madre Tereza Oferta 500 Vagas em Cursos Gratuitos",
      describe:
        "Grupo Madre Tereza e Programa Cidade Jovem Oferecem 500 Vagas em Cursos Gratuitos no Polo Marabaixo.",
    },
    {
      id: 3,
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/atleta-da-faculdade-madre-tereza-se-destaca-na-copa-campos-judo-em-belem-pa-550x412-d3f5321a.jpg",
      subTitle: "Grupo madre Tereza",
      title:
        "Atleta da Faculdade Madre Tereza se Destaca na Copa Campos Judô em Belém-PA",
      describe: "Mais um destaque da Faculdade Madre Tereza.",
    },
    {
      id: 4,
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/acesso-biblioteca-digital-550x412-c33e2ade.jpg",
      subTitle: "Graduação",
      title: "ACESSO BIBLIOTECA DIGITAL",
      describe: "Minha Biblioteca Grupo Madre Tereza",
    },
    {
      id: 5,
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/arraia-da-zona-sul-uma-festa-junina-imperdivel-para-toda-a-familia-madrinense-550x412-2978e7c2.jpg",
      subTitle: "Curso Técnico",
      title:
        "ARRAIÁ DA ZONA SUL: Uma festa junina imperdível para toda a família madrinense",
      describe:
        "Danças, comidas típicas e diversão garantida no evento promovido pela Escola Técnica Madre Tereza",
    },
    {
      id: 6,
      image:
        "https://www.grupomadretereza.com.br/storage/images/cache/grupo-madre-tereza-lanca-edital-do-concurso-de-bolsas-de-estudos-externa-para-o-ano-letivo-2023-550x412-b2168caa.png",
      subTitle: "Grupo Madre Tereza",
      title:
        "Grupo Madre Tereza lança edital do Concurso de Bolsas de Estudos Externa para o ano letivo 2023",
      describe:
        "Oportunidade imperdível para ingressar na graduação e cursos técnicos com bolsas de até 100% do valor da mensalidade",
    },
  ],
  social: [
    {
      id: 1,
      name: "instagram",
      link: "http://www.instagram.com/grupomadretereza",
    },
    {
      id: 2,
      name: "facebook",
      link: "http://www.facebook.com/grupomadretereza",
    },
    {
      id: 3,
      name: "youtube",
      link: "http://www.linkedin.com/FaculdadeMadreTereza",
    },
  ],
  formacoes: [
    {
      id: 1,
      icon: Users,
      title: "Educação Básica",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Font_Awesome_5_solid_users.svg/1279px-Font_Awesome_5_solid_users.svg.png",
      link: "/",
      subtitle:
        "Passou a ser estruturada por etapas, englobando a Educação Infantil, o Ensino Fundamental de nove anos e o Ensino Médio.",
    },
    {
      id: 2,
      title: "Cursos Técnicos",
      icon: UserCog,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Font_Awesome_5_solid_user-cog.svg/1200px-Font_Awesome_5_solid_user-cog.svg.png",
      link: "/",
      subtitle:
        "É um nível de ensino enquadrado no nível médio dos sistemas educativos. Constitui uma modalidade de ensino profissional.",
    },
    {
      id: 3,
      title: "Graduação",
      icon: UserGraduate,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Font_Awesome_5_solid_user-graduate.svg/1792px-Font_Awesome_5_solid_user-graduate.svg.png",
      link: "/",
      subtitle:
        "É a sua formação de nível superior. É nessa etapa que você irá entender, aprender e aprimorar as suas habilidades.",
    },
    {
      id: 4,
      title: "Pós Graduação",
      icon: UserTie,
      image:
        "https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-User-Tie-icon.png",
      link: "/",
      subtitle:
        "Após concluir a graduação, você pode optar por uma especialização em um dos segmentos da sua área de atuação.",
    },
  ],
};
