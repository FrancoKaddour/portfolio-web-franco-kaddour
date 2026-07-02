import { describe, it, expect } from "vitest";
import { Navbar } from "@/components/layout/Navbar";
import { renderWithProviders, screen, fireEvent } from "./utils";

describe("Navbar", () => {
  beforeEach(() => {
    renderWithProviders(<Navbar />);
  });

  it("renders the site logo linking to /", () => {
    const logo = screen.getByRole("link", { name: /ir a la página de inicio/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("has correct aria-label on nav element", () => {
    expect(
      screen.getByRole("navigation", { name: /navegación principal/i })
    ).toBeInTheDocument();
  });

  it("renders desktop nav links", () => {
    // Links appear twice (desktop + mobile hidden), getAll handles that
    const aboutLinks = screen.getAllByRole("link", { name: /nav\.about/i });
    const projectsLinks = screen.getAllByRole("link", { name: /nav\.projects/i });
    const contactLinks = screen.getAllByRole("link", { name: /nav\.contact/i });

    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
    expect(projectsLinks.length).toBeGreaterThanOrEqual(1);
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("nav links point to correct routes", () => {
    const aboutLinks = screen.getAllByRole("link", { name: /nav\.about/i });
    expect(aboutLinks[0]).toHaveAttribute("href", "/about");
  });

  it("renders mobile menu toggle button with correct aria-label", () => {
    const toggleBtn = screen.getByRole("button", { name: /abrir menú/i });
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveAttribute("aria-expanded", "false");
  });

  it("opens mobile menu when toggle is clicked", () => {
    const toggleBtn = screen.getByRole("button", { name: /abrir menú/i });
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: /cerrar menú/i })).toBeInTheDocument();
  });

  it("closes mobile menu when Escape is pressed", () => {
    const toggleBtn = screen.getByRole("button", { name: /abrir menú/i });
    fireEvent.click(toggleBtn);
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: /abrir menú/i })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("renders theme toggle button with aria-label", () => {
    const themeBtn = screen.getAllByRole("button", { name: /modo/i });
    expect(themeBtn.length).toBeGreaterThanOrEqual(1);
  });
});
