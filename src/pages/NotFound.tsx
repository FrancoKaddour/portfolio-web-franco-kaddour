import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 — Franco Kaddour</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-[60px] md:text-[80px] font-bold tracking-[0.2em] text-foreground/20 mb-4" aria-hidden="true">
          404
        </p>
        <h1 className="text-[18px] font-bold tracking-[0.1em] uppercase text-foreground mb-8 text-center">
          {t("notFound.message")}
        </h1>
        <Link
          to="/"
          className="text-[14px] font-bold tracking-[0.1em] uppercase no-underline hover:underline"
        >
          → {t("notFound.back")}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
