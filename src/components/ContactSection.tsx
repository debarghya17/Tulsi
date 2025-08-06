import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Heart, User, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import saraswatiImage from '@/assets/saraswati-divine.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form submission logic would go here
    toast({
      title: "Message received.",
      description: "May the blessings of Devi guide our next steps together.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', purpose: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-16">
          <div className="shloka-badge mb-6">
            Darshanam Papa Nashanam
          </div>
          <h2 className="text-4xl md:text-5xl font-sanskrit font-bold text-primary mb-4">
            Contact & Connect
          </h2>
          <p className="text-xl text-secondary/80 font-sanskrit">
            Reach Out With Shraddha (Faith) and Satya (Truth)
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Divine Inspiration */}
          <div className="space-y-8">
            {/* Saraswati Divine Image */}
            <div className="text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-divine"></div>
                <img
                  src={saraswatiImage}
                  alt="Goddess Saraswati"
                  className="relative w-64 h-80 object-cover rounded-2xl shadow-divine border-4 border-secondary/30"
                />
              </div>
              <p className="mt-6 font-sanskrit text-secondary/80 italic">
                "May knowledge lead the way, and dharma guide your intentions."
              </p>
            </div>

            {/* Contact Information */}
            <div className="chakra-card">
              <h3 className="text-2xl font-sanskrit font-bold text-primary mb-6 text-center">
                Tulsi Gupta
              </h3>
              <p className="text-center text-secondary/80 font-sanskrit mb-8">
                Full Stack Python Developer | AI & ML Enthusiast
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <a href="mailto:ttulsigupta836@gmail.com" className="text-foreground font-medium hover:text-primary transition-divine">
                      ttulsigupta836@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <a href="tel:+919026154929" className="text-foreground font-medium hover:text-primary transition-divine">
                      +91 90261 54929
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p className="text-foreground font-medium">Bharat (India)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">GitHub</p>
                    <a href="https://github.com/tulsiguptaa" className="text-primary hover:text-secondary transition-divine font-medium">
                      github.com/tulsiguptaa
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">LinkedIn</p>
                    <a href="https://linkedin.com/in/tulsi-gupta-7bb04928b" className="text-primary hover:text-secondary transition-divine font-medium">
                      linkedin.com/in/tulsi-gupta-7bb04928b
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="chakra-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-sanskrit font-bold text-primary mb-2">
                  Send a Sacred Message
                </h3>
                <p className="text-sm text-foreground/70">
                  Let this not be just a message, but a sacred Sankalpa to co-create
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Name</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your blessed name"
                    required
                    className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    required
                    className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Purpose of Contact</span>
                  </label>
                  <Input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="e.g., Collaboration, Hiring, Research Discussion, etc."
                    required
                    className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message / Bhavna</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts, ideas, or sacred intentions..."
                    rows={5}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full divine-button flex items-center justify-center space-x-2 group"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>Send with Devotion</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Sacred Quote */}
        <div className="text-center mt-16 space-y-6">
          <p className="mantra-text text-lg max-w-3xl mx-auto">
            Let this not be just a message, but a sacred Sankalpa to co-create, collaborate, and elevate.
          </p>
          
          {/* Footer */}
          <div className="border-t border-border/30 pt-8 mt-12">
            <div className="text-center space-y-4">
              <p className="text-foreground/70">
                © 2025 Tulsi Gupta. All rights reserved.<br />
                Powered by Dharma, Python, and the Spirit of Bharat.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-secondary/80 italic">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-sanskrit">
                  Developed by a brother for his sister
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;