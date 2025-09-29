import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.svg';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Centre OCOA" className="h-18 w-auto mb-4" />
            </div>
            <p className="text-gray-300 leading-relaxed">{t('footer.desc')}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#AF9866]">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Adresse du centre</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+213 X XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">contact@centre-ocoa.dz</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#AF9866]">{t('footer.hours')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{t('footer.hours.week')}</p>
                  <p>{t('footer.hours.sat')}</p>
                  <p>{t('footer.hours.sun')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2025 Centre OCOA. Tous droits réservés. Santé visuelle et auditive pour toute la famille.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;