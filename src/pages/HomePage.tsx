import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BASE_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Franco Kaddour | Desarrollador Web — React, TypeScript, Node.js</title>
        <meta name="description" content="Franco Kaddour — desarrollador web de Buenos Aires. React, TypeScript, Node.js. Dos años construyendo e-commerces y aplicaciones para clientes reales." />
        <link rel="canonical" href={BASE_URL} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:title" content="Franco Kaddour | Desarrollador Web — React, TypeScript, Node.js" />
        <meta property="og:description" content="Portfolio de Franco Kaddour, desarrollador web de Buenos Aires especializado en React, TypeScript y Node.js. Proyectos reales en e-commerce y aplicaciones web." />
        <meta property="og:image" content={`${BASE_URL}/og.webp`} />
        <meta property="og:image:width" content="1374" />
        <meta property="og:image:height" content="740" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Franco Kaddour Portfolio" />
      </Helmet>

      <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-20">
        {/* Profile photo */}
        <div className="flex justify-center mb-8">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-foreground/10">
            <img
              src="/img/profile.webp"
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
        <h1 className="text-center text-[24px] md:text-[34px] font-bold tracking-[0.2em] uppercase mb-2 text-foreground">
          {t("home.firstName")} {t("home.lastName")}
        </h1>

        {/* Tagline */}
        <p className="text-center text-[11px] md:text-[12px] tracking-[0.1em] sm:tracking-[0.18em] uppercase text-foreground/55 font-mono mb-6">
          {t("home.tagline")}
        </p>

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
            href="https://labasicapasteleria.com/"
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

        {/* Available badge — animated green dot */}
        <div className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-1.5 mb-8">
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0"
            aria-hidden="true"
          />
          <span className="text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-foreground/65 font-mono">
            <span className="sr-only">Estado: </span>{t("home.availableLabel")}
          </span>
        </div>

        {/* Arrow links */}
        <nav aria-label="Links rápidos">
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li>
              <Link
                to="/about"
                className="text-[14px] md:text-[15px] font-bold text-foreground no-underline hover:underline min-h-[44px] flex items-center"
              >
                <span aria-hidden="true">→ </span>{t("home.linkAbout")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-[14px] md:text-[15px] font-bold text-foreground no-underline hover:underline min-h-[44px] flex items-center"
              >
                <span aria-hidden="true">→ </span>{t("home.linkProjects")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[14px] md:text-[15px] font-bold text-foreground no-underline hover:underline min-h-[44px] flex items-center"
              >
                <span aria-hidden="true">→ </span>{t("home.linkContact")}
              </Link>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil de GitHub de Franco Kaddour (abre en nueva pestaña)"
                className="text-[14px] md:text-[15px] font-bold text-foreground/50 no-underline hover:underline hover:text-foreground min-h-[44px] flex items-center"
              >
                → {t("home.linkGithub")}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil de LinkedIn de Franco Kaddour (abre en nueva pestaña)"
                className="text-[14px] md:text-[15px] font-bold text-foreground/50 no-underline hover:underline hover:text-foreground min-h-[44px] flex items-center"
              >
                → {t("home.linkLinkedin")}
              </a>
            </li>
            <li>
              <a
                href="/cv-franco-kaddour.pdf"
                download
                className="text-[14px] md:text-[15px] font-bold text-foreground/50 no-underline hover:underline hover:text-foreground min-h-[44px] flex items-center"
                aria-label="Descargar curriculum vitae en PDF"
              >
                → {t("home.linkCV")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HomePage;
