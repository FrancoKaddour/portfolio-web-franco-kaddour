/**
 * Test utilities — wraps components with all required providers.
 * Import renderWithProviders instead of @testing-library/react's render.
 */
import { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";

// i18next mock — returns the key so assertions are language-independent
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: "es", changeLanguage: vi.fn() },
  }),
  initReactI18next: { type: "3rdParty", init: vi.fn() },
}));

// next-themes mock
vi.mock("next-themes", async () => {
  const actual = await vi.importActual<typeof import("next-themes")>("next-themes");
  return {
    ...actual,
    useTheme: () => ({ theme: "light", setTheme: vi.fn() }),
  };
});

interface RenderWithProvidersOptions extends Omit<RenderOptions, "wrapper"> {
  routerProps?: MemoryRouterProps;
}

export function renderWithProviders(
  ui: ReactElement,
  { routerProps = {}, ...options }: RenderWithProvidersOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <TooltipProvider>
            <MemoryRouter
              future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
              {...routerProps}
            >
              {children}
            </MemoryRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

export { screen, fireEvent, waitFor, within } from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
