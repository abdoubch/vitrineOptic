import React from 'react';
import { Circle, Eye, Baby, Droplets, UserCheck, CheckCircle, Star, Calendar } from 'lucide-react';

const Contactologie = () => {
  const services = [
    {
      icon: Circle,
      title: 'Lentilles Courantes',
      description: 'Large gamme de lentilles journalières et mensuelles pour tous les types de corrections visuelles.'
    },
    {
      icon: Eye,
      title: 'Lentilles Sur Prescription',
      description: 'Lentilles spécialisées sur prescription médicale pour corrections spécifiques et pathologies.'
    },
    {
      icon: Baby,
      title: 'Lentilles Enfants',
      description: 'Solutions adaptées aux enfants avec accompagnement personnalisé pour un port optimal et sécurisé.'
    },
    {
      icon: UserCheck,
      title: 'Adaptation & Suivi',
      description: 'Adaptation personnalisée avec suivi régulier pour garantir confort, santé oculaire et satisfaction.'
    }
  ];

  const lensTypes = [
    {
      type: 'Journalières',
      image: 'https://images.pexels.com/photos/13816069/pexels-photo-13816069.jpeg',
      benefits: ['Hygiène optimale', 'Confort quotidien', 'Pas d\'entretien']
    },
    {
      type: 'Mensuelles',
      image: 'https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg',
      benefits: ['Économiques', 'Haute qualité', 'Personnalisables']
    },
    {
      type: 'Spécialisées',
      image: 'https://images.pexels.com/photos/3952220/pexels-photo-3952220.jpeg',
      benefits: ['Sur mesure', 'Corrections complexes', 'Suivi médical']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-8">
              <Circle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Contactologie
              </span>
            </h1>
            <p className="text-2xl text-indigo-600 font-medium mb-6">Expertise Lentilles</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une expertise spécialisée pour l'adaptation et le suivi des lentilles de contact. 
              Solutions personnalisées pour tous les âges avec un accompagnement professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Lens Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types de Lentilles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète adaptée à tous vos besoins visuels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lensTypes.map((lens, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={lens.image} 
                    alt={`Lentilles ${lens.type}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{lens.type}</h3>
                  <ul className="space-y-2">
                    {lens.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Contactologie</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet de l'adaptation au suivi pour une expérience optimale des lentilles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-100">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Processus d'Adaptation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement étape par étape pour une adaptation réussie et durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Bilan Initial', desc: 'Examen complet et évaluation des besoins' },
              { step: '2', title: 'Essai & Tests', desc: 'Test de différents types de lentilles' },
              { step: '3', title: 'Formation', desc: 'Apprentissage manipulation et entretien' },
              { step: '4', title: 'Suivi', desc: 'Contrôles réguliers et ajustements' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Produits d'Entretien</h2>
              <div className="space-y-6">
                {[
                  'Solutions multifonctions dernière génération',
                  'Produits d\'entretien spécialisés par type',
                  'Accessoires de manipulation et rangement',
                  'Conseils personnalisés d\'utilisation',
                  'Gamme complète pour tous budgets',
                  'Formation à l\'hygiène et sécurité'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Droplets className="w-6 h-6 text-purple-200 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3952220/pexels-photo-3952220.jpeg" 
                alt="Produits d'entretien lentilles"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm">Références Produits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vitrine Dédiée</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Espace d'exposition spécialement conçu pour découvrir notre gamme complète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <Star className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exposition Interactive</h3>
              <p className="text-gray-600">Découvrez et testez nos produits</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Démonstrations</h3>
              <p className="text-gray-600">Sessions d'information régulières</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-indigo-50 rounded-2xl p-8">
              <UserCheck className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conseil Expert</h3>
              <p className="text-gray-600">Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Découvrez la Liberté des Lentilles
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Nos experts contactologues vous accompagnent pour trouver la solution parfaite 
            et vivre pleinement votre quotidien sans contrainte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Essai Gratuit
            </button>
            {/* <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-200">
              Prendre Rendez-vous
            </button> */}
          </div>
          <p className="text-sm text-indigo-100 mt-4">
            Première adaptation • Suivi inclus • Garantie satisfaction
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contactologie;