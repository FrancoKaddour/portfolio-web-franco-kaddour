import { describe, it, expect } from "vitest";
import { BASE_URL, GITHUB_USER, GITHUB_URL, EMAIL, LINKEDIN_URL } from "@/lib/constants";

describe("constants", () => {
  describe("BASE_URL", () => {
    it("is a valid HTTPS URL", () => {
      expect(() => new URL(BASE_URL)).not.toThrow();
      expect(new URL(BASE_URL).protocol).toBe("https:");
    });

    it("does not have a trailing slash", () => {
      expect(BASE_URL).not.toMatch(/\/$/);
    });

    it("points to the correct domain", () => {
      expect(BASE_URL).toContain("francokaddour");
    });
  });

  describe("GITHUB_USER", () => {
    it("is a non-empty string", () => {
      expect(typeof GITHUB_USER).toBe("string");
      expect(GITHUB_USER.length).toBeGreaterThan(0);
    });

    it("contains no spaces or special characters", () => {
      expect(GITHUB_USER).toMatch(/^[a-zA-Z0-9-]+$/);
    });
  });

  describe("GITHUB_URL", () => {
    it("is a valid HTTPS URL", () => {
      expect(() => new URL(GITHUB_URL)).not.toThrow();
      expect(new URL(GITHUB_URL).protocol).toBe("https:");
    });

    it("contains GITHUB_USER", () => {
      expect(GITHUB_URL).toContain(GITHUB_USER);
    });

    it("points to github.com", () => {
      expect(new URL(GITHUB_URL).hostname).toBe("github.com");
    });
  });

  describe("EMAIL", () => {
    it("is a valid email format", () => {
      expect(EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("contains francokaddour", () => {
      expect(EMAIL.toLowerCase()).toContain("francokaddour");
    });
  });

  describe("LINKEDIN_URL", () => {
    it("is a valid HTTPS URL", () => {
      expect(() => new URL(LINKEDIN_URL)).not.toThrow();
      expect(new URL(LINKEDIN_URL).protocol).toBe("https:");
    });

    it("points to linkedin.com", () => {
      expect(new URL(LINKEDIN_URL).hostname).toContain("linkedin.com");
    });
  });
});
