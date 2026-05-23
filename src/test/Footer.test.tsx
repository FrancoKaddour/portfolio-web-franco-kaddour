import { describe, it, expect } from "vitest";
import { Footer } from "@/components/Footer";
import { renderWithProviders, screen } from "./utils";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

describe("Footer", () => {
  beforeEach(() => {
    renderWithProviders(<Footer />);
  });

  it("renders footer landmark", () => {
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders GitHub link with correct href", () => {
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", GITHUB_URL);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders LinkedIn link with correct href", () => {
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("href", LINKEDIN_URL);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders copyright text with current year", () => {
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders Franco Kaddour name in copyright", () => {
    expect(screen.getByText(/Franco Kaddour/i)).toBeInTheDocument();
  });
});
