import { describe, it, expect } from "vitest";
import ProjectsPage from "@/pages/ProjectsPage";
import { renderWithProviders, screen, within } from "./utils";

describe("ProjectsPage", () => {
  beforeEach(() => {
    renderWithProviders(<ProjectsPage />);
  });

  it("renders the page heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders all 4 projects", () => {
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(4);
  });

  it("renders La Básica as first project", () => {
    const articles = screen.getAllByRole("article");
    expect(articles[0]).toHaveAttribute("aria-label", "La Básica");
  });

  it("renders Miga Club as second project", () => {
    const articles = screen.getAllByRole("article");
    expect(articles[1]).toHaveAttribute("aria-label", "Miga Club");
  });

  it("renders Espacio Vina as third project", () => {
    const articles = screen.getAllByRole("article");
    expect(articles[2]).toHaveAttribute("aria-label", "Espacio Vina");
  });

  it("renders Featured badge on first two projects only", () => {
    const featuredBadges = screen.getAllByText("Featured");
    expect(featuredBadges).toHaveLength(2);
  });

  it("renders the 'Other' section label for compact projects", () => {
    // i18n mock returns the key string
    expect(screen.getByText("projects.otherLabel")).toBeInTheDocument();
  });

  it("renders tech badges for La Básica", () => {
    // "React" and "TypeScript" appear in multiple cards — scope to La Básica's article
    const laBasicaCard = screen.getByRole("article", { name: "La Básica" });
    expect(within(laBasicaCard).getByText("React")).toBeInTheDocument();
    expect(within(laBasicaCard).getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders GitHub links for all projects", () => {
    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    expect(githubLinks.length).toBeGreaterThanOrEqual(4);
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders Live links only for projects with a websiteUrl", () => {
    // All 4 projects have websiteUrl → 4 Live links
    // aria-label is "Ver ${projectName} en vivo"
    const liveLinks = screen.getAllByRole("link", { name: /en vivo/i });
    expect(liveLinks).toHaveLength(4);
  });

  it("La Básica live link points to labasicapasteleria.com", () => {
    const liveLinks = screen.getAllByRole("link", { name: /en vivo/i });
    const laBasicaLive = liveLinks.find((l) =>
      l.getAttribute("href")?.includes("labasicapasteleria.com")
    );
    expect(laBasicaLive).toBeDefined();
  });

  it("project images have descriptive alt text", () => {
    // Images are inside <a aria-hidden="true"> wrappers, so we include hidden elements
    const imgs = screen.getAllByRole("img", { hidden: true });
    imgs.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});
