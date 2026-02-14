export function TitleBar() {
  return (
    <div className="flex items-center justify-between min-h-[30px] bg-vscode-titlebar text-muted-foreground text-[13px] select-none border-b border-border font-sans shrink-0">
      <div className="flex items-center gap-3 pl-3">
        <img src="/logos/vscode_icon.svg" alt="VS Code" className="w-4 h-4" />
        <div className="hidden md:flex gap-3 text-[13px]">
          <span className="hover:text-foreground cursor-default">File</span>
          <span className="hover:text-foreground cursor-default">Edit</span>
          <span className="hover:text-foreground cursor-default">View</span>
          <span className="hover:text-foreground cursor-default">Go</span>
          <span className="hover:text-foreground cursor-default">Run</span>
          <span className="hover:text-foreground cursor-default">Terminal</span>
          <span className="hover:text-foreground cursor-default">Help</span>
        </div>
      </div>
      <div className="text-center flex-1 font-mono text-[11px] md:text-[13px] px-2 py-1 leading-tight">
        Franco Kaddour - Visual Studio Code
      </div>
      <div className="flex items-center pr-3 gap-2">
        <div className="w-3 h-3 rounded-full bg-[hsl(40,90%,55%)]" />
        <div className="w-3 h-3 rounded-full bg-[hsl(120,50%,50%)]" />
      </div>
    </div>
  );
}
