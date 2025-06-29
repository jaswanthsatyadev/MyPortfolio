import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";

export const ALL_SKILLS = [
  {
    skill_name: "HTML",
    image: "/skills/html.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/javascript.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "C++",
    image: "/skills/cpp.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Python",
    image: "/skills/python.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "React.js",
    image: "/skills/react.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Next.js",
    image: "/skills/nextjs.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Prisma",
    image: "/skills/light-prisma-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Node.js",
    image: "/skills/nodejs-icon-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "n8n",
    image: "/skills/n8n-color.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "WordPress",
    image: "/skills/wordpress-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Docker",
    image: "/skills/icons8-docker.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Figma",
    image: "/skills/figma-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Express.js",
    image: "/skills/expressjs.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "FastAPI",
    image: "/skills/fastapi-1.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Bootstrap",
    image: "/skills/bootstrap.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "SQL",
    image: "/skills/sql.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Godot",
    image: "/skills/Godot Engine.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Git",
    image: "/skills/git-logo-svg_svgstack_com_28381751178596.svg",
    width: 62,
    height: 62,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/jaswanth-satya-dev/",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    link: "https://github.com/jaswanthsatyadev",
  },
] as const;



export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/jaswanthsatyadev/MyPortfolio?tab=readme-ov-file",
} as const;
