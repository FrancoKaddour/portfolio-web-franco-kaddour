import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "@/lib/constants";
import { projects } from "@/data/projects";
import { FeaturedCard, RegularCard, CompactCard } from "@/features/projects/cards";

const ProjectsPage = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Proyectos de Franco Kaddour",
    description: t("projects.subtitle"),
    itemListElement: projects
      .filter((p) => p.websiteUrl)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          url: p.websiteUrl,
          applicationCategory: "WebApplication",
          author: {
            "@type": "Person",
            name: "Franco Kaddour",
          },
        },
      })),
  };

  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured && p.image);
  const compact = projects.filter((p) => !p.featured && !p.image);

  return (
    <>
      <Helmet>
        <title>Proyectos — Franco Kaddour | React TypeScript E-commerce</title>
        <meta name="description" content={t("meta.projectsDescription")} />
        <link rel="canonical" href={`${BASE_URL}/projects`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/projects`} />
        <meta property="og:title" content="Proyectos — Franco Kaddour | La Básica · Miga Club · Espacio Vina" />
        <meta property="og:description" content={t("meta.projectsDescription")} />
        <meta property="og:image" content={`${BASE_URL}/og.webp`} />
        <meta property="og:image:width" content="1374" />
        <meta property="og:image:height" content="740" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Franco Kaddour Portfolio" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="page-enter max-w-[900px] mx-auto px-6 py-12 md:py-16">
        <h1 className="text-[24px] md:text-[30px] font-bold tracking-[0.18em] uppercase mb-3 text-foreground">
          {t("projects.title")}
        </h1>
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-foreground/40 mb-12">
          {t("projects.subtitle")}
        </p>

        {featured.length > 0 && (
          <section aria-label={t("projects.featuredLabel")} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map((p) => (
                <FeaturedCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        {regular.length > 0 && (
          <section aria-label="Proyectos" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regular.map((p) => (
                <RegularCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        {compact.length > 0 && (
          <section aria-label={t("projects.otherLabel")}>
            <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/30 font-mono mb-4">
              {t("projects.otherLabel")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {compact.map((p) => (
                <CompactCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
