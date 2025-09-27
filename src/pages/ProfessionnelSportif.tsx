import React from 'react';
import { Target, Shield, Zap, Trophy, CheckCircle, Users, Activity, Award } from 'lucide-react';

const ProfessionnelSportif = () => {
  const services = [
    {
      icon: Target,
      title: 'Lunettes de Protection',
      description: 'Protection oculaire professionnelle certifiée pour tous les métiers à risque : industrie, construction, laboratoire, soudure.'
    },
    {
      icon: Shield,
      title: 'Verres Sécurité',
      description: 'Verres de sécurité renforcés, anti-buée, anti-rayures et anti-reflets pour un confort optimal au travail.'
    },
    {
      icon: Activity,
      title: 'Lunettes Sportives',
      description: 'Montures techniques et verres adaptés pour tous les sports : cyclisme, ski, natation, course, tennis.'
    },
    {
      icon: Zap,
      title: 'Technologies Avancées',
      description: 'Verres photochromiques, polarisés, anti-UV et traitements spéciaux pour performances optimales.'
    }
  ];

  const specialites = [
    {
      name: 'Protection Industrielle',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg',
      description: 'Équipements de protection certifiés'
    },
    {
      name: 'Sport de Performance',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      description: 'Lunettes techniques pour athlètes'
    },
    {
      name: 'Professions Médicales',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
      description: 'Solutions pour professionnels de santé'
    }
  ];

  const certifications = [
    'Certification CE pour équipements de protection',
    'Normes EN 166 et EN 170',
    'Verres de sécurité classe S',
    'Traitements anti-buée et anti-rayures',
    'Protection UV 400nm garantie',
    'Résistance aux chocs et aux projections'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-8">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Professionnel & Sportif
              </span>
            </h1>
            <p className="text-2xl text-orange-600 font-medium mb-6">Performance & Protection</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Solutions optiques spécialisées pour les professionnels et les sportifs. 
              Protection, performance et confort pour tous vos défis quotidiens.
            </p>
          </div>
        </div>
      </section>

      {/* Spécialités Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nos Spécialités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialites.map((specialite, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={specialite.image} 
                  alt={specialite.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{specialite.name}</h3>
                  <p className="text-sm opacity-90">{specialite.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Spécialisés</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise technique de pointe pour répondre aux exigences des professionnels et sportifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg" 
                alt="Équipements de protection professionnelle"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Certifié</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Certifications & Normes</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sports & Activités</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Solutions optiques adaptées à chaque discipline sportive pour des performances optimales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Cyclisme', desc: 'Lunettes aérodynamiques et verres polarisés' },
              { title: 'Ski & Snowboard', desc: 'Protection UV et anti-buée pour la montagne' },
              { title: 'Natation', desc: 'Lunettes de natation avec correction' },
              { title: 'Course à Pied', desc: 'Montures légères et verres photochromiques' }
            ].map((sport, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sport.title}</h3>
                <p className="text-gray-300">{sport.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Optimiser Vos Performances ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Nos experts vous conseillent pour trouver l'équipement optique parfait selon votre activité professionnelle ou sportive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Consultation Spécialisée
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-200">
              Voir Nos Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionnelSportif;
