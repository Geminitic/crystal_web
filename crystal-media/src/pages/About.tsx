import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
};

export default About;
