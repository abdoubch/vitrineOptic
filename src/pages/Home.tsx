import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Heart, Users, Shield, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'OptiKids',
      subtitle: 'Vision de l\'Enfant',
      description: 'Un espace pensé pour les plus jeunes avec des soins adaptés et ludiques.',
      image: 'https://plus.unsplash.com/premium_photo-1661587216211-7d68c0864a05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/optikids',
      color: 'from-orange-400 to-pink-500'
    },
    {
      title: 'Optique Adultes',
      subtitle: 'Solutions Complètes',
      description: 'Montures élégantes et verres de haute qualité pour tous les styles.',
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
      link: '/optique-adultes',
      color: 'from-sky-400 to-emerald-500'
    },
    {
      title: 'Sénior & Besoins Spéciaux',
      subtitle: 'Accompagnement Personnalisé',
      description: 'Prise en charge dédiée avec solutions ergonomiques adaptées.',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
      link: '/senior',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Conseil "Choufa"',
      subtitle: 'Service Gratuit',
      description: 'Conseils personnalisés et orientation par nos experts.',
      image: 'https://images.pexels.com/photos/3952220/pexels-photo-3952220.jpeg',
      link: '/choufa',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Ophtalmologie',
      subtitle: 'Suivi Médical',
      description: 'Consultations spécialisées et examens complets par nos médecins.',
      image: 'https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg',
      link: '/ophtalmologie',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Contactologie',
      subtitle: 'Expertise Lentilles',
      description: 'Adaptation et suivi personnalisé pour tous types de lentilles.',
      image: 'https://images.pexels.com/photos/13816069/pexels-photo-13816069.jpeg',
      link: '/contactologie',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Audioprothèse',
      subtitle: 'Santé Auditive',
      description: 'Solutions auditives modernes avec suivi personnalisé.',
      image: 'https://seniorglobe.com/wp-content/uploads/2023/07/consulter-un-audioprothesiste-img-01.jpg',
      link: '/audioprothese',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bienvenue au{' '}
              <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Centre OCOA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Votre centre de référence en santé visuelle et auditive. 
              Une prise en charge complète pour toute la famille avec nos 7 pôles spécialisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/choufa"
                className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Conseil Gratuit "Choufa"
              </Link>
              {/* <Link 
              to="/ophtalmologie"
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-sky-300 hover:text-sky-600 transition-all duration-200"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir le Centre OCOA ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre approche personnalisée font la différence dans votre parcours de soins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: 'Expertise', desc: '7 pôles spécialisés pour une prise en charge complète' },
              { icon: Heart, title: 'Bienveillance', desc: 'Une approche humaine et personnalisée pour chaque patient' },
              { icon: Users, title: 'Tous Âges', desc: 'Des solutions adaptées de l\'enfance au grand âge' },
              { icon: Shield, title: 'Qualité', desc: 'Équipements de pointe et professionnels qualifiés' }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Spécialisés</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos 7 pôles d'expertise pour répondre à tous vos besoins en santé visuelle et auditive.
            </p>
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
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm font-medium text-sky-600 mb-2">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Prendre Soin de Votre Vision et Audition ?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un conseil personnalisé ou pour prendre rendez-vous avec l'un de nos spécialistes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/choufa"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Conseil Gratuit
            </Link>
            {/* <a 
              href="tel:+33000000000"
              className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-sky-600 transition-all duration-200"
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