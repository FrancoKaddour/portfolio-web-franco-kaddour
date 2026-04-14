import { useTranslation } from "react-i18next";

const GITHUB_USER = "francokaddour";

interface ProjectData {
  nameKey: string;
  year: string;
  descKey: string;
  tech: string;
  images: string[];
  url: string;
  websiteUrl?: string;
}

const projects: ProjectData[] = [
  {
    nameKey: "Espacio Viña",
    year: "2024",
    descKey: "projects.espacioVinaDesc",
    tech: "PHP",
    images: ["/img/1espacio-vina.jpeg", "/img/2espacio-vina.jpeg"],
    url: `https://github.com/${GITHUB_USER}/espacio-vina`,
    websiteUrl: "https://www.espaciovina.com/",
  },
  {
    nameKey: "Miga Club",
    year: "2024",
    descKey: "projects.migaClubDesc",
    tech: "HTML / CSS / JS",
    images: ["/img/1miga-club.jpeg", "/img/2miga-club.jpeg"],
    url: `https://github.com/${GITHUB_USER}/miga-club`,
    websiteUrl: "https://miga-club.vercel.app/",
  },
  {
    nameKey: "La Básica",
    year: "2025",
    descKey: "projects.laBasicaDesc",
    tech: "React / TypeScript",
    images: ["/img/1la-basica.jpeg", "/img/2la-basica.jpeg"],
    url: `https://github.com/${GITHUB_USER}/la-basica-pasteleria`,
    websiteUrl: "https://la-basica-pasteleria.vercel.app/",
  },
  {
    nameKey: "Portfolio Web",
    year: "2025",
    descKey: "projects.portfolioDesc",
    tech: "React / TypeScript / Vite",
    images: [],
    url: `https://github.com/${GITHUB_USER}/portfolio-web-franco-kaddour`,
  },
  {
    nameKey: "Monitoreo Ambiental",
    year: "2025",
    descKey: "projects.monitoreoDesc",
    tech: "Python",
    images: [],
    url: `https://github.com/${GITHUB_USER}/monitoreo-ambiental`,
  },
];

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-16">
      {/* Page title */}
      <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-3 text-foreground">
        {t("projects.title")}
      </h1>
      <p className="text-[14px] md:text-[15px] leading-[1.8] text-foreground/50 mb-12">
        {t("projects.subtitle")}
      </p>

      {/* Projects list */}
      <div className="space-y-14">
        {projects.map((project) => (
          <article key={project.nameKey}>
            {/* Project title */}
            <h2 className="text-[17px] md:text-[20px] font-bold tracking-[0.12em] uppercase mb-4">
              <a
                href={project.websiteUrl || project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground no-underline hover:underline"
              >
                {project.nameKey} ({project.year})
              </a>
            </h2>

            {/* Image + description row */}
            <div className={`flex flex-col ${project.images.length > 0 ? "md:flex-row" : ""} gap-5`}>
              {/* Image(s) — color images, no filter */}
              {project.images.length > 0 && (
                <a
                  href={project.websiteUrl || project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 md:w-[260px] block"
                >
                  <img
                    src={project.images[0]}
                    alt={`${project.nameKey} screenshot`}
                    className="w-full rounded-sm shadow-sm hover:shadow-md transition-shadow object-cover aspect-video"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </a>
              )}

              {/* Description */}
              <div className="flex-1">
                <p className="text-[14px] md:text-[15px] leading-[1.8] mb-3 text-foreground">
                  {t(project.descKey)}
                </p>
                <p className="text-[13px] text-foreground/50">
                  <span className="font-bold text-foreground">{project.tech}</span>
                  {" · "}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground font-bold no-underline hover:underline"
                  >
                    GitHub
                  </a>
                  {project.websiteUrl && (
                    <>
                      {" · "}
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-foreground font-bold no-underline hover:underline"
                      >
                        Live
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
