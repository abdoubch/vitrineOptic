import React from 'react';
import { Volume2, Ear, Settings, Heart, CheckCircle, Award, Users, Shield } from 'lucide-react';

const Audioprothese = () => {
  const services = [
    {
      icon: Ear,
      title: 'Bilan Auditif Complet',
      description: 'Évaluation précise de votre audition et prise d\'empreinte pour un ajustement parfait de vos futurs appareils.'
    },
    {
      icon: Volume2,
      title: 'Appareils Dernière Génération',
      description: 'Appareils auditifs modernes, discrets et performants avec les dernières innovations technologiques.'
    },
    {
      icon: Heart,
      title: 'Accessoires & Entretien',
      description: 'Gamme complète d\'accessoires et produits d\'entretien pour optimiser le fonctionnement de vos appareils.'
    },
    {
      icon: Settings,
      title: 'Réglages & Suivi',
      description: 'Ajustements réguliers et suivi personnalisé pour un confort auditif optimal au quotidien.'
    }
  ];

  const technologies = [
    {
      name: 'Bluetooth',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr_BLdgZryOMsOJS0zVazYWc7zCmsKM5oyA&s',
      description: 'Connexion directe avec smartphones et appareils'
    },
    {
      name: 'Intelligence Artificielle',
      image: 'https://images.pexels.com/photos/3952220/pexels-photo-3952220.jpeg',
      description: 'Adaptation automatique aux environnements'
    },
    {
      name: 'Miniaturisation',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
      description: 'Discrétion maximale et confort optimal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-8">
              <Volume2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Audioprothèse
              </span>
            </h1>
            <p className="text-2xl text-purple-600 font-medium mb-6">Santé Auditive</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un accompagnement auditif moderne et personnalisé avec les dernières technologies. 
              Retrouvez le plaisir d'entendre avec des solutions sur-mesure et discrètes.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://seniorglobe.com/wp-content/uploads/2023/07/consulter-un-audioprothesiste-img-01.jpg" 
              alt="Consultation audioprothèse"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Expertise Auditive</h3>
                <p className="text-lg opacity-90">Solutions personnalisées et modernes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Auditifs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet de l'évaluation à l'adaptation pour retrouver une audition optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies Avancées</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les dernières innovations en audioprothèse pour un confort d'écoute exceptionnel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Processus d'Appareillage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement étape par étape pour une solution auditive parfaitement adaptée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Bilan', desc: 'Évaluation auditive complète' },
              { step: '2', title: 'Conseils', desc: 'Recommandations personnalisées' },
              { step: '3', title: 'Essai', desc: 'Test des appareils sélectionnés' },
              { step: '4', title: 'Réglages', desc: 'Ajustements précis et formation' },
              { step: '5', title: 'Suivi', desc: 'Contrôles et maintenance réguliers' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Notre Expertise</h2>
              <div className="space-y-6">
                {[
                  'Audioprothésistes diplômés d\'État',
                  'Formation continue aux nouvelles technologies',
                  'Partenariat avec les meilleurs fabricants',
                  'Suivi personnalisé et bienveillant',
                  'Garanties étendues et service après-vente',
                  'Prise en charge administrative simplifiée',
                  'Essai gratuit sans engagement',
                  'Réparations et maintenance sur site'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-pink-200 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg" 
                alt="Expert audioprothésiste"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-pink-500 to-purple-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Avantages de Nos Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez une qualité de vie optimale avec nos appareils auditifs dernière génération.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Discrétion', desc: 'Appareils quasi invisibles' },
              { icon: Award, title: 'Performance', desc: 'Qualité sonore exceptionnelle' },
              { icon: Users, title: 'Confort', desc: 'Port agréable toute la journée' },
              { icon: Settings, title: 'Connectivité', desc: 'Compatible tous appareils' }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Retrouvez le Plaisir d'Entendre
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Nos experts audioprothésistes vous accompagnent pour retrouver une audition claire 
            et profiter pleinement de tous les sons de la vie.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Bilan Auditif Gratuit
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-200">
              Essai Sans Engagement
            </button>
          </div> */}
          {/* <p className="text-sm text-purple-100 mt-4">
            Prise en charge Sécurité Sociale • Aide financière possible • Garantie satisfaction
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default Audioprothese;