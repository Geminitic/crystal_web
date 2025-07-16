import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiFacebook, url: 'https://facebook.com/crystalmedia' },
    { icon: FiInstagram, url: 'https://instagram.com/crystal.mediia' },
    { icon: FiYoutube, url: 'https://youtube.com/crystalmediacorp' },
    { icon: FaTiktok, url: 'https://tiktok.com/@crystalmedia' },
    { icon: FiTwitter, url: 'https://twitter.com/crystal_mediia' }
  ];

  const footerLinks = [
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-12 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src="/icon.png" alt="Crystal Media" className="h-12 mb-4" />
            <p className="text-gray-400 mb-4">{t('footer.description')}</p>
            <a href="mailto:info@crystalmediacorp.com" className="flex items-center space-x-2 rtl:space-x-reverse text-primary-yellow hover:text-yellow-400">
              <FiMail />
              <span>info@crystalmediacorp.com</span>
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-3 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
