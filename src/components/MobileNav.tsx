import React, { useState, useEffect } from 'react';
import { Home, Heart, MessageCircle, Calendar } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', icon: Home, label: 'Inicio' },
    { id: 'servicios', icon: Heart, label: 'Servicios' },
    { id: 'contacto', icon: MessageCircle, label: 'Contacto' },
    { id: 'cita', icon: Calendar, label: 'Cita' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'contacto'];
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

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'cita') {
      scrollToSection('contacto');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id || (item.id === 'cita' && activeSection === 'contacto');
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-quaternary'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;