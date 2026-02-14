import { GitBranch, Bell, CheckCircle, AlertTriangle, Info, Wifi } from "lucide-react";

export function StatusBar() {
  return (
    <div className="flex items-center justify-between h-[22px] bg-vscode-statusbar text-primary-foreground text-[12px] px-2 select-none font-sans">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3" />
          <span>0</span>
          <AlertTriangle className="w-3 h-3 ml-1" />
          <span>0</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span>UTF-8</span>
        <span>TypeScript React</span>
        <span>Prettier</span>
        <div className="flex items-center gap-1">
          <Wifi className="w-3 h-3" />
          <span>Conectado</span>
        </div>
      </div>
    </div>
  );
}
