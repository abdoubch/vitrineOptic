import React from 'react';
import { Heart, Shield, Users2, Handshake, CheckCircle, Smile } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Senior = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Heart,
      title: t('senior.svc.1.title'),
      description: t('senior.svc.1.desc')
    },
    {
      icon: Shield,
      title: t('senior.svc.2.title'),
      description: t('senior.svc.2.desc')
    },
    {
      icon: Handshake,
      title: t('senior.svc.3.title'),
      description: t('senior.svc.3.desc')
    },
    {
      icon: Smile,
      title: t('senior.svc.4.title'),
      description: t('senior.svc.4.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#286D45] to-teal-500 rounded-full mb-8">
              <Users2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('senior.title.pole')}{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {t('senior.title.name')}
              </span>
            </h1>
            <p className="text-2xl text-emerald-600 font-medium mb-6">{t('senior.subtitle')}</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('senior.hero.desc')}</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://media.istockphoto.com/id/1483052139/fr/photo/centre-dappels-conseil-informatique-et-t%C3%A9l%C3%A9marketing-femme-en-fauteuil-roulant-sur-contactez.jpg?b=1&s=612x612&w=0&k=20&c=dr9nL26AlziP-qxKJLs_nBth53XmPB2cQ8l2Ojj1vKE=" 
              alt="Accompagnement personne senior"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{t('senior.overlay.title')}</h3>
                <p className="text-lg opacity-90">{t('senior.overlay.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('senior.approach.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('senior.approach.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-emerald-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#286D45] to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{service.description}</p>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img 
                        src={[
                          "https://images.pexels.com/photos/267642/pexels-photo-267642.jpeg",
                          "https://images.pexels.com/photos/7117622/pexels-photo-7117622.jpeg",
                          "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
                          "https://images.pexels.com/photos/5699434/pexels-photo-5699434.jpeg"
                        ][index]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('senior.commitment.title')}</h2>
              <div className="space-y-6">
                {[
                  t('senior.commitment.feature.1'),
                  t('senior.commitment.feature.2'),
                  t('senior.commitment.feature.3'),
                  t('senior.commitment.feature.4'),
                  t('senior.commitment.feature.5'),
                  t('senior.commitment.feature.6'),
                  t('senior.commitment.feature.7'),
                  t('senior.commitment.feature.8')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#286D45] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6194682/pexels-photo-6194682.jpeg" 
                alt="Consultation senior personnalisée"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#286D45] to-teal-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Satisfaction Familles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-r from-[#286D45] to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('senior.specialties.title')}</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">{t('senior.specialties.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('senior.specialties.1.title'), desc: t('senior.specialties.1.desc') },
              { title: t('senior.specialties.2.title'), desc: t('senior.specialties.2.desc') },
              { title: t('senior.specialties.3.title'), desc: t('senior.specialties.3.desc') },
              { title: t('senior.specialties.4.title'), desc: t('senior.specialties.4.desc') }
            ].map((specialty, index) => (
              <div key={index} className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{specialty.title}</h3>
                <p className="text-emerald-100 text-sm">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('senior.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t('senior.cta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+33000000000"
              className="bg-gradient-to-r from-[#286D45] to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Nous Contacter
            </a> */}
            {/* <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200">
              Demander un Devis
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Senior;