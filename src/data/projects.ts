import { GITHUB_USER } from "@/lib/constants";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    name: "La Básica",
    year: "2025",
    descKey: "projects.laBasicaDesc",
    tech: ["React", "TypeScript", "UI Design"],
    image: "/img/labasica.webp",
    url: `https://github.com/${GITHUB_USER}/la-basica-pasteleria`,
    websiteUrl: "https://labasicapasteleria.com/",
    featured: true,
  },
  {
    id: "02",
    name: "Miga Club",
    year: "2024",
    descKey: "projects.migaClubDesc",
    tech: ["HTML", "CSS", "JavaScript", "Brand Design"],
    image: "/img/migaclub.webp",
    url: `https://github.com/${GITHUB_USER}/miga-club`,
    websiteUrl: "https://miga-club.vercel.app/",
    featured: true,
  },
  {
    id: "03",
    name: "Espacio Vina",
    year: "2024",
    descKey: "projects.espacioVinaDesc",
    tech: ["PHP", "MySQL", "Frontend", "UI Design"],
    image: "/img/espaciovina.webp",
    url: `https://github.com/${GITHUB_USER}/espacio-vina`,
    websiteUrl: "https://www.espaciovina.com/",
  },
  {
    id: "04",
    name: "Portfolio Web",
    year: "2025",
    descKey: "projects.portfolioDesc",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    url: `https://github.com/${GITHUB_USER}/portfolio-web-franco-kaddour`,
    websiteUrl: "https://francokaddour.vercel.app/",
  },
];
