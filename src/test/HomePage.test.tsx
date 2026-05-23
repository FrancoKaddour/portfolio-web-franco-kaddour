import { describe, it, expect } from "vitest";
import HomePage from "@/pages/HomePage";
import { renderWithProviders, screen } from "./utils";

describe("HomePage", () => {
  beforeEach(() => {
    renderWithProviders(<HomePage />);
  });

  it("renders the developer name", () => {
    // t("home.firstName") → "home.firstName", t("home.lastName") → "home.lastName"
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the profile photo with correct alt text", () => {
    const img = screen.getByAltText(/Franco Kaddour/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/img/profile.jpg");
  });

  it("renders the availability badge", () => {
    // The badge contains the i18n key text
    expect(screen.getByText("home.availableLabel")).toBeInTheDocument();
  });

  it("renders the CV download link", () => {
    const cvLink = screen.getByRole("link", { name: /curriculum/i });
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveAttribute("href", "/cv-franco-kaddour.pdf");
    expect(cvLink).toHaveAttribute("download");
  });

  it("renders navigation links to internal pages", () => {
    const aboutLink = screen.getByRole("link", { name: /home\.linkAbout/i });
    const projectsLink = screen.getByRole("link", { name: /home\.linkProjects/i });
    const contactLink = screen.getByRole("link", { name: /home\.linkContact/i });

    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(projectsLink).toHaveAttribute("href", "/projects");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("renders GitHub external link", () => {
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders links to current projects", () => {
    const espacioVina = screen.getByRole("link", { name: /Espacio Vina/i });
    const migaClub = screen.getByRole("link", { name: /Miga Club/i });
    const laBasica = screen.getByRole("link", { name: /La Básica/i });

    expect(espacioVina).toHaveAttribute("target", "_blank");
    expect(migaClub).toHaveAttribute("target", "_blank");
    expect(laBasica).toHaveAttribute("href", "https://labasicapasteleria.com/");
  });

  it("quick nav has correct aria-label", () => {
    expect(screen.getByRole("navigation", { name: /links rápidos/i })).toBeInTheDocument();
  });
});
