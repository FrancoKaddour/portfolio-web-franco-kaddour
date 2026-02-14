import { Files, GitBranch, Code2, Pencil, Mail, User, Settings } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const topIcons = [
  { id: "explorer", icon: Files, path: "/" },
  { id: "git", icon: GitBranch, path: null },
  { id: "code", icon: Code2, path: null },
  { id: "pencil", icon: Pencil, path: null },
  { id: "mail", icon: Mail, path: "/contact" },
];

const bottomIcons = [
  { id: "user", icon: User },
  { id: "settings", icon: Settings },
];

interface ActivityBarProps {
  activePage: string;
}

export function ActivityBar({ activePage }: ActivityBarProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-vscode-activitybar w-12 h-full border-r border-border shrink-0">
      {topIcons.map((item) => {
        const isActive = item.id === "explorer" || 
          (item.id === "mail" && activePage === "contact");
        return (
          <button
            key={item.id}
            onClick={() => item.path && navigate(item.path)}
            className={`w-full p-3 flex justify-center transition-colors relative ${
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-foreground" />
            )}
            <item.icon className="w-[22px] h-[22px]" strokeWidth={1.5} />
          </button>
        );
      })}
      <div className="mt-auto">
        {bottomIcons.map((item) => (
          <button
            key={item.id}
            className="w-full p-3 flex justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <item.icon className="w-[22px] h-[22px]" strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
}
