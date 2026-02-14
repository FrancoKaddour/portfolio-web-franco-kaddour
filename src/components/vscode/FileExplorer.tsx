import { useState } from "react";
import { FileJson, User, Briefcase, Globe, Code2, Mail, ChevronDown, ChevronRight, FileText } from "lucide-react";

export interface FileItem {
  name: string;
  icon?: React.ReactNode;
  id: string;
  language?: string;
}

export interface FolderItem {
  name: string;
  files: FileItem[];
  defaultOpen?: boolean;
}

interface FileExplorerProps {
  folders: FolderItem[];
  activeFileId: string | null;
  onFileSelect: (fileId: string) => void;
}

const fileIconMap: Record<string, React.ReactNode> = {
  ".tsx": <FileJson className="w-4 h-4 text-syntax-keyword" />,
  ".ts": <FileJson className="w-4 h-4 text-syntax-function" />,
  ".json": <FileJson className="w-4 h-4 text-syntax-string" />,
  ".md": <FileText className="w-4 h-4 text-syntax-property" />,
  ".css": <FileText className="w-4 h-4 text-syntax-variable" />,
};

function getFileIcon(fileName: string) {
  const ext = Object.keys(fileIconMap).find((e) => fileName.endsWith(e));
  return ext ? fileIconMap[ext] : <FileText className="w-4 h-4 text-foreground" />;
}

const folderIconMap: Record<string, string> = {
  "sobre-mi": "📁",
  "experiencia": "💼",
  "proyectos": "🌐",
  "habilidades": "⚡",
  "contacto": "📧",
};

export function FileExplorer({ folders, activeFileId, onFileSelect }: FileExplorerProps) {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    folders.forEach((f) => {
      initial[f.name] = f.defaultOpen ?? true;
    });
    return initial;
  });

  const toggleFolder = (name: string) => {
    setOpenFolders((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="w-full h-full bg-vscode-sidebar text-sidebar-foreground select-none">
      <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-sans font-semibold">
        Explorador
      </div>
      <div className="px-2">
        <div className="flex items-center gap-1 px-2 py-1 text-[11px] uppercase tracking-wider text-muted-foreground font-sans font-semibold">
          <ChevronDown className="w-3 h-3" />
          mi-portfolio
        </div>
        {folders.map((folder) => (
          <div key={folder.name}>
            <button
              onClick={() => toggleFolder(folder.name)}
              className="flex items-center gap-1 w-full px-4 py-[2px] text-sm hover:bg-vscode-selection/50 transition-colors"
            >
              {openFolders[folder.name] ? (
                <ChevronDown className="w-3 h-3 shrink-0" />
              ) : (
                <ChevronRight className="w-3 h-3 shrink-0" />
              )}
              <span className="mr-1">{folderIconMap[folder.name] || "📁"}</span>
              <span className="text-sidebar-foreground">{folder.name}</span>
            </button>
            {openFolders[folder.name] && (
              <div>
                {folder.files.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => onFileSelect(file.id)}
                    className={`flex items-center gap-2 w-full pl-10 pr-4 py-[2px] text-sm transition-colors ${
                      activeFileId === file.id
                        ? "bg-vscode-selection text-foreground"
                        : "hover:bg-vscode-selection/50 text-sidebar-foreground"
                    }`}
                  >
                    {file.icon || getFileIcon(file.name)}
                    <span className="truncate">{file.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
