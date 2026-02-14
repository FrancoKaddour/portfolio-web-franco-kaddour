import { useTranslation } from 'react-i18next';
import { ContactModal } from '@/components/ContactModal';
import { useState } from 'react';

const AboutPage = () => {
  const { t } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6 md:py-12 font-mono text-[10px] sm:text-[12px] md:text-[14px] leading-[18px] sm:leading-[22px] md:leading-[26px]">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-sans font-bold text-primary mb-1 text-center">
          {t('about.title')}
        </h1>
        <p className="text-center text-foreground text-sm sm:text-base md:text-lg font-sans mb-4 sm:mb-6 md:mb-10">
          {t('about.subtitle')}
        </p>

        <p className="text-foreground mb-4 sm:mb-6">
          {t('about.bio1')}
        </p>
        <p className="text-foreground mb-6 sm:mb-10">
          {t('about.bio2')}
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-primary mb-4">
          {t('about.techStackTitle')}
        </h2>
        <p className="text-foreground mb-6 sm:mb-10">
          {t('about.techStackDesc')}
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-primary mb-4">
          {t('about.projectsTitle')}
        </h2>
        <p className="text-foreground mb-6 sm:mb-10">
          {t('about.projectsDesc')}
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-primary mb-4">
          {t('about.contactTitle')}
        </h2>
        <p className="text-foreground">
          {t('about.contactDesc')}{' '}
          <button
            onClick={() => setContactOpen(true)}
            className="text-primary hover:underline cursor-pointer font-semibold"
          >
            aquí
          </button>
        </p>
      </div>
      
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default AboutPage;
