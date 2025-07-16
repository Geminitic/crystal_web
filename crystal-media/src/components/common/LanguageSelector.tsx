import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      <FiGlobe className="w-5 h-5" />
      <span className="text-sm font-medium">
        {i18n.language === 'ar' ? 'EN' : 'AR'}
      </span>
    </button>
  );
};

export default LanguageSelector;
