import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
  ];

  return (
    <nav className="space-x-4 rtl:space-x-reverse">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? 'text-primary-yellow' : 'hover:text-primary-yellow'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
