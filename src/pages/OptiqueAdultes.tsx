import { Glasses, Sparkles, Sun, Wrench, CheckCircle, Users } from 'lucide-react';

const OptiqueAdultes = () => {
  const services = [
    {
      icon: Glasses,
      title: 'Montures Variées',
      description: 'Large sélection de montures pour tous les styles : classiques, modernes ou haut de gamme. Trouvez la monture qui vous correspond.',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop&crop=center'
    },
    {
  icon: Sparkles,
  title: 'Verres Sur-Mesure',
  description: 'Verres correcteurs standards et personnalisés : fort indice, verres prismatiques, progressifs selon vos besoins.',
  image: 'data:image/jpeg;base64,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'
},
    {
      icon: Sun,
      title: 'Lunettes Solaires',
      description: 'Gamme complète homme & femme, correctrices ou non, adaptées à tous vos usages : conduite, sport, loisirs.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop&crop=center'
    },
    {
      icon: Wrench,
      title: 'Accessoires & Entretien',
      description: 'Tous les accessoires et produits d\'entretien pour un confort d\'utilisation optimal et une durabilité maximale.',
      image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=800&h=600&fit=crop&crop=center'
    }
  ];

  const collections = [
  {
    name: 'Collection Classique',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop&crop=center',
    description: 'Élégance intemporelle'
  },
  {
    name: 'Collection Moderne',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=600&fit=crop&crop=center',
    description: 'Design contemporain'
  },
  {
    name: 'Collection Premium',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&crop=center',
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
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{service.description}</p>
                    <div className="w-full h-48 rounded-xl overflow-hidden">
                      <img 
                        src={service.image} 
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

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="data:image/jpeg;base64,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" 
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
            {/* <button className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Prendre Rendez-vous
            </button> */}
            {/* <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-sky-600 transition-all duration-200">
              Voir Nos Collections
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptiqueAdultes;