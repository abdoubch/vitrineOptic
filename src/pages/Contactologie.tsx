import React from 'react';
import { Circle, Eye, Baby, Droplets, UserCheck, CheckCircle, Star, Calendar } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Contactologie = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Circle,
      title: t('contacto.svc.1.title'),
      description: t('contacto.svc.1.desc'),
      image: 'https://images.pexels.com/photos/5843445/pexels-photo-5843445.jpeg'
    },
    {
      icon: Eye,
      title: t('contacto.svc.2.title'),
      description: t('contacto.svc.2.desc'),
      image: 'https://images.pexels.com/photos/5843337/pexels-photo-5843337.jpeg'
    },
    {
      icon: Baby,
      title: t('contacto.svc.3.title'),
      description: t('contacto.svc.3.desc'),
      image: 'https://images.pexels.com/photos/5843354/pexels-photo-5843354.jpeg'
    },
    {
      icon: UserCheck,
      title: t('contacto.svc.4.title'),
      description: t('contacto.svc.4.desc'),
      image: 'https://images.pexels.com/photos/5843417/pexels-photo-5843417.jpeg'
    }
  ];

  const lensTypes = [
    {
      type: t('contacto.type.daily'),
      image: 'https://images.pexels.com/photos/5843428/pexels-photo-5843428.jpeg',
      benefits: [t('contacto.benefit.1'), t('contacto.benefit.2'), t('contacto.benefit.3')]
    },
    {
      type: t('contacto.type.monthly'),
      image: 'https://images.pexels.com/photos/5843337/pexels-photo-5843337.jpeg',
      benefits: [t('contacto.benefit.4'), t('contacto.benefit.5'), t('contacto.benefit.6')]
    },
    {
      type: t('contacto.type.special'),
      image: 'https://images.pexels.com/photos/5843363/pexels-photo-5843363.jpeg',
      benefits: [t('contacto.benefit.7'), t('contacto.benefit.8'), t('contacto.benefit.9')]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-8">
              <Circle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('contacto.title.pole')}{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t('contacto.title.name')}
              </span>
            </h1>
            <p className="text-2xl text-indigo-600 font-medium mb-6">{t('contacto.subtitle')}</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('contacto.hero.desc')}</p>
          </div>
        </div>
      </section>

      {/* Lens Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contacto.types.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('contacto.types.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lensTypes.map((lens, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={lens.image} 
                    alt={`Lentilles ${lens.type}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{lens.type}</h3>
                  <ul className="space-y-2">
                    {lens.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#286D45] flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contacto.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('contacto.services.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contacto.process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('contacto.process.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: t('contacto.process.1.title'), desc: t('contacto.process.1.desc') },
              { step: '2', title: t('contacto.process.2.title'), desc: t('contacto.process.2.desc') },
              { step: '3', title: t('contacto.process.3.title'), desc: t('contacto.process.3.desc') },
              { step: '4', title: t('contacto.process.4.title'), desc: t('contacto.process.4.desc') }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Produits d'Entretien</h2>
              <div className="space-y-6">
                {[
                  'Solutions multifonctions dernière génération',
                  'Produits d\'entretien spécialisés par type',
                  'Accessoires de manipulation et rangement',
                  'Conseils personnalisés d\'utilisation',
                  'Gamme complète pour tous budgets',
                  'Formation à l\'hygiène et sécurité'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Droplets className="w-6 h-6 text-purple-200 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5843417/pexels-photo-5843417.jpeg" 
                alt="Produits d'entretien lentilles"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm">Références Produits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contacto.showcase.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('contacto.showcase.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <Star className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contacto.show.1.title')}</h3>
              <p className="text-gray-600">{t('contacto.show.1.desc')}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contacto.show.2.title')}</h3>
              <p className="text-gray-600">{t('contacto.show.2.desc')}</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-indigo-50 rounded-2xl p-8">
              <UserCheck className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contacto.show.3.title')}</h3>
              <p className="text-gray-600">{t('contacto.show.3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('contacto.cta.title')}</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">{t('contacto.cta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Essai Personnalisé
            </button> */}
            {/* <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-200">
              Prendre Rendez-vous
            </button> */}
          </div>
          {/* <p className="text-sm text-indigo-100 mt-4">
            Première adaptation • Suivi inclus • Garantie satisfaction
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default Contactologie;