import { BiLogoTailwindCss } from "react-icons/bi";
import {
  FaGitAlt,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si"; // <-- Added SiExpress

export const TechstackList = [
  // --- Frontend ---
  { id: 1, name: "HTML", icon: FaHtml5 },
  { id: 2, name: "CSS", icon: FaCss3Alt },
  { id: 3, name: "JavaScript", icon: FaJsSquare },
  { id: 4, name: "Bootstrap", icon: FaBootstrap },
  { id: 5, name: "TailwindCSS", icon: BiLogoTailwindCss },
  { id: 6, name: "ReactJS", icon: FaReact },

  // --- Backend ---
  { id: 7, name: "NodeJS", icon: FaNodeJs },
  { id: 8, name: "ExpressJS", icon: SiExpress },
  { id: 9, name: "MongoDB", icon: SiMongodb },
  { id: 10, name: "Java", icon: FaJava },

  // --- Tools ---
  { id: 11, name: "Git", icon: FaGitAlt },
  { id: 12, name: "GitHub", icon: FaGithub },
];
