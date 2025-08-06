import { ExternalLink, Github, Sparkles, Flower, Zap } from 'lucide-react';
import shraddhatrackThumbnail from '@/assets/shraddhatrack-thumbnail.jpg';
import shaktiaiThumbnail from '@/assets/shaktiai-thumbnail.jpg';
import bhavyamartThumbnail from '@/assets/bhavyamart-thumbnail.jpg';
import krishnaquotesThumbnail from '@/assets/krishnaquotes-thumbnail.jpg';
import vedalearnThumbnail from '@/assets/vedallearn-thumbnail.jpg';
import mantraflowThumbnail from '@/assets/mantraflow-thumbnail.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ShraddhaTrack",
      subtitle: "Spiritual Habit Tracker",
      description: "A beautiful habit tracking app designed for daily spiritual practices like meditation, prayer, and mantra chanting. Built with mindfulness and devotion.",
      technologies: ["React", "Python", "Django", "PostgreSQL", "Firebase"],
      features: ["Daily Progress Tracking", "Mantra Counter", "Spiritual Goals"],
      liveDemo: "#",
      githubRepo: "#",
      mantra: "Tat Sat",
      thumbnail: shraddhatrackThumbnail
    },
    {
      title: "ShaktiAI",
      subtitle: "Spiritual Wisdom ML Tool",
      description: "An AI-powered platform that provides personalized spiritual guidance based on ancient Indian texts and user preferences. Combines technology with tradition.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP", "MongoDB"],
      features: ["Personalized Guidance", "Text Analysis", "Daily Insights"],
      liveDemo: "#",
      githubRepo: "#",
      mantra: "Yata Mata Tata Patha",
      thumbnail: shaktiaiThumbnail
    },
    {
      title: "BhavyaMart",
      subtitle: "E-commerce Platform",
      description: "A full-featured e-commerce platform supporting local Indian artisans and traditional crafts. Built to promote Indian culture through commerce.",
      technologies: ["React", "Node.js", "Express", "MySQL", "Stripe"],
      features: ["Product Catalog", "Payment Gateway", "Admin Dashboard"],
      liveDemo: "#", 
      githubRepo: "#",
      mantra: "Vasudhaiva Kutumbakam",
      thumbnail: bhavyamartThumbnail
    },
    {
      title: "KrishnaQuotes API",
      subtitle: "Spiritual Quotes Service",
      description: "A RESTful API serving thousands of inspirational quotes from Bhagavad Gita, Upanishads, and other sacred texts. Free for developers worldwide.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      features: ["REST API", "Quote Categories", "Daily Verses"],
      liveDemo: "#",
      githubRepo: "#", 
      mantra: "Dharmo Rakshati Rakshitah",
      thumbnail: krishnaquotesThumbnail
    },
    {
      title: "VedaLearn",
      subtitle: "Educational Platform",
      description: "An interactive learning platform teaching Sanskrit, Yoga, and Indian philosophy to global students. Making ancient wisdom accessible through technology.",
      technologies: ["React", "Python", "Django", "WebRTC", "MongoDB"],
      features: ["Video Lessons", "Interactive Quizzes", "Progress Tracking"],
      liveDemo: "#",
      githubRepo: "#",
      mantra: "Vidya Amritam Ashnuteh",
      thumbnail: vedalearnThumbnail
    },
    {
      title: "MantraFlow",
      subtitle: "Meditation & Prayer App",
      description: "A peaceful meditation app with guided prayers, mantra chanting, and mindfulness exercises. Designed to bring inner peace through technology.",
      technologies: ["React Native", "Firebase", "Audio APIs", "Redux"],
      features: ["Guided Meditation", "Timer Functions", "Audio Library"],
      liveDemo: "#",
      githubRepo: "#",
      mantra: "Antah Shanti Bahih Shanti",
      thumbnail: mantraflowThumbnail
    }
  ];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-16">
          <div className="shloka-badge mb-6">
            Yatra Yogeshwarah Krishno, Yatra Partho Dhanur Dharah
          </div>
          <h2 className="text-4xl md:text-5xl font-sanskrit font-bold text-primary mb-4">
            Creations with Code & Consciousness
          </h2>
          <p className="text-xl text-secondary/80 font-sanskrit">
            Projects – My Karma in Action
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-divine"></div>
            <div className="relative chakra-card bg-card/95 p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-secondary" />
                    <span className="text-secondary font-sanskrit text-sm">Featured Project</span>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-sanskrit font-bold text-primary mb-2">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xl text-secondary/80 font-sanskrit mb-4">
                      {featuredProject.subtitle}
                    </p>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-primary font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {featuredProject.features.map((feature) => (
                          <li key={feature} className="flex items-center text-foreground/80 text-sm">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={featuredProject.liveDemo}
                        className="divine-button flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={featuredProject.githubRepo}
                        className="flex items-center space-x-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-divine"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-divine border border-primary/30">
                    <img 
                      src={featuredProject.thumbnail} 
                      alt={`${featuredProject.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2">
                        <Flower className="w-6 h-6 text-secondary mantra-float" />
                        <p className="font-sanskrit text-secondary text-sm opacity-80">
                          {featuredProject.mantra}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={project.title} className="chakra-card group lotus-bloom h-full flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Thumbnail */}
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 border border-primary/20">
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-sanskrit text-secondary/70">
                        {project.mantra}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col space-y-4">
                <div className="flex-1">
                  <h3 className="text-xl font-sanskrit font-bold text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary/80 font-sanskrit mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-foreground/60">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.liveDemo}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 bg-primary/10 text-primary text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-divine"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubRepo}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 border border-primary/30 text-primary text-sm rounded-lg hover:bg-primary/10 transition-divine"
                  >
                    <Github className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Footer */}
        <div className="text-center mt-16">
          <p className="mantra-text text-lg mb-4">
            Sarva Karmani Manasa Sannyasya | Siddhim Samadhigacchati
          </p>
          <div className="flex items-center justify-center space-x-2 text-secondary">
            <span className="font-sanskrit">Code that serves. Karma that speaks. Bhakti that never fades.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
