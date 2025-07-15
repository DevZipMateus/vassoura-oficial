
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

  return (
    <section id="inicio" className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-red-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/015f8481-cc9e-4234-8397-ee2bb269d42a.png')] bg-cover bg-center opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/589e108c-94cd-4db9-a058-eae5a58e1c78.png" 
              alt="Vassouras Nova Del Rei - Produtos de limpeza" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mx-auto mb-6 max-w-full object-contain"
            />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-gray-900 leading-tight mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Sua casa limpa e organizada é a nossa prioridade
          </h1>
          
          <p className="text-lg text-gray-700 mb-10 animate-fade-in max-w-3xl mx-auto" style={{
            animationDelay: '0.2s'
          }}>
            Trabalhamos com uma linha completa de produtos para facilitar a vida das nossas donas de casa. 
            Qualidade, praticidade e eficiência em cada produto que oferecemos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a 
              href="https://wa.me/553288871570" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-6 h-6" />
              <span>Fale Conosco no WhatsApp</span>
            </a>
            <button 
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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
