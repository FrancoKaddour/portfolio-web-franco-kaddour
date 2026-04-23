import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-[780px] mx-auto flex flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/FrancoKaddour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-opacity"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/francokaddour/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-[11px] text-foreground/30 tracking-[0.1em]">
          © {new Date().getFullYear()} Franco Kaddour
        </p>
      </div>
    </footer>
  );
}
