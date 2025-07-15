
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/lovable-uploads/09955182-4407-4e16-9b7d-99d55ab481e0.png" 
              alt="Vassouras Nova Del Rei - Produtos de limpeza" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('servicos')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('depoimentos')} className="nav-link">Depoimentos</button>
            <button onClick={() => scrollToSection('localizacao')} className="nav-link">Localização</button>
            <button onClick={() => scrollToSection('contato')} className="nav-link">Contato</button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-red-600 focus:outline-none transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t bg-white/95 backdrop-blur-md">
          <button onClick={() => scrollToSection('inicio')} className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md text-left transition-colors">Início</button>
          <button onClick={() => scrollToSection('sobre')} className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md text-left transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('servicos')} className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md text-left transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('depoimentos')} className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md text-left transition-colors">Depoimentos</button>
          <button onClick={() => scrollToSection('localizacao')} className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md text-left transition-colors">Localização</button>
          <button onClick={() => scrollToSection('contato')} className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md text-left transition-colors">Contato</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
