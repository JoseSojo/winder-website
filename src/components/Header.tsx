import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobremi', label: 'Sobre Mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:block ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src='/logo.png' alt="logo" className="w-10 h-10" />
            <span className="text-xl font-semibold text-secondary">NutriDiet</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-tertiary'
                  }`}
              >
                {link.label}
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contacto')}
              className="btn btn-primary btn-sm text-white font-medium px-6 hover:bg-primary/90 transition-all duration-200"
            >
              Agendar Cita
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;