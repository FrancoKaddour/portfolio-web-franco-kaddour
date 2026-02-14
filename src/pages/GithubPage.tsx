import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const GITHUB_USER = "francokaddour";

interface RepoItem {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count?: number;
  forks_count?: number;
  html_url?: string;
  updated_at?: string;
}

const GithubPage = () => {
  const [repos, setRepos] = useState<RepoItem[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error("GitHub API error");
        const data = (await res.json()) as RepoItem[];

        // Repos que el usuario indicó (asegurar que aparezcan)
        const mustInclude = [
          {
            name: "la-basica-pasteleria",
            url: `https://github.com/${GITHUB_USER}/la-basica-pasteleria`,
            description: "La Básica (React + TS)",
            language: "TypeScript",
          },
          {
            name: "miga-club",
            url: `https://github.com/${GITHUB_USER}/miga-club`,
            description: "Miga Club - Landing + dashboard",
            language: "HTML/CSS/JS",
          },
          {
            name: "rifas-y-sorteos",
            url: `https://github.com/${GITHUB_USER}/rifas-y-sorteos`,
            description: "Rifas y Sorteos",
            language: "JavaScript",
          },
        ];

        // Normalizar y extraer matches
        const lowerMap = new Map<string, RepoItem>();
        for (const r of data) {
          lowerMap.set(r.name.toLowerCase(), r);
        }

        const included: RepoItem[] = [];
        for (const m of mustInclude) {
          const found = lowerMap.get(m.name.toLowerCase());
          if (found) included.push(found);
          else
            included.push({
              name: m.name,
              description: m.description,
              language: m.language,
              html_url: m.url,
              stargazers_count: 0,
              forks_count: 0,
            });
        }

        // Restantes (excluir duplicados)
        const rest = data.filter((r) => !mustInclude.some((m) => m.name.toLowerCase() === r.name.toLowerCase()));
        rest.sort((a, b) => (b.updated_at ?? "").localeCompare(a.updated_at ?? ""));

        setRepos([...included, ...rest]);
      } catch (e) {
        console.error(e);
      }
    };

    fetchRepos();
  }, []);

  // Fallback estático si la API no encuentra nada
  const fallback = [
    { name: "espacio-vina", description: "Espacio Vina - sitio en PHP", language: "PHP", html_url: `https://github.com/${GITHUB_USER}/espacio-vina`, stargazers_count: 0, forks_count: 0 },
    { name: "miga-club", description: "Miga Club - HTML/CSS/JS", language: "HTML/CSS/JS", html_url: `https://github.com/${GITHUB_USER}/miga-club`, stargazers_count: 0, forks_count: 0 },
    { name: "la-basica-pasteleria", description: "La Básica (React + TS)", language: "TypeScript", html_url: `https://github.com/${GITHUB_USER}/la-basica-pasteleria`, stargazers_count: 0, forks_count: 0 },
    { name: "portfolio-web", description: "Portfolio Web", language: "TypeScript", html_url: `https://github.com/${GITHUB_USER}/portfolio-web`, stargazers_count: 0, forks_count: 0 },
  ];

  const display = repos.length > 0 ? repos : fallback;

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6 md:py-12">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-sans font-bold text-primary mb-2 sm:mb-3">GitHub</h1>
      <p className="font-mono text-[10px] sm:text-[12px] md:text-[14px] text-foreground mb-4 sm:mb-6 md:mb-10 max-w-2xl">
        Repositorios públicos de @{GITHUB_USER}. Los proyectos destacados aparecen primero.
      </p>

      <div className="space-y-4">
        {display.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url ?? `https://github.com/${GITHUB_USER}/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between bg-card border border-border rounded-lg p-5 hover:border-muted-foreground/30 transition-colors"
          >
            <div>
              <h3 className="text-[15px] font-sans font-bold text-primary group-hover:underline mb-1">
                {repo.name}
              </h3>
              <p className="text-[13px] font-mono text-muted-foreground mb-3">
                {repo.description ?? "Sin descripción"}
              </p>
              <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full inline-block bg-slate-400" />
                  {repo.language ?? "—"}
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
