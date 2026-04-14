import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-[780px] mx-auto flex flex-col items-center gap-4 px-6">
        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/FrancoKaddour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/francokaddour/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
