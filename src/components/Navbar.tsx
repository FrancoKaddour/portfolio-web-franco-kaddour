import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
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

  return (
    <nav className="w-full border-b border-black/12 bg-white sticky top-0 z-50">
      <div className="max-w-[780px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-[13px] sm:text-[14px] font-bold tracking-[0.15em] uppercase text-foreground no-underline"
          style={{ opacity: 1 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Franco Kaddour
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
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
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-[13px] tracking-[0.12em] uppercase no-underline ${
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
