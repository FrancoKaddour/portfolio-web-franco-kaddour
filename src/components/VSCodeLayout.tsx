import { Outlet } from "react-router-dom";
import { ActivityBar } from "./vscode/ActivityBar";
import { FileExplorer } from "./vscode/FileExplorer";
import { TabBar } from "./vscode/TabBar";
import { TitleBar } from "./vscode/TitleBar";
import { StatusBar } from "./vscode/StatusBar";
import { useLocation } from "react-router-dom";

const pageMap: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/contact": "contact",
  "/projects": "projects",
  "/articles": "articles",
  "/github": "github",
};

export function VSCodeLayout() {
  const location = useLocation();
  const activePage = pageMap[location.pathname] || "home";

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar activePage={activePage} />
        <div className="w-[220px] shrink-0 border-r border-border overflow-y-auto">
          <FileExplorer />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar />
          <div className="flex-1 overflow-auto bg-vscode-editor">
            <Outlet />
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
