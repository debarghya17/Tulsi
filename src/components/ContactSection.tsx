import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Heart, User, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import saraswatiImage from '@/assets/Saraswati.webp';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f51bcdbe-e4c4-4d84-9dfe-ed3f33684f21");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description:
            "May the blessings of Devi guide our next steps together.",
          className: "bg-green-600 text-white", // Green background for success
        });
        setResultMessage("Form Submitted Successfully");
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description:
            data.message ||
            "Please try again later or contact directly via email.",
          variant: "destructive", // Built-in red style
          className: "bg-red-600 text-white", // Enforce red style
        });
        setResultMessage(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
        className: "bg-red-600 text-white",
      });
      setResultMessage("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-16">
          <div className="shloka-badge mb-6">Darshanam Papa Nashanam</div>
          <h2 className="text-4xl md:text-5xl font-sanskrit font-bold text-primary mb-4">Contact & Connect</h2>
          <p className="text-xl text-secondary/80 font-sanskrit">Reach Out With Shraddha (Faith) and Satya (Truth)</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-divine"></div>
                <img src={saraswatiImage} alt="Goddess Saraswati" className="relative w-64 h-80 object-cover rounded-2xl shadow-divine border-4 border-secondary/30" />
              </div>
              <p className="mt-6 font-sanskrit text-secondary/80 italic">
                "May knowledge lead the way, and dharma guide your intentions."
              </p>
            </div>

            {/* Contact Info */}
            <div className="chakra-card">
              <h3 className="text-2xl font-sanskrit font-bold text-primary mb-6 text-center">Tulsi Gupta</h3>
              <p className="text-center text-secondary/80 font-sanskrit mb-8">
                Full Stack Python Developer | AI & ML Enthusiast
              </p>
              <div className="space-y-6">
                {[
                  { Icon: Mail, label: "Email", value: "ttulsigupta836@gmail.com", href: "mailto:ttulsigupta836@gmail.com" },
                  { Icon: Phone, label: "Phone", value: "+91 90261 54929", href: "tel:+919026154929" },
                  { Icon: MapPin, label: "Location", value: "Bharat (India)" },
                  { Icon: Github, label: "GitHub", value: "github.com/tulsiguptaa", href: "https://github.com/tulsiguptaa" },
                  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tulsi-gupta-7bb04928b", href: "https://linkedin.com/in/tulsi-gupta-7bb04928b" },
                ].map(({ Icon, label, value, href }, i) => (
                  <div className="flex items-center space-x-4" key={i}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground font-medium hover:text-primary transition-divine">
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Web3Forms Form */}
          <div className="chakra-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-sanskrit font-bold text-primary mb-2">Send a Sacred Message</h3>
                <p className="text-sm text-foreground/70">
                  Let this not be just a message, but a sacred Sankalpa to co-create
                </p>
              </div>

              <input type="hidden" name="access_key" value="535a07f9-e03c-4716-b42e-0bd5eccd5505" />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Name</span>
                  </label>
                  <Input type="text" name="name" placeholder="Your blessed name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </label>
                  <Input type="email" name="email" placeholder="your.email@domain.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Purpose of Contact</span>
                  </label>
                  <Input type="text" name="purpose" placeholder="e.g., Collaboration, Hiring, Research Discussion" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message / Bhavna</span>
                  </label>
                  <Textarea name="message" placeholder="Share your thoughts, ideas, or sacred intentions..." rows={5} required />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full divine-button flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span>Send with Devotion</span>
                  </>
                )}
              </Button>

              
            </form>
          </div>
        </div>

        {/* Sacred Quote */}
        <div className="text-center mt-16 space-y-6">
          <p className="mantra-text text-lg max-w-3xl mx-auto">
            Let this not be just a message, but a sacred Sankalpa to co-create, collaborate, and elevate.
          </p>
          <div className="border-t border-border/30 pt-8 mt-12">
            <div className="text-center space-y-4">
              <p className="text-foreground/70">
                © 2025 Tulsi Gupta. All rights reserved.<br />
                Powered by Dharma, Python, and the Spirit of Bharat.
              </p>
              <div className="flex items-center justify-center space-x-2 text-secondary/80 italic">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-sanskrit">Developed by a brother for his sister</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
