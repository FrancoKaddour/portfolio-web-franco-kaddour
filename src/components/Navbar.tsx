import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
  { path: "/about", key: "nav.about" },
  { path: "/projects", key: "nav.projects" },
  { path: "/contact", key: "nav.contact" },
];

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav aria-label="Navegación principal" className="w-full border-b border-black/12 bg-white sticky top-0 z-50">
      <div className="max-w-[780px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-[13px] sm:text-[14px] font-bold tracking-[0.15em] uppercase text-foreground no-underline hover:opacity-55 transition-opacity"
        >
          Franco Kaddour
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`text-[12px] tracking-[0.12em] uppercase no-underline transition-opacity ${
                location.pathname === link.path
                  ? "text-foreground font-bold"
                  : "text-foreground/50 hover:text-foreground hover:opacity-100"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-foreground p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-black/10 bg-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`text-[13px] tracking-[0.12em] uppercase no-underline py-2 transition-opacity ${
                location.pathname === link.path
                  ? "text-foreground font-bold"
                  : "text-foreground/50"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="pt-2 border-t border-black/10">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
