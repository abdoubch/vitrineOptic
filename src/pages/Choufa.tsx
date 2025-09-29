import React from 'react';
import { Gift, Eye, UserCheck, MessageCircle, CheckCircle, Star, Users, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Choufa = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Eye,
      title: t('choufa.svc.1.title'),
      description: t('choufa.svc.1.desc')
    },
    {
      icon: UserCheck,
      title: t('choufa.svc.2.title'),
      description: t('choufa.svc.2.desc')
    },
    {
      icon: MessageCircle,
      title: t('choufa.svc.3.title'),
      description: t('choufa.svc.3.desc')
    },
    {
      icon: Gift,
      title: t('choufa.svc.4.title'),
      description: t('choufa.svc.4.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-[#286D45] rounded-full mb-8">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('choufa.title.pole')}{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t('choufa.title.name')}
              </span>
            </h1>
            <p className="text-2xl text-green-600 font-medium mb-6">{t('choufa.subtitle')}</p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold mb-8">
              <Gift className="w-5 h-5 mr-2" />
              {t('choufa.badge')}
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('choufa.hero.desc')}</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://media.istockphoto.com/id/1450677491/fr/photo/optom%C3%A9trie-tablette-et-opticien-avec-lhomme-pour-les-r%C3%A9sultats-la-communication-et-le.jpg?b=1&s=612x612&w=0&k=20&c=TikRUad66lmZ7P9btAVH9U5tuTsA7QdE5Eqoiio-n3o=" 
              alt="Conseil visuel personnalisé"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{t('choufa.overlay.title')}</h3>
                <p className="text-lg opacity-90">{t('choufa.overlay.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('choufa.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('choufa.services.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-green-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#286D45] rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{service.description}</p>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img 
                        src={index === 0 ? "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg" :
                             index === 1 ? "https://media.istockphoto.com/id/1627701437/fr/photo/optom%C3%A9trie-sourire-et-femme-avec-des-lunettes-de-vue-opticien-et-aider-le-client-avec-le.jpg?b=1&s=612x612&w=0&k=20&c=NyL-9PvCeHcEtVDMlwveh7VEbeMYh_1Oodt7igRiVzA=" :
                             index === 2 ? "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg" :
                             "https://images.pexels.com/photos/6749742/pexels-photo-6749742.jpeg"}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('choufa.process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('choufa.process.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: t('choufa.process.1.title'), desc: t('choufa.process.1.desc') },
              { step: '2', title: t('choufa.process.2.title'), desc: t('choufa.process.2.desc') },
              { step: '3', title: t('choufa.process.3.title'), desc: t('choufa.process.3.desc') }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#286D45] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg" 
                alt="Équipe conseil Choufa"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-[#286D45] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Ans d'Expérience</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Équipe "Choufa"</h2>
              <div className="space-y-6">
                {[
                  'Optométristes diplômés et certifiés',
                  'Orthoptistes spécialisés en rééducation',
                  'Conseillers formés aux dernières technologies',
                  'Approche bienveillante et personnalisée',
                  'Mise à jour continue des compétences',
                  'Partenariat avec les professionnels de santé'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#286D45] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-[#286D45] to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('choufa.stats.title')}</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">{t('choufa.stats.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '5000+', label: t('choufa.stats.people') },
              { icon: Star, number: '98%', label: t('choufa.stats.satisfaction') },
              { icon: Clock, number: '30min', label: t('choufa.stats.duration') },
              { icon: Gift, number: '100%', label: t('choufa.stats.personalized') }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('choufa.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t('choufa.cta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+33000000000"
              className="bg-gradient-to-r from-green-500 to-[#286D45] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Appeler Maintenant
            </a> */}
            {/* <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200">
              Venir au Centre
            </button> */}
          </div>
          <p className="text-sm text-gray-500 mt-4">{t('choufa.cta.tagline')}</p>
        </div>
      </section>
    </div>
  );
};

export default Choufa;