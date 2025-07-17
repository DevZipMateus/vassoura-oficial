
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! 👋 Gostaria de conhecer mais sobre os produtos da Vassouras Nova Del Rei.

Estou interessado(a) em saber mais sobre:
• Produtos de limpeza disponíveis
• Preços e condições
• Formas de entrega

Aguardo retorno! 😊`
  );

  return (
    <section id="inicio" className="pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-red-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/015f8481-cc9e-4234-8397-ee2bb269d42a.png')] bg-cover bg-center opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 sm:top-32 md:top-40 right-4 sm:right-6 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-red-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/3f670435-9a58-4039-b255-7fb03ba1cf04.png" 
              alt="Vassouras Nova Del Rei - Produtos de limpeza" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto mx-auto mb-4 sm:mb-6 max-w-full object-contain"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent leading-tight mb-4 sm:mb-6 animate-fade-in px-2" style={{
            animationDelay: '0.1s'
          }}>
            Sua casa limpa e organizada é a nossa prioridade
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 animate-fade-in max-w-4xl mx-auto px-2 leading-relaxed" style={{
            animationDelay: '0.2s'
          }}>
            Trabalhamos com uma linha completa de produtos para facilitar a vida das nossas donas de casa. 
            Qualidade, praticidade e eficiência em cada produto que oferecemos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in px-4" style={{
            animationDelay: '0.3s'
          }}>
            <a 
              href={`https://wa.me/553288871570?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 sm:gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Fale Conosco no WhatsApp</span>
            </a>
            <button 
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Conheça Nossos Produtos
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
