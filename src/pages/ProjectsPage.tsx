import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const GITHUB_USER = "francokaddour";

interface StaticProject {
  icon: string;
  name: string;
  tech: string;
  description: string;
  url: string;
  websiteUrl?: string;
  images?: string[];
}

const ProjectsPage = () => {
  const { t } = useTranslation();

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/á/g, "a")
      .replace(/é/g, "e")
      .replace(/í/g, "i")
      .replace(/ó/g, "o")
      .replace(/ú/g, "u")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const imagesFor = (name: string, count = 4) => {
    const base = slugify(name);
    const imgs: string[] = [];
    for (let i = 1; i <= count; i++) {
      imgs.push(`/img/${i}${base}.jpeg`);
    }
    return imgs;
  };

  const projects: StaticProject[] = [
    {
      icon: "🍷",
      name: "Espacio Vina",
      tech: "PHP",
      description: "E-commerce desarrollado en PHP con dashboard administrativo.",
      url: `https://github.com/${GITHUB_USER}/espacio-vina`,
      websiteUrl: "https://www.espaciovina.com/",
      images: imagesFor("Espacio Vina"),
    },
    {
      icon: "🎵",
      name: "Miga Club",
      tech: "HTML / CSS / JS",
      description: "Landing page con dashboard administrativo.",
      url: `https://github.com/${GITHUB_USER}/miga-club`,
      websiteUrl: "https://miga-club.vercel.app/",
      images: imagesFor("Miga Club"),
    },
    {
      icon: "🎂",
      name: "La Básica",
      tech: "React / TypeScript",
      description: "Tienda e-commerce con dashboard (React + TypeScript).",
      url: `https://github.com/${GITHUB_USER}/la-basica-pasteleria`,
      websiteUrl: "https://la-basica-pasteleria.vercel.app/",
      images: imagesFor("La Básica", 3),
    },
    {
      icon: "💼",
      name: "Portfolio Web",
      tech: "React / TypeScript",
      description: "Este portfolio (sitio actual).",
      url: `https://github.com/${GITHUB_USER}/portfolio-web`,
      images: [],
    },
    {
      icon: "🛰️",
      name: "Monitoreo Ambiental",
      tech: "Python",
      description: "Proyecto de monitoreo ambiental en Python.",
      url: `https://github.com/${GITHUB_USER}/monitoreo-ambiental`,
      images: [],
    },
  ];

  const getSrcSet = (src: string) => {
    const extMatch = src.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? extMatch[1] : "png";
    const base = src.replace(new RegExp(`\\.${ext}$`), "");
    const variants = [
      { w: 480, file: `${base}-480.webp` },
      { w: 800, file: `${base}-800.webp` },
      { w: 1200, file: `${base}-1200.webp` },
    ];
    return variants.map((v) => `${v.file} ${v.w}w`).join(", ");
  };

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-12">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-sans font-bold text-primary mb-2 sm:mb-3">{t('projects.title')}</h1>
      <p className="font-mono text-[10px] sm:text-[12px] md:text-[14px] text-foreground mb-4 sm:mb-6 md:mb-10 max-w-2xl">{t('projects.description')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`bg-card border border-border rounded-lg p-3 sm:p-4 md:p-6 hover:border-primary/50 transition-colors relative ${
              project.name === "Monitoreo Ambiental" ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm sm:text-base md:text-lg font-sans font-bold text-primary">{project.name}</h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm md:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                Ver repo
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mb-4 relative">
              {project.images && project.images.length > 0 ? (
                <a
                  href={project.websiteUrl || project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Carousel>
                    <CarouselContent>
                      {project.images.map((src, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={src}
                            alt={`${project.name} screenshot ${i + 1}`}
                            className="w-full object-cover aspect-video rounded-md cursor-pointer"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                            }}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </a>
              ) : (
                <div className="text-3xl">{project.icon}</div>
              )}
            </div>

            <p className="text-[10px] sm:text-[11px] md:text-[13px] font-mono text-muted-foreground mb-1 sm:mb-2">{project.description}</p>
            <div className="text-[9px] sm:text-[10px] md:text-[12px] text-muted-foreground">Tecnología: {project.tech}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
