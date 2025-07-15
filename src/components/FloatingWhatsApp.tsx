
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 3000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} z-50`}>
      {/* Contact Tooltip */}
      <div className={`flex flex-col items-end mb-3 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-white rounded-lg shadow-lg p-4 mb-2 max-w-xs">
          <h4 className="font-semibold text-gray-900 mb-2">Fale Conosco!</h4>
          <p className="text-gray-600 text-sm mb-3">
            Sua casa limpa e organizada é a nossa prioridade. Entre em contato!
          </p>
          <a 
            href="https://wa.me/553288871570?text=Olá! Gostaria de conhecer mais sobre os produtos da Vassouras Nova Del Rei." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-medium text-sm w-full"
          >
            <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-4 h-4" />
            <span>Enviar Mensagem</span>
          </a>
        </div>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'p-4' : 'p-5'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} 
          text-white
          ${isPulsing && !isOpen ? 'animate-pulse shadow-lg' : 'shadow-xl'}
          transform hover:scale-110 active:scale-95`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
        style={{
          boxShadow: isOpen 
            ? '0 8px 25px rgba(239, 68, 68, 0.4)' 
            : '0 8px 25px rgba(34, 197, 94, 0.4)'
        }}
      >
        {isOpen ? (
          <X size={isMobile ? 20 : 24} />
        ) : (
          <img 
            src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
            alt="WhatsApp" 
            className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} 
          />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
