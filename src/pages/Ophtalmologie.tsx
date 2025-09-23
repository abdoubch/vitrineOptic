import React from 'react';
import { Stethoscope, Eye, Activity, Shield, CheckCircle, Award, Clock, Users } from 'lucide-react';

const Ophtalmologie = () => {
  const services = [
    {
      icon: Eye,
      title: 'Consultations d\'Ophtalmologie',
      description: 'Examens complets de réfraction, dépistages et diagnostics par nos médecins ophtalmologistes spécialisés.'
    },
    {
      icon: Activity,
      title: 'Orthoptie & Rééducation',
      description: 'Séances de rééducation visuelle et orthoptie pour traiter les troubles de la vision binoculaire.'
    },
    {
      icon: Shield,
      title: 'Suivi des Pathologies',
      description: 'Surveillance et suivi régulier des pathologies oculaires avec orientation thérapeutique adaptée.'
    },
    {
      icon: Stethoscope,
      title: 'Examens Spécialisés',
      description: 'Bilans visuels approfondis avec équipements de pointe pour un diagnostic précis et fiable.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-8">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pôle{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ophtalmologie
              </span>
            </h1>
            <p className="text-2xl text-blue-600 font-medium mb-6">Suivi Médical Spécialisé</p>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold mb-8">
              <Stethoscope className="w-5 h-5 mr-2" />
              SERVICE MÉDICAL PAYANT
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un suivi médical complet assuré par nos spécialistes qualifiés. 
              Consultations, examens et rééducation pour préserver et améliorer votre santé visuelle.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg" 
              alt="Consultation ophtalmologique"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Expertise Médicale</h3>
                <p className="text-lg opacity-90">Diagnostic et soins spécialisés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Médicaux</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une prise en charge médicale complète par des professionnels de santé 
              spécialisés en ophtalmologie et orthoptie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Équipe Médicale</h2>
              <div className="space-y-6">
                {[
                  'Médecins ophtalmologistes diplômés',
                  'Orthoptistes certifiés et expérimentés',
                  'Formation continue aux dernières techniques',
                  'Équipements médicaux de pointe',
                  'Protocoles de soins actualisés',
                  'Collaboration avec spécialistes externes',
                  'Suivi personnalisé et bienveillant',
                  'Prise en charge de toutes les pathologies'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5752290/pexels-photo-5752290.jpeg" 
                alt="Équipe médicale ophtalmologie"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pathologies Prises en Charge</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertise dans le diagnostic et le traitement de nombreuses pathologies oculaires.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Glaucome', desc: 'Dépistage et suivi précoce' },
              { title: 'Cataracte', desc: 'Diagnostic et orientation chirurgicale' },
              { title: 'DMLA', desc: 'Surveillance et traitement' },
              { title: 'Diabète Oculaire', desc: 'Contrôle régulier spécialisé' },
              { title: 'Troubles Binoculaires', desc: 'Rééducation orthoptique' },
              { title: 'Sécheresse Oculaire', desc: 'Traitement et soulagement' }
            ].map((pathology, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{pathology.title}</h3>
                <p className="text-gray-600 text-center text-sm">{pathology.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Équipements de Pointe</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Technologies médicales avancées pour des examens précis et fiables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'OCT', desc: 'Tomographie de cohérence optique' },
              { icon: Eye, title: 'Champ Visuel', desc: 'Périmètrie automatisée' },
              { icon: Activity, title: 'Topographie', desc: 'Analyse cornéenne précise' },
              { icon: Shield, title: 'Rétinographe', desc: 'Imagerie du fond d\'œil' }
            ].map((equipment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <equipment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{equipment.title}</h3>
                <p className="text-blue-100 text-sm">{equipment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rendez-vous Rapides</h3>
              <p className="text-gray-600">Délais d'attente optimisés</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prise en Charge</h3>
              <p className="text-gray-600">Sécurité sociale et mutuelles</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Urgences</h3>
              <p className="text-gray-600">Consultations d'urgence possibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prenez Rendez-vous avec Nos Spécialistes
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe médicale vous accompagne pour préserver et améliorer votre santé visuelle 
            avec des soins personnalisés et de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+33000000000"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Prendre Rendez-vous
            </a> */}
            <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
              Urgence Oculaire
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            Conventionné Sécurité Sociale • Tiers payant accepté
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ophtalmologie;