import { GitBranch, AlertTriangle, CheckCircle } from "lucide-react";

export function StatusBar() {
  return (
    <div className="flex items-center justify-between h-[22px] bg-vscode-statusbar text-muted-foreground text-[11px] px-3 select-none font-sans shrink-0 border-t border-border">
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
      <div className="flex items-center gap-4">
        <span>Powered by Next.js</span>
        <span>✓ Prettier</span>
      </div>
    </div>
  );
}
