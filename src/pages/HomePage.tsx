import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full">
      {/* Code side */}
      <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Big decorative braces */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[280px] font-mono text-border/30 leading-none select-none pointer-events-none">
          {"{"}
        </div>
        
        <div className="relative z-10 font-mono text-[13px] leading-[22px] bg-card/60 rounded-lg p-6 backdrop-blur-sm border border-border max-w-lg w-full">
          <div className="flex">
            <div className="flex flex-col items-end pr-6 text-vscode-line-number select-none">
              {Array.from({ length: 25 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div>
              <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">HomePage</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-punctuation">() =&gt; {"{"}</span>
              <br />
              <span className="pl-4 text-syntax-keyword">const</span> <span className="text-syntax-punctuation">[</span><span className="text-syntax-variable">isLoaded</span><span className="text-syntax-punctuation">,</span> <span className="text-syntax-variable">setIsLoaded</span><span className="text-syntax-punctuation">]</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-function">useState</span><span className="text-syntax-punctuation">(</span><span className="text-syntax-keyword">true</span><span className="text-syntax-punctuation">);</span>
              <br />
              <span className="pl-4 text-syntax-keyword">const</span> <span className="text-syntax-variable font-bold">developerInfo</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-punctuation">{"{"}</span>
              <br />
              <span className="pl-8 text-syntax-property">name</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">'Tu Nombre'</span><span className="text-syntax-punctuation">,</span>
              <br />
              <span className="pl-8 text-syntax-property">role</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">'Full Stack Developer'</span><span className="text-syntax-punctuation">,</span>
              <br />
              <span className="pl-8 text-syntax-property">bio</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">'Building modern web experiences'</span>
              <br />
              <span className="pl-4 text-syntax-punctuation">{"}"};</span>
              <br /><br />
              <span className="pl-4 text-syntax-function">useEffect</span><span className="text-syntax-punctuation">(() =&gt; {"{"}</span>
              <br />
              <span className="pl-8 text-syntax-variable">document</span><span className="text-syntax-punctuation">.</span><span className="text-syntax-property">title</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-string">{"`${developerInfo.name} | Portfolio`"}</span><span className="text-syntax-punctuation">;</span>
              <br />
              <span className="pl-8 text-syntax-function">setIsLoaded</span><span className="text-syntax-punctuation">(</span><span className="text-syntax-keyword">true</span><span className="text-syntax-punctuation">);</span>
              <br />
              <span className="pl-4 text-syntax-punctuation">{"}"}, []);</span>
              <br /><br />
              <span className="pl-4 text-syntax-keyword">return</span> <span className="text-syntax-punctuation">(</span>
              <br />
              <span className="pl-8 text-syntax-punctuation">&lt;</span><span className="text-syntax-tag">main</span> <span className="text-syntax-property">className</span><span className="text-syntax-keyword">=</span><span className="text-syntax-string">"hero-container"</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-12 text-syntax-punctuation">&lt;</span><span className="text-syntax-tag">h1</span><span className="text-syntax-punctuation">&gt;</span><span className="text-syntax-punctuation">{"{"}</span><span className="text-syntax-variable">developerInfo</span><span className="text-syntax-punctuation">.</span><span className="text-syntax-property">name</span><span className="text-syntax-punctuation">{"}"}</span><span className="text-syntax-punctuation">&lt;/</span><span className="text-syntax-tag">h1</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-12 text-syntax-punctuation">&lt;</span><span className="text-syntax-tag">p</span><span className="text-syntax-punctuation">&gt;</span><span className="text-syntax-punctuation">{"{"}</span><span className="text-syntax-variable">developerInfo</span><span className="text-syntax-punctuation">.</span><span className="text-syntax-property">role</span><span className="text-syntax-punctuation">{"}"}</span><span className="text-syntax-punctuation">&lt;/</span><span className="text-syntax-tag">p</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-12 text-syntax-punctuation">&lt;</span><span className="text-syntax-tag">div</span> <span className="text-syntax-property">className</span><span className="text-syntax-keyword">=</span><span className="text-syntax-string">"cta"</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-16 text-syntax-punctuation">&lt;</span><span className="text-syntax-component">Link</span> <span className="text-syntax-property">href</span><span className="text-syntax-keyword">=</span><span className="text-syntax-string">"/projects"</span><span className="text-syntax-punctuation">&gt;</span><span className="text-syntax-variable">View Projects</span><span className="text-syntax-punctuation">&lt;/</span><span className="text-syntax-component">Link</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-12 text-syntax-punctuation">&lt;/</span><span className="text-syntax-tag">div</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-8 text-syntax-punctuation">&lt;/</span><span className="text-syntax-tag">main</span><span className="text-syntax-punctuation">&gt;</span>
              <br />
              <span className="pl-4 text-syntax-punctuation">);</span>
              <br />
              <span className="text-syntax-punctuation">{"}"};</span>
              <br /><br />
              <span className="text-syntax-keyword">export default</span> <span className="text-syntax-variable">HomePage</span><span className="text-syntax-punctuation">;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero side */}
      <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Big decorative braces */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[280px] font-mono text-border/20 leading-none select-none pointer-events-none">
          {"}"}
        </div>
        
        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-sans font-bold text-foreground mb-1 leading-tight">
            Tu Nombre
          </h1>
          <h1 className="text-5xl font-sans font-bold text-primary mb-4 leading-tight">
            Apellido
          </h1>
          <p className="text-xl font-sans text-foreground mb-6">
            Full Stack Web Developer
          </p>
          <p className="text-base font-sans text-muted-foreground mb-8 leading-relaxed">
            I build elegant, responsive web applications with modern technologies. Focused on clean code and intuitive user experiences.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-sans font-medium rounded hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
