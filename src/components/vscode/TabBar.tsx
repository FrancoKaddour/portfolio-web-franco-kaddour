import { X, FileJson, FileText } from "lucide-react";

export interface Tab {
  id: string;
  name: string;
  language?: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string | null;
  onTabSelect: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

const fileIconMap: Record<string, React.ReactNode> = {
  ".tsx": <FileJson className="w-3.5 h-3.5 text-syntax-keyword" />,
  ".ts": <FileJson className="w-3.5 h-3.5 text-syntax-function" />,
  ".json": <FileJson className="w-3.5 h-3.5 text-syntax-string" />,
  ".md": <FileText className="w-3.5 h-3.5 text-syntax-property" />,
  ".css": <FileText className="w-3.5 h-3.5 text-syntax-variable" />,
};

function getFileIcon(fileName: string) {
  const ext = Object.keys(fileIconMap).find((e) => fileName.endsWith(e));
  return ext ? fileIconMap[ext] : <FileText className="w-3.5 h-3.5" />;
}

export function TabBar({ tabs, activeTabId, onTabSelect, onTabClose }: TabBarProps) {
  if (tabs.length === 0) return null;

  return (
    <div className="flex bg-vscode-tab-border h-[35px] overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => onTabSelect(tab.id)}
          className={`flex items-center gap-1.5 px-3 h-full cursor-pointer text-[13px] border-r border-border group min-w-0 shrink-0 ${
            activeTabId === tab.id
              ? "bg-vscode-tab-active text-foreground border-t-[1px] border-t-primary"
              : "bg-vscode-tab-inactive text-muted-foreground hover:bg-vscode-tab-active/50"
          }`}
        >
          {getFileIcon(tab.name)}
          <span className="truncate">{tab.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab.id);
            }}
            className="ml-1 p-0.5 opacity-0 group-hover:opacity-100 hover:bg-secondary rounded-sm transition-opacity"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
}
