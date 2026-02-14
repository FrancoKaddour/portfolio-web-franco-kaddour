import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface FileItem {
  name: string;
  icon: string;
  path: string;
}

const files: FileItem[] = [
  { name: "home.tsx", icon: "/logos/react_icon.svg", path: "/" },
  { name: "about.html", icon: "/logos/html_icon.svg", path: "/about" },
  { name: "contact.css", icon: "/logos/css_icon.svg", path: "/contact" },
  { name: "projects.js", icon: "/logos/js_icon.svg", path: "/projects" },
  { name: "articles.json", icon: "/logos/json_icon.svg", path: "/articles" },
  { name: "github.md", icon: "/logos/markdown_icon.svg", path: "/github" },
];

export { files };

export function FileExplorer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full h-full bg-vscode-sidebar text-sidebar-foreground select-none overflow-y-auto">
      <div className="px-5 py-3 text-[11px] uppercase tracking-widest text-muted-foreground font-sans font-semibold">
        Explorer
      </div>
      <div className="px-2">
        <div className="flex items-center gap-1 px-2 py-1.5 text-[11px] uppercase tracking-wider text-sidebar-foreground font-sans font-bold">
          <ChevronDown className="w-3 h-3" />
          Portfolio
        </div>
        <div className="mt-1">
          {files.map((file) => {
            const isActive = location.pathname === file.path;
            return (
              <button
                key={file.name}
                onClick={() => navigate(file.path)}
                className={`flex items-center gap-2 w-full pl-6 pr-4 py-[3px] text-[13px] transition-colors ${
                  isActive
                    ? "bg-vscode-selection text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-vscode-selection/40"
                }`}
              >
                <img src={file.icon} alt="" className="w-4 h-4 shrink-0" />
                <span>{file.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
