
import React from 'react';
import { Shield, Heart, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              Vassouras Nova Del Rei
            </h2>
            <p className="text-gray-600 mb-6 text-lg animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              Trabalhamos com uma linha completa de produtos para facilitar a vida das nossas donas de casa. 
              Nossa missão é oferecer produtos de qualidade que tornem a limpeza mais eficiente e prática.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
              Com anos de experiência no mercado, sabemos exatamente o que você precisa para manter 
              sua casa sempre limpa e organizada. Nosso compromisso é com a sua satisfação.
            </p>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.4s'
              }}>
                <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Shield className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
                  <p className="text-gray-600">Produtos testados e aprovados</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.5s'
              }}>
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Heart className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cuidado especial com cada cliente</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.6s'
              }}>
                <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Entrega Rápida</h4>
                  <p className="text-gray-600">Produtos quando você precisar</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.7s'
              }}>
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Award className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Melhor Preço</h4>
                  <p className="text-gray-600">Qualidade com economia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 w-full animate-fade-in" style={{
            animationDelay: '0.8s'
          }}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="bg-red-200/50 w-full h-full absolute -left-4 lg:-left-6 -top-4 lg:-top-6 rounded-lg"></div>
              <div className="relative z-10 aspect-[4/3] rounded-lg shadow-lg overflow-hidden bg-gray-100">
                <img 
                  alt="Produtos de limpeza organizados - Vassouras Nova Del Rei" 
                  className="w-full h-full object-contain" 
                  src="https://vaabpicspdbolvutnscp.supabase.co/storage/v1/object/sign/site_personalizacoes/midias/1752593068753_2_screenshot_20250715_121529_instagram.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YTMyOTM2My1kZjM3LTRkMTAtOTliNC01NGRjNzUwNWQ4NWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlX3BlcnNvbmFsaXphY29lcy9taWRpYXMvMTc1MjU5MzA2ODc1M18yX3NjcmVlbnNob3RfMjAyNTA3MTVfMTIxNTI5X2luc3RhZ3JhbS5qcGciLCJpYXQiOjE3NTI2MDM1MDEsImV4cCI6MTc1MjYwNzEwMX0.6q60Er60Xc0fAuq-0Z4E7LcH3LpZOnwwJE7FKnjqDcg" 
                />
              </div>
              <div className="absolute -bottom-6 lg:-bottom-8 -right-6 lg:-right-8 bg-white rounded-lg shadow-lg p-4 lg:p-6 z-20 animate-float hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-1">100%</div>
                  <div className="text-xs lg:text-sm text-gray-600">Satisfação Garantida</div>
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
