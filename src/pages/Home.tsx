import { Link } from 'react-router-dom';
import { Eye, Heart, Users, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('home.svc.optikids.title'),
      subtitle: t('home.svc.optikids.subtitle'),
      description: t('home.svc.optikids.desc'),
      image: 'https://plus.unsplash.com/premium_photo-1661587216211-7d68c0864a05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/optikids',
      color: 'from-orange-400 to-pink-500'
    },
    {
      title: t('home.svc.adult.title'),
      subtitle: t('home.svc.adult.subtitle'),
      description: t('home.svc.adult.desc'),
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
      link: '/optique-adultes',
      color: 'from-[#AF9866] to-[#286D45]'
    },
    {
      title: t('home.svc.senior.title'),
      subtitle: t('home.svc.senior.subtitle'),
      description: t('home.svc.senior.desc'),
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
      link: '/senior',
      color: 'from-[#286D45] to-teal-500'
    },
    {
      title: t('home.svc.choufa.title'),
      subtitle: t('home.svc.choufa.subtitle'),
      description: t('home.svc.choufa.desc'),
      image: 'https://images.pexels.com/photos/3952220/pexels-photo-3952220.jpeg',
      link: '/choufa',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: t('home.svc.ophtalmo.title'),
      subtitle: t('home.svc.ophtalmo.subtitle'),
      description: t('home.svc.ophtalmo.desc'),
      image: 'https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg',
      link: '/ophtalmologie',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: t('home.svc.contactologie.title'),
      subtitle: t('home.svc.contactologie.subtitle'),
      description: t('home.svc.contactologie.desc'),
      image: 'https://images.pexels.com/photos/13816069/pexels-photo-13816069.jpeg',
      link: '/contactologie',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: t('home.svc.audio.title'),
      subtitle: t('home.svc.audio.subtitle'),
      description: t('home.svc.audio.desc'),
      image: 'https://seniorglobe.com/wp-content/uploads/2023/07/consulter-un-audioprothesiste-img-01.jpg',
      link: '/audioprothese',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: t('home.svc.pro.title'),
      subtitle: t('home.svc.pro.subtitle'),
      description: t('home.svc.pro.desc'),
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      link: '/professionnel-sportif',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: t('home.svc.tech.title'),
      subtitle: t('home.svc.tech.subtitle'),
      description: t('home.svc.tech.desc'),
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      link: '/interactif-optitech',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#AF9866]/10 via-white to-[#286D45]/10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('home.hero.title.1')}{' '}
              <span className="bg-gradient-to-r from-[#AF9866] to-[#286D45] bg-clip-text text-transparent">
                {t('home.hero.title.2')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">{t('home.hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/choufa"
                className="bg-gradient-to-r from-[#AF9866] to-[#286D45] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#AF9866]/90 hover:to-[#286D45]/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t('home.hero.cta')}
              </Link>
              {/* <Link 
              to="/ophtalmologie"
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#AF9866] hover:text-[#AF9866] transition-all duration-200"
              >
                Prendre Rendez-vous
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.values.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.values.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: t('home.values.expertise'), desc: '9 pôles spécialisés pour une prise en charge complète' },
              { icon: Heart, title: t('home.values.care'), desc: 'Une approche humaine et personnalisée pour chaque patient' },
              { icon: Users, title: t('home.values.allAges'), desc: "Des solutions adaptées de l'enfance au grand âge" },
              { icon: Shield, title: t('home.values.quality'), desc: 'Équipements de pointe et professionnels qualifiés' }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#AF9866] to-[#286D45] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.services.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#AF9866] group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm font-medium text-[#AF9866] mb-2">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#AF9866] to-[#286D45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t('home.cta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/choufa"
              className="bg-white text-[#AF9866] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {t('home.cta.button')}
            </Link>
            {/* <a 
              href="tel:+33000000000"
              className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-[#AF9866] transition-all duration-200"
            >
              Nous Appeler
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;