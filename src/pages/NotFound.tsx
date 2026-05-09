import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-[60px] md:text-[80px] font-bold tracking-[0.2em] text-foreground/20 mb-4" aria-hidden="true">
        404
      </p>
      <h1 className="text-[18px] font-bold tracking-[0.1em] uppercase text-foreground mb-2">
        Página no encontrada
      </h1>
      <p className="text-[15px] text-muted-foreground mb-8 text-center">
        Page not found.
      </p>
      <Link
        to="/"
        className="text-[14px] font-bold tracking-[0.1em] uppercase no-underline hover:underline"
      >
        → Back to home
      </Link>
    </div>
  );
};

export default NotFound;
