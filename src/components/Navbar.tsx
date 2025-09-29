import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const { t, toggleLang } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.optikids'), href: '/optikids' },
    { name: t('nav.adult'), href: '/optique-adultes' },
    { name: t('nav.senior'), href: '/senior' },
    { name: t('nav.choufa'), href: '/choufa' },
    { name: t('nav.ophtalmo'), href: '/ophtalmologie' },
    { name: t('nav.contactologie'), href: '/contactologie' },
    { name: t('nav.audio'), href: '/audioprothese' },
    { name: t('nav.pro'), href: '/professionnel-sportif' },
    { name: t('nav.tech'), href: '/interactif-optitech' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Centre OCOA" className="h-24 w-auto pr-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-[#AF9866] to-[#286D45] text-white shadow-md'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="ml-4 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50"
            >
              {t('lang.toggle')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-sky-600 hover:bg-sky-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-[#AF9866] to-[#286D45] text-white'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="block w-full mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 text-left"
              >
                {t('lang.toggle')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;