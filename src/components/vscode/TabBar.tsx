import { useNavigate, useLocation } from "react-router-dom";
import { files } from "./FileExplorer";

export function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex bg-vscode-tab-border h-[35px] overflow-x-auto shrink-0">
      {files.map((file) => {
        const isActive = location.pathname === file.path;
        return (
          <button
            key={file.name}
            onClick={() => navigate(file.path)}
            className={`flex items-center gap-1.5 px-3 h-full text-[13px] border-r border-border shrink-0 transition-colors ${
              isActive
                ? "bg-vscode-tab-active text-foreground border-t-2 border-t-primary"
                : "bg-vscode-tab-inactive text-muted-foreground hover:text-foreground border-t-2 border-t-transparent"
            }`}
          >
            <img src={file.icon} alt="" className="w-4 h-4 shrink-0" />
            <span className="font-mono">{file.name}</span>
          </button>
        );
      })}
    </div>
  );
}
