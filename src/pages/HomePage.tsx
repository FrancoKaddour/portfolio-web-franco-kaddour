import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-20">
      {/* Profile photo */}
      <div className="flex justify-center mb-8">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden">
          <img
            src="/img/profile.jpg"
            alt="Franco Kaddour — desarrollador web, Buenos Aires"
            className="w-full h-full object-cover grayscale"
            style={{ objectPosition: '80% center' }}
            fetchPriority="high"
            decoding="async"
            width={176}
            height={176}
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-center text-[24px] md:text-[34px] font-bold tracking-[0.2em] uppercase mb-8 text-foreground">
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
      <p className="text-[14px] md:text-[16px] leading-[1.8] mb-10 text-foreground">
        <strong>{t("home.studyingLabel")}</strong>{" "}
        <span className="text-foreground/70">{t("home.studyingValue")}</span>
      </p>

      {/* Available */}
      <p className="text-[13px] md:text-[14px] leading-[1.8] mb-8 text-foreground/50">
        {t("home.availableLabel")}
      </p>

      {/* Arrow links */}
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
      </div>
    </div>
  );
};

export default HomePage;
