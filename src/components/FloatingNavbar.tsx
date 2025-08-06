import { useState } from 'react';
import { Home, User, Briefcase, Code, BookOpen, Mail } from 'lucide-react';

const FloatingNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Briefcase, href: "#experience", label: "Experience" },
    { icon: Code, href: "#projects", label: "Projects" },
    { icon: BookOpen, href: "#research", label: "Research" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-lg border border-primary/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-chakra glow-saffron">
        <div className="flex items-center justify-center">
          {navItems.map(({ icon: Icon, href, label }, index) => (
            <div key={label} className="relative group mx-1 sm:mx-2">
              <button
                onClick={() => scrollToSection(href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="p-2 sm:p-3 rounded-full text-primary hover:text-secondary transition-divine hover:bg-accent/20 hover:scale-110 relative"
                aria-label={label}
              >
                <Icon size={16} className="sm:w-5 sm:h-5 transition-divine group-hover:rotate-12" />
              </button>
              
              {/* Tooltip positioned absolutely relative to button container */}
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 transition-all duration-200 pointer-events-none ${
                hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <div className="bg-secondary/90 text-primary-foreground px-3 py-1 rounded-lg text-xs font-mantra shadow-divine whitespace-nowrap relative">
                  {label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary/90"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;