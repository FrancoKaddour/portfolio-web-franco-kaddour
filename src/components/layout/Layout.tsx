import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-black text-white font-mono text-sm px-4 py-2"
      >
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
