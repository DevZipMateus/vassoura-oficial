
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    `Olá! 👋 Gostaria de conhecer mais sobre os produtos da Vassouras Nova Del Rei.

Estou interessado(a) em saber mais sobre:
• Produtos de limpeza disponíveis
• Preços e condições
• Formas de entrega

Aguardo retorno! 😊`
  );

  return (
    <section id="contato" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender você através dos nossos canais de contato. 
            Fale conosco e descubra como podemos ajudar!
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* WhatsApp Card */}
          <div className="bg-green-50 rounded-xl overflow-hidden animate-fade-in hover:shadow-lg transition-all duration-300">
            <div className="bg-green-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Atendimento rápido e prático</p>
              <a 
                href={`https://wa.me/553288871570?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all font-medium w-full"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-red-50 rounded-xl overflow-hidden animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <div className="bg-red-600 p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:032988871570"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all font-medium w-full"
              >
                <span>(32) 9 8887-1570</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-yellow-50 rounded-xl overflow-hidden animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="bg-yellow-500 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:vassourasnovadelrei@gmail.com"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center transition-all font-medium w-full text-sm"
              >
                <span>vassourasnovadelrei@gmail.com</span>
              </a>
            </div>
          </div>
          
          {/* Address Card */}
          <div className="bg-gray-50 rounded-xl overflow-hidden animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-600 p-6 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
              <p className="text-gray-600 mb-4">Venha nos visitar</p>
              <p className="text-gray-700 font-medium text-sm">
                Rua Conceição de Carvalho, 385<br />Vassouras - RJ
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para facilitar a limpeza da sua casa?
          </h3>
          <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
            Entre em contato conosco agora mesmo e descubra nossa linha completa de produtos 
            de limpeza. Sua casa limpa e organizada é a nossa prioridade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/553288871570?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg transition-all inline-flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-6 h-6" />
              <span>Falar no WhatsApp</span>
            </a>
            <a 
              href="tel:032988871570"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg transition-all inline-flex items-center gap-3 font-semibold"
            >
              <Phone size={20} />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
