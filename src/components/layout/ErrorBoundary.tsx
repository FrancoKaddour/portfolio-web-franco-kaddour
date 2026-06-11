import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-[20px] font-bold tracking-[0.15em] uppercase mb-4">
            Algo salió mal
          </h1>
          <p className="text-[14px] text-foreground/60 mb-6">
            Recargá la página para continuar.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-[14px] font-bold tracking-[0.1em] uppercase hover:underline"
          >
            → Recargar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
