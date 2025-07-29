import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-light flex items-center justify-center pt-20 md:pt-0">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Nutrición Profesional</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Nutrición que transforma{' '}
            <span className="text-primary">cuerpo y mente</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-tertiary mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Conecta with tu bienestar a través de la alimentación consciente. 
            Descubre el poder de una nutrición personalizada y transformadora.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('sobremi')}
              className="btn btn-outline btn-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 min-w-40"
            >
              Conóceme
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn btn-primary btn-lg text-white hover:bg-primary/90 transition-all duration-300 min-w-40 group"
            >
              Agendar Cita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-tertiary">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-tertiary">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-tertiary">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;