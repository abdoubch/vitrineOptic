import React from 'react';
import { Heart, Shield, Smile, Star, CheckCircle, Baby } from 'lucide-react';

const OptiKids = () => {
  const services = [
    {
      icon: Shield,
      title: 'Verres Correcteurs Enfants',
      description: 'Verres sous prescription spécialement conçus pour les enfants, résistants et légers pour un confort optimal.'
    },
    {
      icon: Star,
      title: 'Lunettes Solaires Enfant',
      description: 'Protection optimale contre les rayons UV avec des designs ludiques et colorés qui plaisent aux enfants.'
    },
    {
      icon: Heart,
      title: 'Accessoires Adaptés',
      description: 'Large choix d\'accessoires : cordons colorés, étuis ludiques, lingettes spéciales pour enfants.'
    },
    {
      icon: Smile,
      title: 'Pré-tests Visuels Ludiques',
      description: 'Examens visuels sous forme de jeux pour mettre l\'enfant en confiance avant l\'examen complet.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mb-8">
              <Baby className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                OptiKids
              </span>
            </h1>
            <p className="text-2xl text-orange-600 font-medium mb-6">Vision de l'Enfant</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un espace coloré et chaleureux pensé spécialement pour nos jeunes patients. 
              Nous accompagnons les enfants dans leur développement visuel avec douceur et professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5621851/pexels-photo-5621851.jpeg" 
              alt="Enfant chez l'opticien"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Un Environnement Adapté</h3>
                <p className="text-lg opacity-90">Confort, sécurité et bienveillance pour vos enfants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services OptiKids</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions spécialement adaptées aux besoins visuels des enfants, dans un cadre rassurant et ludique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-6">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Pourquoi Choisir OptiKids ?</h2>
              <div className="space-y-6">
                {[
                  'Équipe spécialisée dans la vision infantile',
                  'Environnement ludique et rassurant',
                  'Matériel adapté aux enfants',
                  'Prise en charge bienveillante',
                  'Gamme complète d\'équipements enfants',
                  'Suivi personnalisé de la croissance visuelle'
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
                src="https://plus.unsplash.com/premium_photo-1661376914195-12bfad12ca36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Enfant avec des lunettes"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Satisfaction Parents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prenez Rendez-vous pour Votre Enfant
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Notre équipe OptiKids est là pour accompagner votre enfant dans sa découverte du monde de la vision, 
            avec douceur et professionnalisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+33000000000"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Appeler OptiKids
            </a> */}
            {/* <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-200">
              Prendre RDV en ligne
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptiKids;