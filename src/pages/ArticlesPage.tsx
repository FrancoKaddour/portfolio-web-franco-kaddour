import { Eye, Heart, MessageCircle } from "lucide-react";

interface Article {
  title: string;
  description: string;
  views: number;
  likes: number;
  comments: number;
  url?: string;
  image?: string;
}

const articles: Article[] = [
  {
    title: "Cómo construí mi portfolio estilo VS Code",
    description: "La idea, la inspiración y el proceso de crear este portfolio único que imita Visual Studio Code...",
    views: 4863,
    likes: 171,
    comments: 21,
  },
  {
    title: "5 tips para mejorar tu código React",
    description: "Cuando empiezas a enfocarte en la calidad y rendimiento de tu código junto con las otras features...",
    views: 11516,
    likes: 217,
    comments: 10,
  },
  {
    title: "Guía completa de TypeScript para principiantes",
    description: "TypeScript ha revolucionado la forma en que escribimos JavaScript. En esta guía completa...",
    views: 22124,
    likes: 317,
    comments: 85,
  },
  {
    title: "Construyendo APIs REST con Node.js y Express",
    description: "Obtener tu primer cliente como freelancer es un paso gigante que muchos desarrolladores...",
    views: 1948,
    likes: 89,
    comments: 15,
  },
  {
    title: "Automatización con GitHub Actions",
    description: "Discord es una de las mejores plataformas para desarrolladores para comunicarse y construir...",
    views: 1266,
    likes: 64,
    comments: 8,
  },
  {
    title: "10 Paquetes NPM que todo dev debería conocer",
    description: "Como desarrolladores web, usamos muchos paquetes NPM a diario. Aquí te presento los mejores...",
    views: 10701,
    likes: 203,
    comments: 42,
  },
];

const ArticlesPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-sans font-bold text-primary mb-3">
        My Articles
      </h1>
      <p className="font-mono text-[14px] text-foreground mb-10 max-w-2xl">
        Recent posts from{" "}
        <a href="https://dev.to" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          dev.to
        </a>{" "}
        where I share insights and tutorials about web development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url || "#"}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-muted-foreground/30 transition-colors"
          >
            {/* Placeholder gradient header */}
            <div className="h-40 bg-gradient-to-br from-secondary to-card relative">
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-[11px] text-muted-foreground">
                <Eye className="w-3 h-3" />
                {article.views.toLocaleString()}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl opacity-20 font-mono">{"{...}"}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[14px] font-sans font-bold text-primary mb-2 group-hover:underline leading-snug">
                {article.title}
              </h3>
              <p className="text-[12px] font-mono text-muted-foreground leading-relaxed mb-4">
                {article.description}
              </p>
              <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" />
                  {article.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {article.comments}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
