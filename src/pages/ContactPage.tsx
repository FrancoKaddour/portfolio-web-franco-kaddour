import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BASE_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

// Setup: copiar .env.example como .env.local y completar VITE_FORMSPREE_ID
// Crear un form gratis en https://formspree.io para obtener el ID
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const FORMSPREE_ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : null;

const schema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mínimo 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const ContactPage = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto — Franco Kaddour | Desarrollador Web Buenos Aires</title>
        <meta name="description" content={t("meta.contactDescription")} />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}/contact`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/contact`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/contact`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/contact`} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:title" content="Contacto — Franco Kaddour | Desarrollador Web" />
        <meta property="og:description" content={t("meta.contactDescription")} />
        <meta property="og:image" content={`${BASE_URL}/img/profile.jpg`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="932" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Franco Kaddour Portfolio" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${BASE_URL}/contact`} />
        <meta name="twitter:title" content="Contacto — Franco Kaddour | Desarrollador Web" />
        <meta name="twitter:description" content={t("meta.contactDescription")} />
        <meta name="twitter:image" content={`${BASE_URL}/img/profile.jpg`} />
        <meta name="twitter:creator" content="@FrancoKaddour" />
      </Helmet>

      <div className="page-enter max-w-[780px] mx-auto px-6 py-12 md:py-16">
        <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-10 text-foreground">
          {t("contact.pageTitle")}
        </h1>

        {/* Contact links */}
        <div className="text-[14px] md:text-[15px] leading-[1.8] space-y-2 text-foreground mb-10">
          <p>
            {t("contact.emailLabel")}:{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-bold text-foreground no-underline hover:underline"
            >
              francokaddour@gmail.com
            </a>
          </p>
          <p>
            {t("contact.githubLabel")}:{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground no-underline hover:underline"
            >
              github.com/FrancoKaddour
            </a>
          </p>
          <p>
            {t("contact.linkedinLabel")}:{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground no-underline hover:underline"
            >
              linkedin.com/in/francokaddour
            </a>
          </p>
          <p className="text-foreground/50">{t("contact.locationLabel")}</p>
        </div>

        <hr className="border-border mb-10" />

        {/* Contact form */}
        <section aria-label={t("contact.formTitle")}>
          <h2 className="text-[18px] md:text-[20px] font-bold tracking-[0.15em] uppercase mb-8">
            {t("contact.formTitle")}
          </h2>

          {status === "success" ? (
            <p className="text-[14px] leading-[1.8] text-foreground border-l-2 border-foreground/30 pl-4">
              {t("contact.formSuccess")}
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-label={t("contact.formTitle")}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] tracking-[0.12em] uppercase text-foreground/50 mb-2"
                >
                  {t("contact.formName")}
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t("contact.namePlaceholder")}
                  {...register("name")}
                  className="w-full border-b border-border bg-transparent py-2 text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-[12px] text-destructive mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] tracking-[0.12em] uppercase text-foreground/50 mb-2"
                >
                  {t("contact.formEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t("contact.emailPlaceholder")}
                  {...register("email")}
                  className="w-full border-b border-border bg-transparent py-2 text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-[12px] text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] tracking-[0.12em] uppercase text-foreground/50 mb-2"
                >
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t("contact.messagePlaceholder")}
                  {...register("message")}
                  className="w-full border-b border-border bg-transparent py-2 text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-none"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-[12px] text-destructive mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p role="alert" className="text-[13px] text-destructive">
                  {t("contact.formError")}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="text-[13px] font-bold tracking-[0.12em] uppercase text-foreground hover:opacity-60 transition-opacity disabled:opacity-40"
              >
                {status === "sending" ? t("contact.formSending") : `→ ${t("contact.formSend")}`}
              </button>
            </form>
          )}
        </section>
      </div>
    </>
  );
};

export default ContactPage;
