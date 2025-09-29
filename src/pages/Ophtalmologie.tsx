import React from 'react';
import { Stethoscope, Eye, Activity, Shield, CheckCircle, Award, Clock, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Ophtalmologie = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Eye,
      title: t('ophtalmo.title.name'),
      description: t('ophtalmo.hero.desc'),
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
    },
    {
      icon: Activity,
      title: 'Orthoptie & Rééducation',
      description: 'Séances de rééducation visuelle et orthoptie pour traiter les troubles de la vision binoculaire.',
      image: 'https://images.pexels.com/photos/5752261/pexels-photo-5752261.jpeg'
    },
    {
      icon: Shield,
      title: 'Suivi des Pathologies',
      description: 'Surveillance et suivi régulier des pathologies oculaires avec orientation thérapeutique adaptée.',
      image: 'https://images.pexels.com/photos/5752273/pexels-photo-5752273.jpeg'
    },
    {
      icon: Stethoscope,
      title: 'Examens Spécialisés',
      description: 'Bilans visuels approfondis avec équipements de pointe pour un diagnostic précis et fiable.',
      image: 'https://images.pexels.com/photos/6749723/pexels-photo-6749723.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-8">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('ophtalmo.title.pole')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('ophtalmo.title.name')}
              </span>
            </h1>
            <p className="text-2xl text-blue-600 font-medium mb-6">{t('ophtalmo.subtitle')}</p>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold mb-8">
              <Stethoscope className="w-5 h-5 mr-2" />
              {t('ophtalmo.badge')}
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('ophtalmo.hero.desc')}</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg" 
              alt="Consultation ophtalmologique"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{t('ophtalmo.overlay.title')}</h3>
                <p className="text-lg opacity-90">{t('ophtalmo.overlay.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ophtalmo.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('ophtalmo.services.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/2 h-48 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
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

      {/* Medical Team Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('ophtalmo.team.title')}</h2>
              <div className="space-y-6">
                {[
                  t('ophtalmo.team.feature.1'),
                  t('ophtalmo.team.feature.2'),
                  t('ophtalmo.team.feature.3'),
                  t('ophtalmo.team.feature.4'),
                  t('ophtalmo.team.feature.5'),
                  t('ophtalmo.team.feature.6'),
                  t('ophtalmo.team.feature.7'),
                  t('ophtalmo.team.feature.8')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5752290/pexels-photo-5752290.jpeg" 
                alt="Équipe médicale ophtalmologie"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ophtalmo.pathologies.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('ophtalmo.pathologies.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('ophtalmo.pathology.1.title'), desc: t('ophtalmo.pathology.1.desc') },
              { title: t('ophtalmo.pathology.2.title'), desc: t('ophtalmo.pathology.2.desc') },
              { title: t('ophtalmo.pathology.3.title'), desc: t('ophtalmo.pathology.3.desc') },
              { title: t('ophtalmo.pathology.4.title'), desc: t('ophtalmo.pathology.4.desc') },
              { title: t('ophtalmo.pathology.5.title'), desc: t('ophtalmo.pathology.5.desc') },
              { title: t('ophtalmo.pathology.6.title'), desc: t('ophtalmo.pathology.6.desc') }
            ].map((pathology, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{pathology.title}</h3>
                <p className="text-gray-600 text-center text-sm">{pathology.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('ophtalmo.equipment.title')}</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('ophtalmo.equipment.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: t('ophtalmo.eq.1.title'), desc: t('ophtalmo.eq.1.desc') },
              { icon: Eye, title: t('ophtalmo.eq.2.title'), desc: t('ophtalmo.eq.2.desc') },
              { icon: Activity, title: t('ophtalmo.eq.3.title'), desc: t('ophtalmo.eq.3.desc') },
              { icon: Shield, title: t('ophtalmo.eq.4.title'), desc: t('ophtalmo.eq.4.desc') }
            ].map((equipment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <equipment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{equipment.title}</h3>
                <p className="text-blue-100 text-sm">{equipment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rendez-vous Rapides</h3>
              <p className="text-gray-600">Délais d'attente optimisés</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prise en Charge</h3>
              <p className="text-gray-600">Sécurité sociale et mutuelles</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Urgences</h3>
              <p className="text-gray-600">Consultations d'urgence possibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('ophtalmo.appointment.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t('ophtalmo.appointment.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+33000000000"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Prendre Rendez-vous
            </a> */}
            {/* <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
              Urgence Oculaire
            </button> */}
          </div>
          {/* <p className="text-sm text-blue-100 mt-4">
            Conventionné Sécurité Sociale • Tiers payant accepté
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default Ophtalmologie;