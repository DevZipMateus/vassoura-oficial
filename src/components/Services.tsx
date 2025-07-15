
import React from 'react';
import { Sparkles, Home, ShoppingCart, Truck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Produtos de Limpeza',
    description: 'Linha completa de produtos para todas as necessidades de limpeza da sua casa.',
    icon: Sparkles,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Organização Doméstica',
    description: 'Soluções práticas para manter sua casa sempre organizada e funcional.',
    icon: Home,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Atendimento Personalizado',
    description: 'Consultoria para escolher os melhores produtos para suas necessidades específicas.',
    icon: ShoppingCart,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Entrega Rápida',
    description: 'Entregamos seus produtos com agilidade e segurança na sua residência.',
    icon: Truck,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Soluções completas para sua casa
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Oferecemos uma gama completa de produtos e serviços para manter sua casa sempre limpa, 
            organizada e com o melhor custo-benefício.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in border border-gray-100"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-red-100 p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-6">
                <service.icon className="text-red-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <a 
            href="https://wa.me/553288871570" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 sm:gap-3 font-semibold inline-flex shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
          >
            <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Fale com nossos especialistas</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
