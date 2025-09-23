import React from 'react';
import { Gift, Eye, UserCheck, MessageCircle, CheckCircle, Star, Users, Clock } from 'lucide-react';

const Choufa = () => {
  const services = [
    {
      icon: Eye,
      title: 'Conseils Visuels Personnalisés',
      description: 'Conseils adaptés pour le confort visuel et la prévention par nos optométristes et orthoptistes qualifiés.'
    },
    {
      icon: UserCheck,
      title: 'Orientation Professionnelle',
      description: 'Orientation vers les solutions les plus appropriées selon vos besoins et votre situation spécifique.'
    },
    {
      icon: MessageCircle,
      title: 'Écoute & Accompagnement',
      description: 'Prise en charge bienveillante avec écoute active et accompagnement dans vos choix de santé visuelle.'
    },
    {
      icon: Gift,
      title: 'Service 100% Gratuit',
      description: 'Tous nos conseils et notre expertise sont offerts gratuitement, sans aucun engagement de votre part.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-8">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                "Choufa"
              </span>
            </h1>
            <p className="text-2xl text-green-600 font-medium mb-6">Conseil Visuel Gratuit</p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold mb-8">
              <Gift className="w-5 h-5 mr-2" />
              SERVICE 100% GRATUIT
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un espace de conseil et d'accompagnement entièrement gratuit où nos experts vous guident 
              dans vos choix de santé visuelle, sans aucune obligation d'achat.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3952220/pexels-photo-3952220.jpeg" 
              alt="Conseil visuel gratuit"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Conseils d'Experts</h3>
                <p className="text-lg opacity-90">Entièrement gratuits, sans engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Gratuits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profitez de l'expertise de nos professionnels pour prendre soin de votre vision, 
              sans aucun frais ni engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
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
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment Ça Marche ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour bénéficier de nos conseils d'experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Prise de Contact', desc: 'Appelez-nous ou venez directement au centre' },
              { step: '2', title: 'Évaluation Gratuite', desc: 'Discussion avec nos experts sur vos besoins' },
              { step: '3', title: 'Conseils Personnalisés', desc: 'Recommandations adaptées à votre situation' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl">
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
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ils Nous Font Confiance</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Des milliers de personnes ont déjà bénéficié de nos conseils gratuits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '5000+', label: 'Personnes conseillées' },
              { icon: Star, number: '98%', label: 'Satisfaction client' },
              { icon: Clock, number: '30min', label: 'Durée moyenne conseil' },
              { icon: Gift, number: '100%', label: 'Gratuit' }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Profitez de Nos Conseils Gratuits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aucune obligation d'achat, aucun frais caché. Juste des conseils d'experts 
            pour prendre soin de votre vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+33000000000"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Appeler Maintenant
            </a>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200">
              Venir au Centre
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Service gratuit • Sans engagement • Conseil personnalisé
          </p>
        </div>
      </section>
    </div>
  );
};

export default Choufa;