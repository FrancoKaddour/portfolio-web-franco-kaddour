interface TitleBarProps {
  fileName?: string;
}

export function TitleBar({ fileName }: TitleBarProps) {
  return (
    <div className="flex items-center justify-between h-[30px] bg-vscode-titlebar text-muted-foreground text-[13px] select-none border-b border-border font-sans">
      <div className="flex items-center gap-3 pl-3">
        <div className="flex gap-2">
          <span className="hover:text-foreground cursor-default">Archivo</span>
          <span className="hover:text-foreground cursor-default">Editar</span>
          <span className="hover:text-foreground cursor-default">Ver</span>
          <span className="hover:text-foreground cursor-default">Terminal</span>
          <span className="hover:text-foreground cursor-default">Ayuda</span>
        </div>
      </div>
      <div className="text-center flex-1">
        <span>{fileName ? `${fileName} - ` : ""}mi-portfolio - Visual Studio Code</span>
      </div>
      <div className="flex items-center pr-2 gap-0">
        <button className="px-3 py-1 hover:bg-secondary/50 transition-colors">─</button>
        <button className="px-3 py-1 hover:bg-secondary/50 transition-colors">□</button>
        <button className="px-3 py-1 hover:bg-destructive/80 hover:text-destructive-foreground transition-colors">✕</button>
      </div>
    </div>
  );
}
