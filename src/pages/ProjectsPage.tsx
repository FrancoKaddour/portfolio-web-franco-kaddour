import { ExternalLink } from "lucide-react";

interface Project {
  icon: string;
  name: string;
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    icon: "🚀",
    name: "E-Commerce Platform",
    description: "A full-featured online store with cart, payments, and admin dashboard built with React and Node.js.",
    url: "#",
  },
  {
    icon: "💼",
    name: "VSCode Portfolio",
    description: "A Visual Studio Code themed developer portfolio built with React and Tailwind CSS.",
    url: "#",
  },
  {
    icon: "📊",
    name: "Dashboard App",
    description: "A simple and elegant way to track your metrics and visualize data in real time.",
    url: "#",
  },
  {
    icon: "🤖",
    name: "AI Chat Assistant",
    description: "An intelligent chatbot powered by modern AI APIs with conversation memory and context.",
    url: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-sans font-bold text-primary mb-3">
        My Projects
      </h1>
      <p className="font-mono text-[14px] text-foreground mb-10 max-w-2xl">
        Here's a collection of my recent work. These projects showcase my skills
        in web development, design, and problem-solving.
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
