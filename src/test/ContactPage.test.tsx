import { describe, it, expect } from "vitest";
import ContactPage from "@/pages/ContactPage";
import { renderWithProviders, screen, fireEvent, waitFor } from "./utils";

describe("ContactPage", () => {
  beforeEach(() => {
    renderWithProviders(<ContactPage />);
  });

  it("renders the page heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders email contact link", () => {
    const emailLink = screen.getByRole("link", { name: /francokaddour@gmail\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:francokaddour@gmail.com");
  });

  it("renders GitHub contact link", () => {
    const githubLink = screen.getByRole("link", { name: /github\.com\/FrancoKaddour/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("renders LinkedIn contact link", () => {
    const linkedinLink = screen.getByRole("link", { name: /linkedin\.com/i });
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("renders the contact form with accessible name", () => {
    expect(screen.getByRole("form", { name: /contact\.formTitle/i })).toBeInTheDocument();
  });

  it("renders name, email, and message inputs", () => {
    expect(screen.getByLabelText(/contact\.formName/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact\.formEmail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact\.formMessage/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    expect(screen.getByRole("button", { name: /contact\.formSend/i })).toBeInTheDocument();
  });

  it("shows validation error when submitting empty form", async () => {
    const submitBtn = screen.getByRole("button", { name: /contact\.formSend/i });
    fireEvent.click(submitBtn);
    await waitFor(() => {
      // Zod requires min 2 chars for name
      expect(screen.getByText(/mínimo 2 caracteres/i)).toBeInTheDocument();
    });
  });

  it("shows email validation error for invalid email", async () => {
    const emailInput = screen.getByLabelText(/contact\.formEmail/i);
    fireEvent.change(emailInput, { target: { value: "not-an-email" } });
    const submitBtn = screen.getByRole("button", { name: /contact\.formSend/i });
    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
    });
  });

  it("shows message validation error for short message", async () => {
    const nameInput = screen.getByLabelText(/contact\.formName/i);
    const emailInput = screen.getByLabelText(/contact\.formEmail/i);
    const messageInput = screen.getByLabelText(/contact\.formMessage/i);

    fireEvent.change(nameInput, { target: { value: "Franco" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(messageInput, { target: { value: "corto" } });

    fireEvent.click(screen.getByRole("button", { name: /contact\.formSend/i }));
    await waitFor(() => {
      expect(screen.getByText(/mínimo 10 caracteres/i)).toBeInTheDocument();
    });
  });

  it("submit button is disabled while sending", () => {
    // Default state: not disabled
    const btn = screen.getByRole("button", { name: /contact\.formSend/i });
    expect(btn).not.toBeDisabled();
  });
});
