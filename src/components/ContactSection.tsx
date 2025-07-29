import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Clínica Santa Rosalía', 'San Juan de los Morros', 'Estado Guárico, Venezuela']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['nutridiet.ve@gmail.com']
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+58 424 3153383']
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      link: 'https://www.instagram.com/nutridiet.ve?igsh=MTNteHl5eXJ1d2gxMg=='
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Inicia tu <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto">
              ¿Listo para comenzar tu camino hacia una vida más saludable? Contáctame y demos el primer paso juntos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-light p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-secondary mb-6">Envíame un mensaje</h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Cuéntame sobre tus objetivos de salud y cómo puedo ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-secondary mb-1">Información de contacto</h3>

              <div className="mb-5">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a href={social.link} target="_blank" rel="noreferrer" key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary/80 hover:text-white duration-200 flex items-center justify-center flex-shrink-0"> 
                        <Icon className="w-6 h-6" />
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">{info.title}</h4>
                        {info.details && info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-tertiary">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Schedule Info */}
              <div className="mt-12 p-6 bg-light rounded-xl">
                <h4 className="font-semibold text-secondary mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-tertiary">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <p className="text-sm text-secondary">
                  <strong>Consultas de emergencia:</strong> También disponible por WhatsApp para consultas urgentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;