import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
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
  const { theme, setTheme } = useTheme();
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen && firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeMobile]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <nav
      aria-label="Navegación principal"
      className="w-full border-b border-border bg-background sticky top-0 z-50"
    >
      <div className="max-w-[780px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-[13px] sm:text-[14px] font-bold tracking-[0.15em] uppercase text-foreground no-underline hover:opacity-55 transition-opacity"
        >
          Franco Kaddour
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`text-[12px] tracking-[0.12em] uppercase no-underline transition-opacity min-h-[44px] flex items-center ${
                location.pathname === link.path
                  ? "text-foreground font-bold"
                  : "text-foreground/50 hover:text-foreground hover:opacity-100"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="text-foreground/40 hover:text-foreground transition-opacity min-h-[44px] min-w-[32px] flex items-center justify-center"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="lg:hidden text-foreground p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`text-[13px] tracking-[0.12em] uppercase no-underline py-3 min-h-[44px] flex items-center transition-opacity ${
                location.pathname === link.path
                  ? "text-foreground font-bold"
                  : "text-foreground/50"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="pt-2 border-t border-border flex items-center justify-between">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="text-foreground/40 hover:text-foreground transition-opacity min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
