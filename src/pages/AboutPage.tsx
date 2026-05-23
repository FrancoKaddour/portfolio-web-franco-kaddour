import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BASE_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

// TODO: Reemplazar con testimonios reales de tus clientes
const testimonials = [
  {
    quote: "Franco entregó el e-commerce de Espacio Vina en tiempo y forma. Se encargó del frontend y del diseño completo — paleta, tipografía, identidad visual. El resultado superó nuestras expectativas.",
    author: "Nico Alvez",
    role: "Co-fundador, Espacio Vina",
  },
];

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About — Franco Kaddour | Desarrollador Web React TypeScript</title>
        <meta name="description" content={t("meta.aboutDescription")} />
        <link rel="canonical" href={`${BASE_URL}/about`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}/about`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/about`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/about`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/about`} />
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${BASE_URL}/about`} />
        <meta property="og:title" content="About — Franco Kaddour | Desarrollador Web" />
        <meta property="og:description" content={t("meta.aboutDescription")} />
        <meta property="og:image" content={`${BASE_URL}/img/profile.jpg`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="932" />
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
            <li>{t("about.educationSelfTaught")}</li>
          </ul>
          <p className="text-[13px] md:text-[14px] leading-[1.7] mt-3 text-foreground/50">
            {t("about.educationNote")}
          </p>
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

        {/* Testimonials */}
        <section className="mb-12" id="testimonials">
          <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-6">
            {t("about.testimonialsTitle")}
          </h2>
          <div className="space-y-6">
            {testimonials.map((item, i) => (
              <figure key={i} className="border-l-2 border-foreground/20 pl-5">
                <blockquote>
                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-foreground/80 italic mb-3">
                    "{item.quote}"
                  </p>
                </blockquote>
                <figcaption className="text-[13px] text-foreground/50">
                  — <strong className="text-foreground/70">{item.author}</strong>
                  {item.role && `, ${item.role}`}
                </figcaption>
              </figure>
            ))}
          </div>
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
