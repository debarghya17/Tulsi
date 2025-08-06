import { useState, useEffect } from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "A Full Stack Python Developer, Proud Hindu, and Eternal Bhakt of Mahadev and Shri Krishna";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToWork = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Divine Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full mantra-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Greeting with Sparkles */}
        <div className="flex items-center justify-center space-x-2 mb-6 lotus-bloom">
          <Sparkles className="text-secondary w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-sanskrit text-secondary">
            Namaste, I'm
          </h2>
          <Sparkles className="text-secondary w-6 h-6" />
        </div>

        {/* Main Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sanskrit font-bold text-primary mb-8 divine-glow">
          Tulsi Gupta
        </h1>

        {/* Typewriter Description */}
        <div className="min-h-[80px] mb-12">
          <p className="text-lg md:text-xl font-mantra text-foreground/90 leading-relaxed">
            {displayText}
            <span className="animate-pulse text-secondary">|</span>
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={scrollToWork}
            className="divine-button group flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a 
            href="/Tulsi Gupta Resume.pdf" 
            download="Tulsi Gupta Resume.pdf"
            className="flex items-center space-x-2 px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-divine hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">Download Resume</span>
          </a>
        </div>

        {/* Sacred Mantra */}
        <div className="mantra-float">
          <p className="mantra-text text-base md:text-lg">
            Namo Bhagavate Vasudevaya | Har Har Mahadev
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;