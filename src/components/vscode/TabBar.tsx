import { useNavigate, useLocation } from "react-router-dom";
import { files } from "./FileExplorer";

export function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-wrap bg-vscode-tab-border min-h-[35px] shrink-0">
      {files.map((file) => {
        const isActive = location.pathname === file.path;
        return (
          <button
            key={file.name}
            onClick={() => navigate(file.path)}
            className={`flex items-center gap-1.5 px-2 md:px-3 h-[35px] text-[11px] md:text-[13px] border-r border-border shrink-0 transition-colors ${
              isActive
                ? "bg-vscode-tab-active text-foreground border-t-2 border-t-primary"
                : "bg-vscode-tab-inactive text-muted-foreground hover:text-foreground border-t-2 border-t-transparent"
            }`}
          >
            <img src={file.icon} alt="" className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
            <span className="font-mono whitespace-nowrap">{file.name}</span>
          </button>
        );
      })}
    </div>
  );
}
