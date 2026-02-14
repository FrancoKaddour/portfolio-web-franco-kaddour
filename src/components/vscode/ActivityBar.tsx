import { Files, Search, GitBranch, Bug, Blocks, User } from "lucide-react";

interface ActivityBarProps {
  activePanel: string;
  onPanelChange: (panel: string) => void;
}

const activities = [
  { id: "explorer", icon: Files, tooltip: "Explorador" },
  { id: "search", icon: Search, tooltip: "Buscar" },
  { id: "git", icon: GitBranch, tooltip: "Control de código" },
  { id: "debug", icon: Bug, tooltip: "Debug" },
  { id: "extensions", icon: Blocks, tooltip: "Extensiones" },
];

export function ActivityBar({ activePanel, onPanelChange }: ActivityBarProps) {
  return (
    <div className="flex flex-col items-center bg-vscode-activitybar w-12 h-full border-r border-border">
      {activities.map((item) => (
        <button
          key={item.id}
          onClick={() => onPanelChange(item.id)}
          className={`w-full p-3 flex justify-center transition-colors relative group ${
            activePanel === item.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          title={item.tooltip}
        >
          {activePanel === item.id && (
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-foreground" />
          )}
          <item.icon className="w-6 h-6" />
        </button>
      ))}
      <div className="mt-auto">
        <button
          className="w-full p-3 flex justify-center text-muted-foreground hover:text-foreground transition-colors"
          title="Perfil"
        >
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
