import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: '5 Mitos sobre la Nutrición que Debes Conocer',
      excerpt: 'Desmontamos las creencias más comunes que pueden estar saboteando tus objetivos de salud.',
      date: '15 Enero 2025',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Alimentación Consciente: El Arte de Comer con Propósito',
      excerpt: 'Descubre cómo transformar tu relación con la comida a través de la atención plena.',
      date: '10 Enero 2025',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Nutrición Deportiva: Combustible para el Rendimiento',
      excerpt: 'Estrategias nutricionales para optimizar tu entrenamiento y acelerar la recuperación.',
      date: '5 Enero 2025',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Blog de <span className="text-primary">Nutrición</span>
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto">
              Artículos, consejos y conocimientos para tu camino hacia una vida más saludable
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center text-sm text-tertiary mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-tertiary mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <button className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200 group">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Ver Todos los Artículos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;