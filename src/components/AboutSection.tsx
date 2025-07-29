import React from 'react';
import { Brain, Heart, BookOpen, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: 'Consciencia',
      description: 'Alimentación consciente que conecta cuerpo y mente'
    },
    {
      icon: Heart,
      title: 'Salud Integral',
      description: 'Enfoque holístico para tu bienestar completo'
    },
    {
      icon: BookOpen,
      title: 'Educación',
      description: 'Te enseño a mantener hábitos saludables de por vida'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromiso con la calidad y resultados efectivos'
    }
  ];

  return (
    <section id="sobremi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Sobre <span className="text-primary">Mí</span>
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto">
              Nutricionista especializado en transformar vidas a través de la alimentación consciente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="w-full py-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <img src='/photo.jpg' alt="Foto de Winder" className="w-full h-72 object-cover rounded flex items-center justify-center mx-auto mb-4" />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Transformando vidas a través de la nutrición
              </h3>
              <p className="text-tertiary mb-6 leading-relaxed">
                Soy un nutricionista apasionada por ayudar a las personas a desarrollar una 
                relación saludable y consciente con la alimentación. Con más de 5 años de 
                experiencia, me especializo en crear planes nutricionales personalizados que 
                no solo mejoran la salud física, sino también el bienestar mental y emocional.
              </p>
              <p className="text-tertiary mb-8 leading-relaxed">
                Mi enfoque se basa en la educación nutricional, la sostenibilidad y el 
                respeto por la individualidad de cada persona. Creo firmemente que una 
                alimentación consciente es la clave para una vida plena y saludable.
              </p>
            </div>

             {/* Values Grid */}
              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-light transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">{value.title}</h4>
                        <p className="text-sm text-tertiary">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;