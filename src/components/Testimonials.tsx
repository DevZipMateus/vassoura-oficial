
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'Vassouras - RJ',
    text: 'Produtos de excelente qualidade! Minha casa fica impecável e ainda economizo tempo na limpeza.',
    rating: 5,
    delay: '0s'
  },
  {
    id: 2,
    name: 'Ana Santos',
    location: 'Vassouras - RJ',
    text: 'Atendimento maravilhoso e produtos que realmente funcionam. Recomendo para todas as donas de casa!',
    rating: 5,
    delay: '0.1s'
  },
  {
    id: 3,
    name: 'Carla Oliveira',
    location: 'Vassouras - RJ',
    text: 'A entrega é rápida e os preços são justos. Não troco por nenhuma outra empresa!',
    rating: 5,
    delay: '0.2s'
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-yellow-100 text-yellow-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Depoimentos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A satisfação dos nossos clientes é a nossa maior recompensa. 
            Veja alguns depoimentos de quem já confia na Vassouras Nova Del Rei.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 rounded-xl p-6 sm:p-8 relative animate-fade-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                <div className="bg-red-600 p-2 sm:p-3 rounded-full">
                  <Quote className="text-white" size={16} />
                </div>
              </div>
              
              <div className="pt-4 sm:pt-6">
                <div className="flex mb-3 sm:mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-12 sm:mt-16 px-4">
          <div className="bg-red-50 rounded-xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Faça parte dos nossos clientes satisfeitos!
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Entre em contato conosco e descubra como podemos facilitar a limpeza da sua casa.
            </p>
            <a 
              href="https://wa.me/553288871570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all inline-flex items-center gap-2 sm:gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
