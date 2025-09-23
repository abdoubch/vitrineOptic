import React from 'react';
import { Heart, Shield, Users2, Handshake, CheckCircle, Smile } from 'lucide-react';

const Senior = () => {
  const services = [
    {
      icon: Heart,
      title: 'Montures Ergonomiques',
      description: 'Montures spécialement sélectionnées pour leur confort, légèreté et facilité d\'adaptation au quotidien.'
    },
    {
      icon: Shield,
      title: 'Solutions Sur-Mesure',
      description: 'Solutions visuelles personnalisées selon les besoins spécifiques et les pathologies de chaque patient.'
    },
    {
      icon: Handshake,
      title: 'Accompagnement Personnalisé',
      description: 'Prise en charge bienveillante avec le temps nécessaire pour expliquer et accompagner chaque étape.'
    },
    {
      icon: Smile,
      title: 'Services Adaptés',
      description: 'Services spécialisés pour répondre aux besoins des personnes en situation de handicap avec empathie.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-8">
              <Users2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Sénior & Besoins Spéciaux
              </span>
            </h1>
            <p className="text-2xl text-emerald-600 font-medium mb-6">Accompagnement Personnalisé</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une prise en charge dédiée aux personnes âgées et aux personnes en situation de handicap, 
              avec une approche bienveillante et des solutions adaptées à chaque situation.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg" 
              alt="Accompagnement personne senior"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Bienveillance & Expertise</h3>
                <p className="text-lg opacity-90">Un accompagnement humain pour chaque besoin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Approche Spécialisée</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous adaptons nos services et notre accompagnement pour offrir le meilleur confort visuel 
              à nos patients seniors et personnes à besoins spéciaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-emerald-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Engagement</h2>
              <div className="space-y-6">
                {[
                  'Équipe formée aux besoins spécifiques',
                  'Temps d\'écoute et de conseil prolongé',
                  'Solutions techniques adaptées',
                  'Accompagnement familial inclus',
                  'Suivi régulier et personnalisé',
                  'Accessibilité et confort prioritaires',
                  'Partenariat avec les professionnels de santé',
                  'Matériel et équipements ergonomiques'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3952240/pexels-photo-3952240.jpeg" 
                alt="Consultation senior personnalisée"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Satisfaction Familles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Spécialités</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Des solutions techniques et humaines adaptées à chaque situation particulière.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Basse Vision', desc: 'Aides techniques spécialisées' },
              { title: 'Presbytie Avancée', desc: 'Solutions progressives optimisées' },
              { title: 'Pathologies Oculaires', desc: 'Accompagnement spécialisé' },
              { title: 'Handicap Visuel', desc: 'Adaptations personnalisées' }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Un Accompagnement Humain et Professionnel
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe dédiée prend le temps nécessaire pour vous accompagner ou accompagner votre proche 
            dans le choix des meilleures solutions visuelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+33000000000"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Nous Contacter
            </a> */}
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200">
              Demander un Devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Senior;