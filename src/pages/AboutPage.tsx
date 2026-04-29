import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-16">
      {/* Page title */}
      <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-10">
        {t("about.pageTitle")}
      </h1>

      {/* Web Development */}
      <section className="mb-10">
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
      <section className="mb-10">
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
      <section className="mb-10">
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
      <section className="mb-10">
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
      <section className="mb-10">
        <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
          {t("about.headshotTitle")}
        </h2>
        <div className="max-w-sm">
          <img
            src="/img/profile.jpg"
            alt="Franco Kaddour"
            className="w-full rounded shadow-md grayscale"
          />
        </div>
      </section>

      <hr className="border-border mb-10" />

      {/* Contact */}
      <section>
        <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] uppercase mb-4">
          {t("about.contactSectionTitle")}
        </h2>
        <p className="text-[14px] md:text-[15px] leading-[1.8]">
          Email:{" "}
          <a href="mailto:francokaddour@gmail.com" className="font-bold hover:underline">
            francokaddour@gmail.com
          </a>
        </p>
        <p className="text-[14px] md:text-[15px] leading-[1.8] mt-2">
          GitHub:{" "}
          <a
            href="https://github.com/FrancoKaddour"
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
            href="https://www.linkedin.com/in/francokaddour/"
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
  );
};

export default AboutPage;
