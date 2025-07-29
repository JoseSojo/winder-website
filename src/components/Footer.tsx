import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { label: 'Inicio', href: 'inicio' },
    { label: 'Sobre Mí', href: 'sobremi' },
    { label: 'Servicios', href: 'servicios' },
    { label: 'Blog', href: 'blog' },
    { label: 'Contacto', href: 'contacto' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/nutridiet.ve?igsh=MTNteHl5eXJ1d2gxMg==',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-secondary text-white py-12 mb-16 md:mb-0">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src='/logo.png' alt="logo" className="w-16 h-16" />
                {/* <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div> */}
                <span className="text-xl font-semibold">Winder González - <strong>NutriDiet</strong></span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
                Nutriendo cuerpo y mente con propósito. Transformamos vidas a través de la alimentación consciente y personalizada.
              </p>
              <p className="text-primary font-medium italic">
                "Nutriendo cuerpo y mente con propósito"
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Clínica Santa Rosalía</p>
                <p>San Juan de los Morros</p>
                <p>Estado Guárico</p>
                <p className="text-primary">+58 424 3153383</p>
                <p className="text-primary">nutridiet.ve@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-gray-300 text-center md:text-left">
                <p>&copy; {currentYear} NutriDiet. Todos los derechos reservados.</p>
                <p className="mt-1">Desarrollado con ❤️ para tu bienestar</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300 mr-2">Sígueme:</span>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-200 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-400">
                La información en este sitio web no constituye consejo médico.
                Consulta siempre con un profesional de la salud antes de hacer cambios en tu dieta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;