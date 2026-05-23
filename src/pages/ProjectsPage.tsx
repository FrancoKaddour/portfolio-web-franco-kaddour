import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ExternalLink } from "lucide-react";
import { BASE_URL, GITHUB_USER } from "@/lib/constants";

interface ProjectData {
  id: string;
  name: string;
  year: string;
  descKey: string;
  tech: string[];
  image?: string;
  url: string;
  websiteUrl?: string;
  featured?: boolean;
}

const projects: ProjectData[] = [
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
  },
  {
    id: "05",
    name: "Monitoreo Ambiental",
    year: "2025",
    descKey: "projects.monitoreoDesc",
    tech: ["Python", "Data Viz", "Sensors"],
    url: `https://github.com/${GITHUB_USER}/monitoreo-ambiental`,
  },
];

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProjectImage = memo(function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const handleError = useCallback(() => setHasError(true), []);

  if (hasError) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
});

function TerminalPlaceholder({ tech }: { tech: string[] }) {
  return (
    <div className="w-full aspect-video bg-foreground/[0.03] border-b border-foreground/10 flex flex-col justify-center px-6 font-mono select-none">
      <span className="text-foreground/25 text-[12px] mb-1">$ run project</span>
      <span className="text-foreground/40 text-[13px]">
        &gt; {tech[0]}{tech[1] ? ` · ${tech[1]}` : ""}
      </span>
      <span className="text-foreground/20 text-[11px] mt-2">[ source: GitHub ]</span>
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="border border-foreground/20 text-foreground/60 text-[10px] tracking-[0.08em] uppercase px-2 py-0.5 font-mono">
      {label}
    </span>
  );
}

function ProjectLinks({
  url,
  websiteUrl,
}: {
  url: string;
  websiteUrl?: string;
}) {
  return (
    <div className="flex items-center gap-4 mt-auto pt-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[12px] text-foreground/50 hover:text-foreground transition-colors no-underline font-mono tracking-[0.06em]"
        aria-label="Ver código en GitHub"
      >
        GitHub
      </a>
      {websiteUrl && (
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] text-foreground/50 hover:text-foreground transition-colors no-underline font-mono tracking-[0.06em]"
          aria-label="Ver sitio en vivo"
        >
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          Live
        </a>
      )}
    </div>
  );
}

/** Large card for featured projects (01, 02) */
function FeaturedCard({ project }: { project: ProjectData }) {
  const { t } = useTranslation();
  const href = project.websiteUrl || project.url;

  return (
    <article
      aria-label={project.name}
      className="group border border-foreground/10 hover:border-foreground/25 transition-colors duration-300 flex flex-col"
    >
      {/* Image area */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        {project.image ? (
          <ProjectImage
            src={project.image}
            alt={`${project.name} — captura de pantalla`}
            className="w-full aspect-video object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <TerminalPlaceholder tech={project.tech} />
        )}
      </a>

      {/* Card content */}
      <div className="flex flex-col flex-1 px-5 py-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3 gap-4">
          <div>
            <span className="text-[10px] text-foreground/30 font-mono tracking-[0.15em] uppercase">
              {project.id} · {project.year}
            </span>
            <h2 className="text-[16px] md:text-[18px] font-bold tracking-[0.1em] uppercase mt-0.5">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground no-underline hover:underline"
              >
                {project.name}
              </a>
            </h2>
          </div>
          <span className="shrink-0 border border-foreground/20 text-foreground/50 text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 font-mono mt-1">
            Featured
          </span>
        </div>

        {/* Description */}
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-foreground/70 mb-4 flex-1">
          {t(project.descKey)}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-1">
          {project.tech.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <ProjectLinks url={project.url} websiteUrl={project.websiteUrl} />
      </div>
    </article>
  );
}

/** Medium card for regular projects (03) */
function RegularCard({ project }: { project: ProjectData }) {
  const { t } = useTranslation();
  const href = project.websiteUrl || project.url;

  return (
    <article
      aria-label={project.name}
      className="group border border-foreground/10 hover:border-foreground/25 transition-colors duration-300 flex flex-col"
    >
      {/* Image area */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        {project.image ? (
          <ProjectImage
            src={project.image}
            alt={`${project.name} — captura de pantalla`}
            className="w-full aspect-video object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <TerminalPlaceholder tech={project.tech} />
        )}
      </a>

      <div className="flex flex-col flex-1 px-5 py-5">
        <span className="text-[10px] text-foreground/30 font-mono tracking-[0.15em] uppercase mb-1">
          {project.id} · {project.year}
        </span>
        <h2 className="text-[15px] md:text-[16px] font-bold tracking-[0.1em] uppercase mb-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground no-underline hover:underline"
          >
            {project.name}
          </a>
        </h2>

        <p className="text-[13px] leading-[1.8] text-foreground/70 mb-4 flex-1">
          {t(project.descKey)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-1">
          {project.tech.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <ProjectLinks url={project.url} websiteUrl={project.websiteUrl} />
      </div>
    </article>
  );
}

/** Compact card for secondary projects (04, 05) — no image */
function CompactCard({ project }: { project: ProjectData }) {
  const { t } = useTranslation();

  return (
    <article
      aria-label={project.name}
      className="group border border-foreground/10 hover:border-foreground/25 transition-colors duration-300 flex flex-col px-5 py-5"
    >
      <TerminalPlaceholder tech={project.tech} />

      <div className="flex flex-col flex-1 mt-5">
        <span className="text-[10px] text-foreground/30 font-mono tracking-[0.15em] uppercase mb-1">
          {project.id} · {project.year}
        </span>
        <h2 className="text-[15px] font-bold tracking-[0.1em] uppercase mb-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground no-underline hover:underline"
          >
            {project.name}
          </a>
        </h2>

        <p className="text-[13px] leading-[1.8] text-foreground/70 mb-4 flex-1">
          {t(project.descKey)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-1">
          {project.tech.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <ProjectLinks url={project.url} websiteUrl={project.websiteUrl} />
      </div>
    </article>
  );
}

const ProjectsPage = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Proyectos de Franco Kaddour",
    description: t("projects.subtitle"),
    itemListElement: projects
      .filter((p) => p.websiteUrl)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          url: p.websiteUrl,
          applicationCategory: "WebApplication",
          author: {
            "@type": "Person",
            name: "Franco Kaddour",
          },
        },
      })),
  };

  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured && p.image);
  const compact = projects.filter((p) => !p.featured && !p.image);

  return (
    <>
      <Helmet>
        <title>{t("projects.title")} — Franco Kaddour</title>
        <meta name="description" content={t("projects.subtitle")} />
        <link rel="canonical" href={`${BASE_URL}/projects`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}/projects`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/projects`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/projects`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/projects`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="page-enter max-w-[900px] mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-3 text-foreground">
          {t("projects.title")}
        </h1>
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-foreground/40 mb-12">
          {t("projects.subtitle")}
        </p>

        {/* Featured — 2 columns */}
        {featured.length > 0 && (
          <section aria-label="Proyectos destacados" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map((p) => (
                <FeaturedCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        {/* Regular projects with image */}
        {regular.length > 0 && (
          <section aria-label="Proyectos" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regular.map((p) => (
                <RegularCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        {/* Compact — secondary projects */}
        {compact.length > 0 && (
          <section aria-label="Otros proyectos">
            <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/30 font-mono mb-4">
              Other
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {compact.map((p) => (
                <CompactCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
