export type SiteConfig = typeof siteConfig;

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
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
