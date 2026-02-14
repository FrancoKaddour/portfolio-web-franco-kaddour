import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Code side */}
      <div className="flex-1 flex items-center justify-center lg:justify-end p-4 md:p-8 lg:pr-4 relative overflow-hidden">
        {/* Big decorative braces */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 text-[280px] font-mono text-border/30 leading-none select-none pointer-events-none">
          {"{"}
        </div>
        
        <div className="relative z-10 font-mono text-[10px] sm:text-[11px] md:text-[13px] leading-[16px] sm:leading-[18px] md:leading-[22px] bg-card/60 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm border border-border max-w-lg w-full lg:ml-40">
          <div className="flex">
            <div className="flex flex-col items-end pr-6 text-vscode-line-number select-none">
              {Array.from({ length: 11 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div>
              <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">ContactPage</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-punctuation">() =&gt; {"{"}</span>
              <br />
              <span className="pl-4 text-syntax-keyword">const</span> <span className="text-syntax-variable font-bold">socials</span> <span className="text-syntax-keyword">=</span> <span className="text-syntax-punctuation">{"{"}</span>
              <br />
              <span className="pl-8 text-syntax-property">email</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">'francokaddour@gmail.com'</span><span className="text-syntax-punctuation">,</span>
              <br />
              <span className="pl-8 text-syntax-property">github</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">'github.com/FrancoKaddour'</span><span className="text-syntax-punctuation">,</span>
              <br />
              <span className="pl-8 text-syntax-property">linkedin</span><span className="text-syntax-punctuation">:</span> <span className="text-syntax-string">'linkedin.com/in/francokaddour'</span>
              <br />
              <span className="pl-4 text-syntax-punctuation">{"}"};</span>
              <br /><br />
              <span className="pl-4 text-syntax-keyword">return</span> <span className="text-syntax-punctuation">&lt;</span><span className="text-syntax-tag">ContactForm</span> <span className="text-syntax-property">data</span><span className="text-syntax-keyword">=</span><span className="text-syntax-punctuation">{"{"}</span><span className="text-syntax-variable">socials</span><span className="text-syntax-punctuation">{"}"}</span> <span className="text-syntax-punctuation">/&gt;;</span>
              <br />
              <span className="text-syntax-punctuation">{"}"};</span>
              <br /><br />
              <span className="text-syntax-keyword">export default</span> <span className="text-syntax-variable">ContactPage</span><span className="text-syntax-punctuation">;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Socials side */}
      <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-32 p-4 md:p-8 relative overflow-hidden">
        {/* Big decorative braces */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-[280px] font-mono text-border/20 leading-none select-none pointer-events-none">
          {"}"}
        </div>
        
        <div className="relative z-10 max-w-xs lg:max-w-sm w-full px-4 sm:px-0">
          <h2 className="text-base sm:text-lg md:text-xl font-sans font-bold text-foreground mb-1.5 sm:mb-2">
            {t('contact.title')}
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm font-sans text-muted-foreground mb-3 sm:mb-4 md:mb-6 leading-relaxed">
            {t('contact.description')}
          </p>

          <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
            {/* Email */}
            <a
              href="mailto:francokaddour@gmail.com"
              className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm md:text-base font-sans font-semibold text-foreground mb-0.5">Email</h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-primary font-mono break-all">francokaddour@gmail.com</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/FrancoKaddour"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm md:text-base font-sans font-semibold text-foreground mb-0.5">GitHub</h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-primary font-mono break-all">github.com/FrancoKaddour</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/francokaddour/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm md:text-base font-sans font-semibold text-foreground mb-0.5">LinkedIn</h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-primary font-mono break-all">linkedin.com/in/francokaddour</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
