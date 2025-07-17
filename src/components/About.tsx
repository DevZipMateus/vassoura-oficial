
import React from 'react';
import { Shield, Heart, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              Vassouras Nova Del Rei
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg animate-fade-in leading-relaxed" style={{
              animationDelay: '0.2s'
            }}>
              Trabalhamos com uma linha completa de produtos para facilitar a vida das nossas donas de casa. 
              Nossa missão é oferecer produtos de qualidade que tornem a limpeza mais eficiente e prática.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg animate-fade-in leading-relaxed" style={{
              animationDelay: '0.3s'
            }}>
              Com anos de experiência no mercado, sabemos exatamente o que você precisa para manter 
              sua casa sempre limpa e organizada. Nosso compromisso é com a sua satisfação.
            </p>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.4s'
              }}>
                <div className="bg-red-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Shield className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Qualidade Garantida</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Produtos testados e aprovados</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.5s'
              }}>
                <div className="bg-yellow-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Heart className="text-yellow-600" size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Atendimento Personalizado</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Cuidado especial com cada cliente</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.6s'
              }}>
                <div className="bg-red-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Clock className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Entrega Rápida</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Produtos quando você precisar</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.7s'
              }}>
                <div className="bg-yellow-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Award className="text-yellow-600" size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Melhor Preço</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Qualidade com economia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in" style={{
            animationDelay: '0.8s'
          }}>
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <div className="bg-red-200/50 w-full h-full absolute -left-3 sm:-left-4 lg:-left-6 -top-3 sm:-top-4 lg:-top-6 rounded-lg"></div>
              <div className="relative z-10 aspect-[4/3] rounded-lg shadow-lg overflow-hidden bg-gray-100">
                <img 
                  alt="Produtos de limpeza organizados - Vassouras Nova Del Rei" 
                  className="w-full h-full object-contain p-2" 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 z-20 animate-float hidden sm:block">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Satisfação Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
