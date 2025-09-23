import React from 'react';
import { Glasses, Sparkles, Sun, Wrench, CheckCircle, Users } from 'lucide-react';

const OptiqueAdultes = () => {
  const services = [
    {
      icon: Glasses,
      title: 'Montures Variées',
      description: 'Large sélection de montures pour tous les styles : classiques, modernes ou haut de gamme. Trouvez la monture qui vous correspond.'
    },
    {
      icon: Sparkles,
      title: 'Verres Sur-Mesure',
      description: 'Verres correcteurs standards et personnalisés : fort indice, verres prismatiques, progressifs selon vos besoins.'
    },
    {
      icon: Sun,
      title: 'Lunettes Solaires',
      description: 'Gamme complète homme & femme, correctrices ou non, adaptées à tous vos usages : conduite, sport, loisirs.'
    },
    {
      icon: Wrench,
      title: 'Accessoires & Entretien',
      description: 'Tous les accessoires et produits d\'entretien pour un confort d\'utilisation optimal et une durabilité maximale.'
    }
  ];

  const collections = [
    {
      name: 'Collection Classique',
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
      description: 'Élégance intemporelle'
    },
    {
      name: 'Collection Moderne',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
      description: 'Design contemporain'
    },
    {
      name: 'Collection Premium',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
      description: 'Luxe et raffinement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Optique Adultes
              </span>
            </h1>
            <p className="text-2xl text-sky-600 font-medium mb-6">Solutions Complètes</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un service complet pour les besoins visuels des hommes et des femmes, 
              alliant esthétique, précision technique et confort au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nos Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90">{collection.description}</p>
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
              Une expertise technique de pointe pour répondre à tous vos besoins visuels avec élégance et précision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-sky-100">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg" 
                alt="Consultation optique adulte"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-sky-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm">Années d'Expertise</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Excellence & Savoir-faire</h2>
              <div className="space-y-6">
                {[
                  'Conseil personnalisé selon votre style de vie',
                  'Technologies de pointe pour verres sur-mesure',
                  'Large gamme de marques reconnues',
                  'Ajustements précis et confort optimal',
                  'Garantie satisfaction et suivi régulier',
                  'Réparations et maintenance professionnelles'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies Avancées</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Équipements de dernière génération pour des solutions visuelles de haute précision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Verres Progressifs', desc: 'Dernière génération pour un confort visuel optimal' },
              { title: 'Traitement Anti-reflets', desc: 'Technologies avancées pour une vision pure' },
              { title: 'Verres Photochromiques', desc: 'Adaptation automatique à la luminosité' }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-300">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Découvrez Notre Expertise Optique
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Nos conseillers experts vous accompagnent pour trouver la solution visuelle parfaite, 
            alliant style, confort et performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Prendre Rendez-vous
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-sky-600 transition-all duration-200">
              Voir Nos Collections
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptiqueAdultes;