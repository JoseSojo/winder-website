import React from 'react';
import { Sparkles, Brain, Activity, Dumbbell } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Nutrición y Estética',
      description: 'Planes nutricionales diseñados para mejorar tu apariencia física y radiancia natural desde adentro hacia afuera.',
      features: ['Control de peso', 'Mejora de la piel', 'Antiaging nutricional', 'Detox personalizado']
    },
    {
      icon: Brain,
      title: 'Psiconutrición',
      description: 'Trabajamos la relación emocional con la comida, desarrollando una mentalidad saludable hacia la alimentación.',
      features: ['Alimentación emocional', 'Hábitos conscientes', 'Relación con la comida', 'Bienestar mental']
    },
    {
      icon: Activity,
      title: 'Nutrición Clínica',
      description: 'Tratamiento nutricional especializado para condiciones de salud específicas con enfoque médico integral.',
      features: ['Diabetes', 'Hipertensión', 'Colesterol', 'Digestión']
    },
    {
      icon: Dumbbell,
      title: 'Nutrición Deportiva',
      description: 'Optimización del rendimiento físico y recuperación a través de estrategias nutricionales especializadas.',
      features: ['Rendimiento deportivo', 'Recuperación muscular', 'Hidratación', 'Suplementación']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Mis <span className="text-primary">Servicios</span>
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto">
              Servicios especializados para cada necesidad, diseñados para transformar tu relación con la alimentación
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-secondary mb-4">{service.title}</h3>
                  <p className="text-tertiary mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-tertiary">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="mt-6 text-primary font-medium hover:text-primary/80 transition-colors duration-200 group">
                    Saber más
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                ¿No estás seguro cuál servicio necesitas?
              </h3>
              <p className="text-tertiary mb-6">
                Agenda una consulta inicial gratuita y juntos encontraremos el camino perfecto hacia tu bienestar
              </p>
              <button className="btn btn-primary text-white px-8">
                Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;