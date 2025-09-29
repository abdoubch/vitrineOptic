import { Heart, Shield, Smile, Star, CheckCircle, Baby } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const OptiKids = () => {
  const { t } = useLanguage();
  const services = [
  {
    icon: Shield,
    title: 'Verres Correcteurs Enfants',
    description: 'Verres sous prescription spécialement conçus pour les enfants, résistants et légers pour un confort optimal.',
    image: 'data:image/jpeg;base64,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'
  },
  {
    icon: Star,
    title: 'Lunettes Solaires Enfant',
    description: 'Protection optimale contre les rayons UV avec des designs ludiques et colorés qui plaisent aux enfants.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DUOos_IgwfHhKXS7tk4hBwmeCx16-2KEDV8xWauB5VWmiETzG0LxDNR82roKeiuEuP0&usqp=CAU'
  },
  {
    icon: Heart,
    title: 'Accessoires Adaptés',
    description: 'Large choix d\'accessoires : cordons colorés, étuis ludiques, lingettes spéciales pour enfants.',
    image: 'https://media.istockphoto.com/id/1359234676/fr/photo/un-gar%C3%A7on-caucasien-allong%C3%A9-sur-le-sol-%C3%A0-la-maison-dans-la-journ%C3%A9e-en-train-de-lire-un-livre.jpg?b=1&s=612x612&w=0&k=20&c=zUwcEgTQoWLdVsMri3MWjBZRLXQSGQ9CD3a1fN6Nuzs='
  },
  {
    icon: Smile,
    title: 'Pré-tests Visuels Ludiques',
    description: 'Examens visuels sous forme de jeux pour mettre l\'enfant en confiance avant l\'examen complet.',
    image: 'https://media.istockphoto.com/id/1450677481/fr/photo/jeune-fille-lunettes-et-vision-avec-monture-et-lentille-magasinage-de-lunettes-avec-soins.jpg?b=1&s=612x612&w=0&k=20&c=sSNfDFdWXNZG9AK2sYTFOwdFolODwVWMtTw0LKEZyuU='
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
              {t('optikids.title.pole')}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                {t('optikids.title.name')}
              </span>
            </h1>
            <p className="text-2xl text-orange-600 font-medium mb-6">{t('optikids.subtitle')}</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('optikids.hero.desc')}</p>
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
                <h3 className="text-3xl font-bold mb-2">{t('optikids.overlay.title')}</h3>
                <p className="text-lg opacity-90">{t('optikids.overlay.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('optikids.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('optikids.services.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('optikids.features.title')}</h2>
              <div className="space-y-6">
                {[
                  t('optikids.feature.1'),
                  t('optikids.feature.2'),
                  t('optikids.feature.3'),
                  t('optikids.feature.4'),
                  t('optikids.feature.5'),
                  t('optikids.feature.6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#286D45] flex-shrink-0" />
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
          <h2 className="text-4xl font-bold text-white mb-6">{t('optikids.cta.title')}</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">{t('optikids.cta.desc')}</p>
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