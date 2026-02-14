import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Code side */}
      <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-4 p-4 md:p-8 relative overflow-hidden">
        {/* Big decorative braces */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 text-[280px] font-mono text-border/30 leading-none select-none pointer-events-none">
          {"{"}
        </div>
        
        <div className="relative z-10 font-mono text-[10px] sm:text-[11px] md:text-[13px] leading-[16px] sm:leading-[18px] md:leading-[22px] bg-card/60 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm border border-border max-w-sm lg:max-w-md w-full">
          <div className="flex">
            <div className="flex flex-col items-end pr-6 text-vscode-line-number select-none">
              {Array.from({ length: 13 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div>
              <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">developer</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-punctuation">{"{"}</span>
              <br />
              <span className="pl-4 text-syntax-property">name</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">{`'${t('home.firstName')} ${t('home.lastName')}'`}</span><span className="text-syntax-punctuation">,</span>
              <br />
              <span className="pl-4 text-syntax-property">role</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">{`'${t('home.role')}'`}</span><span className="text-syntax-punctuation">,</span>
              <br />
              <span className="pl-4 text-syntax-property">bio</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">{`'${t('home.description')}'`}</span>
              <br />
              <span className="text-syntax-punctuation">{"}"};</span>
              <br /><br />
              <span className="text-syntax-keyword">return</span> <span className="text-syntax-punctuation">&lt;</span><span className="text-syntax-tag">Hero</span>
              <br />
              <span className="pl-4 text-syntax-property">title</span><span className="text-syntax-keyword">=</span><span className="text-syntax-punctuation">{"{"}</span><span className="text-syntax-variable">developer</span><span className="text-syntax-punctuation">.</span><span className="text-syntax-property">name</span><span className="text-syntax-punctuation">{"}"}</span>
              <br />
              <span className="pl-4 text-syntax-property">subtitle</span><span className="text-syntax-keyword">=</span><span className="text-syntax-punctuation">{"{"}</span><span className="text-syntax-variable">developer</span><span className="text-syntax-punctuation">.</span><span className="text-syntax-property">role</span><span className="text-syntax-punctuation">{"}"}</span>
              <br />
              <span className="pl-4 text-syntax-property">bio</span><span className="text-syntax-keyword">=</span><span className="text-syntax-punctuation">{"{"}</span><span className="text-syntax-variable">developer</span><span className="text-syntax-punctuation">.</span><span className="text-syntax-property">bio</span><span className="text-syntax-punctuation">{"}"}</span>
              <br />
              <span className="text-syntax-punctuation">/&gt;;</span>
              <br /><br />
              <span className="text-syntax-keyword">export default</span> <span className="text-syntax-variable">HomePage</span><span className="text-syntax-punctuation">;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero side */}
      <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-4 p-4 md:p-8 relative overflow-hidden">
        {/* Big decorative braces */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-[280px] font-mono text-border/20 leading-none select-none pointer-events-none">
          {"}"}
        </div>
        
        <div className="relative z-10 max-w-xs lg:max-w-sm text-center lg:text-left px-4 sm:px-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-sans font-bold text-foreground mb-1 leading-tight">
            {t('home.firstName')}
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-sans font-bold text-primary mb-3 leading-tight">
            {t('home.lastName')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-sans text-foreground mb-4">
            {t('home.role')}
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm font-sans text-muted-foreground mb-6 leading-relaxed">
            {t('home.description')}
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground font-sans font-medium text-sm sm:text-base rounded hover:opacity-90 transition-opacity"
          >
            {t('buttons.viewProjects')} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
