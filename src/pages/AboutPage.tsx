import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BASE_URL, EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from "@/lib/constants";

interface UTNSubject {
  name: string;
  repo: string;
}

const utnSubjects: UTNSubject[] = [
  { name: "Matemática I",                repo: "UTN-TUPAD-Matematica1" },
  { name: "Organización Empresarial",    repo: "UTN-TUPAD-OrganizacionEmpresarial" },
  { name: "Arquitectura y Sist. Op.",    repo: "UTN-TUPAD-AySO" },
  { name: "Programación I",             repo: "UTN-TUPAD-Programacion1" },
];

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About — Franco Kaddour | Desarrollador Web React TypeScript</title>
        <meta name="description" content={t("meta.aboutDescription")} />
        <link rel="canonical" href={`${BASE_URL}/about`} />
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${BASE_URL}/about`} />
        <meta property="og:title" content="About — Franco Kaddour | Desarrollador Web" />
        <meta property="og:description" content={t("meta.aboutDescription")} />
        <meta property="og:image" content={`${BASE_URL}/og.webp`} />
        <meta property="og:image:width" content="1374" />
        <meta property="og:image:height" content="740" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Franco Kaddour Portfolio" />
      </Helmet>

      <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-16">
        <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-10">
          {t("about.pageTitle")}
        </h1>

        {/* Web Development */}
        <section className="mb-12" id="web-dev">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
            {t("about.webDevTitle")}
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.8] mb-4">
            {t("about.webDevDesc1")}
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.8] mb-4">
            {t("about.webDevCurrently")}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[14px] md:text-[15px] leading-[1.7]">
            <li>
              <strong>Espacio Vina</strong> — {t("about.projectEspacioVina")}
            </li>
            <li>
              <strong>Miga Club</strong> — {t("about.projectMigaClub")}
            </li>
            <li>
              <strong>La Básica</strong> — {t("about.projectLaBasica")}
            </li>
            <li>
              <strong>Portfolio Web</strong> — {t("about.projectPortfolio")}
            </li>
          </ul>
        </section>

        <hr className="border-border mb-10" />

        {/* Tech Stack */}
        <section className="mb-12" id="tech">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
            {t("about.techTitle")}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[14px] md:text-[15px] leading-[1.7]">
            <li>{t("about.techFrontend")}</li>
            <li>{t("about.techBackend")}</li>
            <li>{t("about.techTools")}</li>
            <li>{t("about.techDesign")}</li>
            <li>{t("about.techAI")}</li>
          </ul>
        </section>

        <hr className="border-border mb-10" />

        {/* Education */}
        <section className="mb-12" id="education">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
            {t("about.educationTitle")}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[14px] md:text-[15px] leading-[1.7]">
            <li>{t("about.educationUTN")}</li>
            <li>{t("about.educationCoderHouseWeb")}</li>
            <li>{t("about.educationCoderHouseJS")}</li>
            <li>{t("about.educationSelfTaught")}</li>
          </ul>
        </section>

        <hr className="border-border mb-10" />

        {/* UTN — Materias */}
        <section className="mb-12" id="utn-materias">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-1">
            {t("about.utnTitle")}
          </h2>
          <p className="text-[13px] text-foreground/40 font-mono mb-6">
            {t("about.utnSubtitle")}
          </p>
          <ul className="space-y-3">
            {utnSubjects.map((s) => (
              <li key={s.repo} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 text-[14px] leading-[1.7]">
                <span className="text-foreground">{s.name}</span>
                <a
                  href={`https://github.com/${GITHUB_USER}/${s.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-mono text-foreground/40 hover:text-foreground transition-colors no-underline truncate"
                  aria-label={`Repositorio GitHub de ${s.name}`}
                >
                  {s.repo} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-border mb-10" />

        {/* Short Bio */}
        <section className="mb-12" id="bio">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
            {t("about.shortBioTitle")}
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.8] mb-4">
            {t("about.shortBio1")}
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.8]">
            {t("about.shortBio2")}
          </p>
        </section>

        <hr className="border-border mb-10" />

        {/* Headshot */}
        <section className="mb-10" id="photo">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
            {t("about.headshotTitle")}
          </h2>
          <div className="max-w-[280px]">
            <img
              src="/img/profile.jpg"
              alt="Franco Kaddour — desarrollador web, Buenos Aires"
              className="w-full rounded shadow-md grayscale"
              loading="lazy"
              decoding="async"
              width={280}
              height={280}
            />
          </div>
        </section>

        <hr className="border-border mb-10" />

        {/* Contact */}
        <section id="contact-info">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
            {t("about.contactSectionTitle")}
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.8]">
            Email:{" "}
            <a href={`mailto:${EMAIL}`} className="font-bold hover:underline">
              {EMAIL}
            </a>
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.8] mt-2">
            GitHub:{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              github.com/FrancoKaddour
            </a>
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.8] mt-2">
            LinkedIn:{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              linkedin.com/in/francokaddour
            </a>
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.8] mt-6">
            {t("about.thankYou")}
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
