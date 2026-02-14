import { Files, GitBranch, Code2, Pencil, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserPopover } from "../UserPopover";
import { SettingsPopover } from "../SettingsPopover";

const topIcons = [
  { id: "explorer", icon: Files, path: "/" },
  { id: "git", icon: GitBranch, path: "/github" },
  { id: "code", icon: Code2, path: "/projects" },
  { id: "pencil", icon: Pencil, path: "/articles" },
  { id: "mail", icon: Mail, path: "/contact" },
];

interface ActivityBarProps {
  activePage: string;
}

export function ActivityBar({ activePage }: ActivityBarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col items-center bg-vscode-activitybar w-12 h-full border-r border-border shrink-0">
      {topIcons.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
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
      <div className="mt-auto flex flex-col items-center gap-2">
        <div className="border-t border-border w-6 mb-4"></div>
        <UserPopover />
        <SettingsPopover />
      </div>
    </div>
  );
}
