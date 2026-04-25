import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-16">
      {/* Page title */}
      <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-10 text-foreground">
        {t("contact.pageTitle")}
      </h1>

      <div className="text-[14px] md:text-[15px] leading-[1.8] space-y-4 text-foreground">
        <p>
          Email:{" "}
          <a
            href="mailto:francokaddour@gmail.com"
            className="font-bold text-foreground no-underline hover:underline"
          >
            francokaddour@gmail.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/FrancoKaddour"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground no-underline hover:underline"
          >
            github.com/FrancoKaddour
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/francokaddour/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground no-underline hover:underline"
          >
            linkedin.com/in/francokaddour
          </a>
        </p>

        <p className="text-foreground/50">
          Buenos Aires, Argentina
        </p>
      </div>

      <p className="text-[14px] md:text-[15px] leading-[1.8] mt-10 text-foreground/60">
        {t("contact.thankYou")}
      </p>
    </div>
  );
};

export default ContactPage;
