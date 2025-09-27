import { Smartphone, Monitor, Camera, Wifi, CheckCircle, Zap, Cpu } from 'lucide-react';

const InteractifOptitech = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps interactives pour simulation de montures, tests visuels et suivi de votre santé oculaire en temps réel.'
    },
    {
      icon: Monitor,
      title: 'Réalité Augmentée',
      description: 'Essayage virtuel de montures, simulation de verres et visualisation 3D de vos futures lunettes.'
    },
    {
      icon: Camera,
      title: 'Diagnostic Digital',
      description: 'Technologies d\'imagerie avancées pour examens précis et détection précoce des troubles visuels.'
    },
    {
      icon: Wifi,
      title: 'Connectivité IoT',
      description: 'Lunettes connectées, suivi automatique de l\'usage et alertes personnalisées pour votre confort.'
    }
  ];

  const technologies = [
    {
      name: 'Essayage Virtuel',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      description: 'Réalité augmentée pour essayer vos lunettes'
    },
    {
      name: 'Diagnostic IA',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      description: 'Intelligence artificielle pour analyses précises'
    },
    {
      name: 'Apps Interactives',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      description: 'Applications mobiles pour votre suivi'
    }
  ];

  const innovations = [
    'Scan 3D du visage pour montures sur-mesure',
    'Réalité augmentée pour essayage virtuel',
    'Applications mobiles de suivi visuel',
    'Lunettes connectées avec capteurs',
    'Diagnostic assisté par intelligence artificielle',
    'Plateforme de télémédecine optique'
  ];

  const features = [
    {
      icon: Cpu,
      title: 'Intelligence Artificielle',
      desc: 'Algorithmes avancés pour diagnostic et recommandations personnalisées'
    },
    {
      icon: Zap,
      title: 'Technologies Immersives',
      desc: 'Réalité augmentée et virtuelle pour une expérience unique'
    },
    {
      icon: Monitor,
      title: 'Interface Digitale',
      desc: 'Plateformes intuitives pour une prise en charge moderne'
    },
    {
      icon: Wifi,
      title: 'Connectivité Totale',
      desc: 'Intégration IoT pour un suivi continu et personnalisé'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-8">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Interactif & Optitech
              </span>
            </h1>
            <p className="text-2xl text-purple-600 font-medium mb-6">Innovation & Technologie</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              L'avenir de l'optique est là ! Découvrez nos solutions technologiques avancées 
              qui révolutionnent votre expérience visuelle et votre suivi de santé.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nos Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm opacity-90">{tech.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Innovants</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions technologiques de pointe pour une expérience optique moderne et personnalisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                alt="Technologies interactives optiques"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">2024</p>
                <p className="text-sm">Innovation</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Innovations Révolutionnaires</h2>
              <div className="space-y-4">
                {innovations.map((innovation, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{innovation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies de Pointe</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des solutions technologiques avancées pour révolutionner votre expérience optique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Applications Interactives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos applications mobiles qui transforment votre expérience optique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'OCOA Vision',
                desc: 'Test de vision personnalisé et suivi de votre santé oculaire',
                features: ['Tests visuels interactifs', 'Rappels de consultation', 'Historique médical']
              },
              {
                title: 'OCOA Try-On',
                desc: 'Essayage virtuel de montures avec réalité augmentée',
                features: ['Scan 3D du visage', 'Essayage en temps réel', 'Partage sur réseaux sociaux']
              },
              {
                title: 'OCOA Connect',
                desc: 'Plateforme de télémédecine et consultation à distance',
                features: ['Consultation vidéo', 'Prescription digitale', 'Suivi personnalisé']
              }
            ].map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h3>
                <p className="text-gray-600 mb-6">{app.desc}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Découvrez l'Avenir de l'Optique
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Plongez dans l'univers des technologies optiques de demain et vivez une expérience 
            visuelle révolutionnaire avec nos solutions interactives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Télécharger nos Apps
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-200">
              Découvrir les Technologies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractifOptitech;
