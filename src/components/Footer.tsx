import React from 'react';
import { MapPin, Phone, Mail, Clock, Eye } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">CENTRE OCOA</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre centre spécialisé en santé visuelle et auditive. 
              Une prise en charge complète pour tous les âges avec nos équipes d'experts.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Adresse du centre</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+33 X XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">contact@centre-ocoa.fr</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Horaires</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Lun - Ven : 9h - 18h</p>
                  <p>Sam : 9h - 17h</p>
                  <p>Dim : Fermé</p>
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