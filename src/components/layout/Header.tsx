import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../common/LanguageSelector';
import ThemeToggle from '../common/ThemeToggle';
import Navigation from './Navigation';

const Header: React.FC = () => {

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-dark-bg shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/icon.png" alt="Crystal Media" className="h-10 w-auto" />
          </Link>
          <Navigation />
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
