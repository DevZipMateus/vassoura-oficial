
import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/09955182-4407-4e16-9b7d-99d55ab481e0.png" 
                alt="Vassouras Nova Del Rei" 
                className="h-12 w-auto mr-3 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trabalhamos com uma linha completa de produtos para facilitar a vida das nossas donas de casa. 
              Sua casa limpa e organizada é a nossa prioridade.
            </p>
            <div className="flex items-center text-gray-300">
              <Heart className="mr-2 text-red-500" size={18} />
              <span className="text-sm">Feito com carinho para você</span>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-red-500" size={18} />
                <a href="tel:032988871570" className="text-gray-300 hover:text-white transition-colors">
                  (32) 9 8887-1570
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-yellow-500" size={18} />
                <a href="mailto:vassourasnovadelrei@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all">
                  vassourasnovadelrei@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-red-500" size={18} />
                <span className="text-gray-300">
                  Rua Conceição de Carvalho, 385<br />Vassouras - RJ
                </span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Contato
                </button>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Fale Conosco</h4>
              <a 
                href="https://wa.me/553288871570" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2 font-medium"
              >
                <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vassouras Nova Del Rei. Todos os direitos reservados.</p>
          <p className="mt-2">Sua casa limpa e organizada é a nossa prioridade</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
