import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-20">
      {/* Profile photo */}
      <div className="flex justify-center mb-8">
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-foreground/10 shadow-lg">
          <img
            src="/img/profile.jpg"
            alt="Franco Kaddour"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-center text-[28px] md:text-[36px] font-bold tracking-[0.2em] uppercase mb-8">
        {t("home.firstName")} {t("home.lastName")}
      </h1>

      {/* Bio */}
      <p className="text-[14px] md:text-[16px] leading-[1.8] mb-6">
        {t("home.bio")}
      </p>

      {/* Currently working on */}
      <p className="text-[14px] md:text-[16px] leading-[1.8] mb-2">
        <strong>{t("home.currentlyLabel")}</strong>{" "}
        <a href="https://www.espaciovina.com/" target="_blank" rel="noopener noreferrer" className="font-bold">
          Espacio Viña
        </a>
        {" · "}
        <a href="https://miga-club.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold">
          Miga Club
        </a>
        {" · "}
        <a href="https://la-basica-pasteleria.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold">
          La Básica
        </a>
      </p>

      {/* Studying */}
      <p className="text-[14px] md:text-[16px] leading-[1.8] mb-10">
        <strong>{t("home.studyingLabel")}</strong>{" "}
        <span>{t("home.studyingValue")}</span>
      </p>

      {/* Arrow links */}
      <div className="flex flex-col gap-2">
        <Link to="/about" className="text-[14px] md:text-[15px] font-bold no-underline hover:underline">
          → {t("home.linkAbout")}
        </Link>
        <Link to="/projects" className="text-[14px] md:text-[15px] font-bold no-underline hover:underline">
          → {t("home.linkProjects")}
        </Link>
        <Link to="/contact" className="text-[14px] md:text-[15px] font-bold no-underline hover:underline">
          → {t("home.linkContact")}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
