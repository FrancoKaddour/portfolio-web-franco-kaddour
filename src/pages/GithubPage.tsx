import { GitBranch, Star, GitFork, ExternalLink } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

const repos: Repo[] = [
  {
    name: "vscode-portfolio",
    description: "A Visual Studio Code themed developer portfolio",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 245,
    forks: 89,
  },
  {
    name: "react-ecommerce",
    description: "Full-featured e-commerce platform with React",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 128,
    forks: 42,
  },
  {
    name: "node-api-starter",
    description: "Production-ready Node.js API boilerplate",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 87,
    forks: 31,
  },
  {
    name: "dotfiles",
    description: "My personal development environment configuration",
    language: "Shell",
    languageColor: "#89e051",
    stars: 34,
    forks: 12,
  },
];

const GithubPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-sans font-bold text-primary mb-3">
        GitHub
      </h1>
      <p className="font-mono text-[14px] text-foreground mb-10 max-w-2xl">
        My open source projects and contributions. Feel free to explore and star the repos you find useful!
      </p>

      <div className="space-y-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={`https://github.com/tu-usuario/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between bg-card border border-border rounded-lg p-5 hover:border-muted-foreground/30 transition-colors"
          >
            <div>
              <h3 className="text-[15px] font-sans font-bold text-primary group-hover:underline mb-1">
                {repo.name}
              </h3>
              <p className="text-[13px] font-mono text-muted-foreground mb-3">
                {repo.description}
              </p>
              <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GithubPage;
