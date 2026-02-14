import { useState, useCallback } from "react";
import { ActivityBar } from "./vscode/ActivityBar";
import { FileExplorer, FolderItem } from "./vscode/FileExplorer";
import { TabBar, Tab } from "./vscode/TabBar";
import { TitleBar } from "./vscode/TitleBar";
import { StatusBar } from "./vscode/StatusBar";
import { SobreMiContent } from "./content/SobreMiContent";
import { ExperienciaContent } from "./content/ExperienciaContent";
import { ProyectosContent } from "./content/ProyectosContent";
import { HabilidadesContent } from "./content/HabilidadesContent";
import { ContactoContent } from "./content/ContactoContent";
import { BienvenidaContent } from "./content/BienvenidaContent";

const folders: FolderItem[] = [
  {
    name: "sobre-mi",
    defaultOpen: false,
    files: [
      { id: "perfil", name: "perfil.tsx", language: "typescriptreact" },
    ],
  },
  {
    name: "experiencia",
    defaultOpen: false,
    files: [
      { id: "trayectoria", name: "trayectoria.ts", language: "typescript" },
    ],
  },
  {
    name: "proyectos",
    defaultOpen: false,
    files: [
      { id: "mis-proyectos", name: "mis-proyectos.tsx", language: "typescriptreact" },
    ],
  },
  {
    name: "habilidades",
    defaultOpen: false,
    files: [
      { id: "skills", name: "skills.json", language: "json" },
    ],
  },
  {
    name: "contacto",
    defaultOpen: false,
    files: [
      { id: "conectemos", name: "conectemos.ts", language: "typescript" },
    ],
  },
];

const fileNameMap: Record<string, string> = {
  perfil: "perfil.tsx",
  trayectoria: "trayectoria.ts",
  "mis-proyectos": "mis-proyectos.tsx",
  skills: "skills.json",
  conectemos: "conectemos.ts",
  bienvenida: "bienvenida.md",
};

const contentMap: Record<string, React.ReactNode> = {
  perfil: <SobreMiContent />,
  trayectoria: <ExperienciaContent />,
  "mis-proyectos": <ProyectosContent />,
  skills: <HabilidadesContent />,
  conectemos: <ContactoContent />,
  bienvenida: <BienvenidaContent />,
};

export function VSCodeLayout() {
  const [activePanel, setActivePanel] = useState("explorer");
  const [activeFileId, setActiveFileId] = useState<string>("bienvenida");
  const [openTabs, setOpenTabs] = useState<Tab[]>([
    { id: "bienvenida", name: "bienvenida.md" },
  ]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleFileSelect = useCallback((fileId: string) => {
    setActiveFileId(fileId);
    setOpenTabs((prev) => {
      if (prev.find((t) => t.id === fileId)) return prev;
      return [...prev, { id: fileId, name: fileNameMap[fileId] || fileId }];
    });
  }, []);

  const handleTabClose = useCallback((tabId: string) => {
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t.id !== tabId);
      if (tabId === activeFileId && next.length > 0) {
        setActiveFileId(next[next.length - 1].id);
      } else if (next.length === 0) {
        setActiveFileId("bienvenida");
        return [{ id: "bienvenida", name: "bienvenida.md" }];
      }
      return next;
    });
  }, [activeFileId]);

  const handlePanelChange = useCallback((panel: string) => {
    if (panel === activePanel) {
      setSidebarVisible((v) => !v);
    } else {
      setActivePanel(panel);
      setSidebarVisible(true);
    }
  }, [activePanel]);

  const activeFileName = fileNameMap[activeFileId] || "";

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <TitleBar fileName={activeFileName} />
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar activePanel={activePanel} onPanelChange={handlePanelChange} />
        {sidebarVisible && (
          <div className="w-60 shrink-0 border-r border-border overflow-y-auto">
            <FileExplorer
              folders={folders}
              activeFileId={activeFileId}
              onFileSelect={handleFileSelect}
            />
          </div>
        )}
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar
            tabs={openTabs}
            activeTabId={activeFileId}
            onTabSelect={setActiveFileId}
            onTabClose={handleTabClose}
          />
          <div className="flex-1 overflow-auto">
            {contentMap[activeFileId] || <BienvenidaContent />}
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
