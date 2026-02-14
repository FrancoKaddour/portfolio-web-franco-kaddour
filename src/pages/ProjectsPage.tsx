import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Project {
  icon: string;
  name: string;
  description: string;
  url?: string;
}

const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      icon: "🍷",
      name: t('projects.espacioVina.name'),
      description: t('projects.espacioVina.description'),
      url: "#",
    },
    {
      icon: "🎵",
      name: t('projects.migaClub.name'),
      description: t('projects.migaClub.description'),
      url: "#",
    },
    {
      icon: "🎸",
      name: t('projects.laBasica.name'),
      description: t('projects.laBasica.description'),
      url: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-sans font-bold text-primary mb-3">
        {t('projects.title')}
      </h1>
      <p className="font-mono text-[14px] text-foreground mb-10 max-w-2xl">
        {t('projects.description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-6 hover:border-muted-foreground/30 transition-colors"
          >
            <div className="text-3xl mb-4">{project.icon}</div>
            <h3 className="text-lg font-sans font-bold text-primary mb-2 group-hover:underline">
              {project.name}
            </h3>
            <p className="text-[13px] font-mono text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
