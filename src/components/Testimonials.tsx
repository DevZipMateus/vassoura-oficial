
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
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg">
            A satisfação dos nossos clientes é a nossa maior recompensa. 
            Veja alguns depoimentos de quem já confia na Vassouras Nova Del Rei.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 rounded-xl p-8 relative animate-fade-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-red-600 p-3 rounded-full">
                  <Quote className="text-white" size={20} />
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Faça parte dos nossos clientes satisfeitos!
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e descubra como podemos facilitar a limpeza da sua casa.
            </p>
            <a 
              href="https://wa.me/553288871570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all inline-flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
