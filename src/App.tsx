import { Suspense, lazy, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { Layout } from "./components/layout/Layout";
import ErrorBoundary from "./components/layout/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimal GA4 page-view tracker (no external SDK needed)
const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

function useGoogleAnalytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;
    // gtag is injected via index.html script when GA_ID is present
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("config", GA_ID, { page_path: pathname });
    }
  }, [pathname]);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppInner() {
  useGoogleAnalytics();
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
