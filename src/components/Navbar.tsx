import { useState, useEffect } from 'react';
import { Linkedin, Instagram, Github, Mail, Menu, X } from 'lucide-react';
import astragenxLogo from '@/assets/astragenx-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/tulsi___gupta", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tulsi-gupta-7bb04928b/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/tulsiguptaa", label: "GitHub" },
    { icon: Mail, href: "mailto:ttulsigupta836@gmail.com", label: "Email" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border/30 shadow-mantra' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-chakra group-hover:scale-110 transition-divine">
              <img 
                src={astragenxLogo} 
                alt="AstraGenX Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-sanskrit text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-divine">
              Tulsi Gupta
            </span>
          </button>


          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-full border-2 border-primary/30 text-primary hover:border-secondary hover:text-secondary transition-divine hover:shadow-chakra hover:scale-110"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:text-secondary transition-divine"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border/30 shadow-chakra">
            <div className="px-4 py-6 space-y-4">
              <div className="flex justify-center space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-full border-2 border-primary/30 text-primary hover:border-secondary hover:text-secondary transition-divine"
                    aria-label={label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;