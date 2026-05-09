import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://francokaddour.vercel.app";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Franco Kaddour | Desarrollador Web — React, TypeScript, Node.js</title>
        <meta name="description" content="Portfolio de Franco Kaddour, desarrollador web de Buenos Aires especializado en React, TypeScript y Node.js. Proyectos reales en e-commerce y aplicaciones web." />
        <link rel="canonical" href={BASE_URL} />
        <link rel="alternate" hrefLang="es" href={BASE_URL} />
        <link rel="alternate" hrefLang="en" href={BASE_URL} />
        <link rel="alternate" hrefLang="pt" href={BASE_URL} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
      </Helmet>

      <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-20">
        {/* Profile photo */}
        <div className="flex justify-center mb-8">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden">
            <img
              src="/img/profile.jpg"
              alt="Franco Kaddour — desarrollador web, Buenos Aires"
              className="w-full h-full object-cover"
              style={{ objectPosition: "80% center" }}
              fetchPriority="high"
              decoding="async"
              width={176}
              height={176}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-center text-[24px] md:text-[34px] font-bold tracking-[0.2em] uppercase mb-6 text-foreground">
          {t("home.firstName")} {t("home.lastName")}
        </h1>

        {/* Bio */}
        <p className="text-[14px] md:text-[16px] leading-[1.8] mb-6 text-foreground">
          {t("home.bio")}
        </p>

        {/* Currently working on */}
        <p className="text-[14px] md:text-[16px] leading-[1.8] mb-2 text-foreground">
          <strong>{t("home.currentlyLabel")}</strong>{" "}
          <a
            href="https://www.espaciovina.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground no-underline hover:underline"
          >
            Espacio Vina
          </a>
          {" · "}
          <a
            href="https://miga-club.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground no-underline hover:underline"
          >
            Miga Club
          </a>
          {" · "}
          <a
            href="https://la-basica-pasteleria.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground no-underline hover:underline"
          >
            La Básica
          </a>
        </p>

        {/* Studying */}
        <p className="text-[14px] md:text-[15px] leading-[1.8] mb-6 text-foreground">
          <strong>{t("home.studyingLabel")}</strong>{" "}
          <span className="text-foreground/60">{t("home.studyingValue")}</span>
        </p>

        {/* Available badge */}
        <p className="text-[13px] md:text-[14px] leading-[1.8] mb-8 text-foreground/50">
          {t("home.availableLabel")}
        </p>

        {/* Arrow links */}
        <nav aria-label="Links rápidos">
          <div className="flex flex-col gap-2">
            <Link
              to="/about"
              className="text-[14px] md:text-[15px] font-bold text-foreground no-underline hover:underline"
            >
              → {t("home.linkAbout")}
            </Link>
            <Link
              to="/projects"
              className="text-[14px] md:text-[15px] font-bold text-foreground no-underline hover:underline"
            >
              → {t("home.linkProjects")}
            </Link>
            <Link
              to="/contact"
              className="text-[14px] md:text-[15px] font-bold text-foreground no-underline hover:underline"
            >
              → {t("home.linkContact")}
            </Link>
            <a
              href="https://github.com/FrancoKaddour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] md:text-[15px] font-bold text-foreground/50 no-underline hover:underline hover:text-foreground"
            >
              → GitHub
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HomePage;
