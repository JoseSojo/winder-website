import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      role: 'Paciente',
      content: 'Winder cambió completamente mi relación con la comida. No solo perdí peso, sino que gané confianza y energía. Su enfoque integral me ayudó a entender que la nutrición es mucho más que una dieta.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Atleta',
      content: 'Como deportista profesional, necesitaba un plan nutricional que optimizara mi rendimiento. Los resultados han sido increíbles, tanto en energía como en recuperación muscular.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Empresaria',
      content: 'Después de años luchando con mi peso, finalmente encontré en Winder a alguien que me entendió. Su paciencia y conocimiento hicieron posible lo que creía imposible.',
      rating: 5
    },
    {
      name: 'Luis Herrera',
      role: 'Paciente Diabético',
      content: 'Mi diabetes está completamente controlada gracias al plan nutricional personalizado. Winder no solo mejoró mi salud, sino mi calidad de vida en general.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Lo que dicen mis <span className="text-primary">Pacientes</span>
            </h2>
            <p className="text-lg text-tertiary">
              Historias reales de transformación y bienestar
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-light rounded-2xl p-8 md:p-12 min-h-[300px] flex items-center">
              <div className="w-full text-center animate-fade-in">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-secondary mb-8 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-secondary text-lg mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-tertiary">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-quaternary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;