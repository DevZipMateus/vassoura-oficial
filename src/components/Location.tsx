import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Localização
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Venha nos visitar
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos localizados no coração de São João Del Rei. Visite nossa loja e conheça 
            pessoalmente nossos produtos de qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.234567890123!2d-44.2616789!3d-21.1361111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9977b1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sR.%20Concei%C3%A7%C3%A3o%20de%20Carvalho%2C%20385%20-%20S%C3%A3o%20Francisco%20(Col%C3%B4nia%20do%20Mar%C3%A7al)%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG%2C%2036314-899!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localização da Vassouras Nova Del Rei"
              />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      R. Conceição de Carvalho, 385<br />
                      São Francisco (Colônia do Marçal)<br />
                      São João del Rei - MG, 36314-899
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                    <a href="tel:032988871570" className="text-gray-600 hover:text-red-600 transition-colors">
                      (32) 9 8887-1570
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda - Sexta: 08:00 - 18:00</p>
                      <p>Sábado: Fechado</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Navigation className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Como Chegar</h4>
                    <p className="text-gray-600">
                      Localizada no bairro São Francisco (Colônia do Marçal), em São João del Rei, próximo aos principais pontos comerciais da cidade.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a href="https://wa.me/553288871570" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all inline-flex items-center gap-3 font-semibold w-full justify-center">
                  <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
                  <span>Fale Conosco</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
