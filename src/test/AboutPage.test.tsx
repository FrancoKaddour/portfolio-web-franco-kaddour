import { describe, it, expect } from "vitest";
import AboutPage from "@/pages/AboutPage";
import { renderWithProviders, screen, within } from "./utils";

describe("AboutPage", () => {
  beforeEach(() => {
    renderWithProviders(<AboutPage />);
  });

  it("renders the main heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders all section headings (h2)", () => {
    const headings = screen.getAllByRole("heading", { level: 2 });
    // Web Dev, Tech, Education, Bio, Testimonials, Photo, Contact — 7 sections
    expect(headings.length).toBeGreaterThanOrEqual(6);
  });

  it("renders CoderHouse courses in education section", () => {
    const items = screen.getAllByText(/CoderHouse/i);
    expect(items.length).toBeGreaterThanOrEqual(2);
  });

  it("renders profile photo", () => {
    const img = screen.getByRole("img", { name: /Franco Kaddour/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/img/profile.webp");
  });

  it("renders email contact link", () => {
    const emailLink = screen.getByRole("link", { name: /francokaddour@gmail\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:francokaddour@gmail.com");
  });

  it("renders GitHub contact link", () => {
    const githubLink = screen.getByRole("link", { name: /github\.com\/FrancoKaddour/i });
    expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders LinkedIn contact link", () => {
    const linkedinLink = screen.getByRole("link", { name: /linkedin\.com/i });
    expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("lists current projects in web dev section", () => {
    // Each project name appears in a <strong> inside a <li>, so multiple nodes match.
    // Scope to listitem text content to avoid ambiguity.
    const listItems = screen.getAllByRole("listitem");
    const texts = listItems.map((li) => li.textContent ?? "");
    expect(texts.some((t) => /Espacio Vina/i.test(t))).toBe(true);
    expect(texts.some((t) => /Miga Club/i.test(t))).toBe(true);
    expect(texts.some((t) => /La Básica/i.test(t))).toBe(true);
  });
});
