import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
      <h1 className="text-4xl font-bold">{t('home.welcome')}</h1>
      <p className="text-xl text-primary-silver">{t('home.subtitle')}</p>
      <Link to="/about" className="btn-primary">
        {t('home.learnMore')}
      </Link>
    </div>
  );
};

export default Home;
