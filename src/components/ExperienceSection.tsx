import { Calendar, MapPin, Target } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Python Developer",
      company: "AstraGenX Corporation",
      duration: "Aug 2024 – Present",
      location: "Remote, India",
      description: "Founding member of AstraGenX and led development of full-stack solutions integrating Python ML models with dynamic frontends. Designed and deployed scalable backend services, prototyped AI applications.",
      technologies: ["Python", "Django", "React", "Flask", "MongoDB", "Machine Learning", "FastAPI"],
      badge: "Shraddhavan Labhate Gyaanam",
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-16">
          <div className="shloka-badge mb-6">
            Karmanye Vadhikaraste, Ma Phaleshu Kadachana
          </div>
          <h2 className="text-4xl md:text-5xl font-sanskrit font-bold text-primary mb-4">
            My Journey So Far
          </h2>
          <p className="text-xl text-secondary/80 font-sanskrit">
            Work, Internships & Karma in Code
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-60 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Mobile Card Layout */}
                <div className="lg:hidden">
                  <div className="chakra-card group relative">
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-sanskrit rounded-full border border-secondary/30">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-primary font-sanskrit mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-base text-secondary font-semibold mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-foreground/70">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-foreground/90 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Timeline Layout */}
                <div className={`hidden lg:flex items-center relative ${exp.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  {/* Experience Card */}
                  <div className={`w-full max-w-lg ${exp.side === 'left' ? 'pr-16' : 'pl-16'} lotus-bloom`}>
                    <div className="chakra-card group relative">
                      <div className="text-center mb-4">
                        <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary text-sm font-sanskrit rounded-full border border-secondary/30">
                          {exp.badge}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary font-sanskrit mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-secondary font-semibold mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-foreground/70">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-foreground/90 leading-relaxed text-base">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-chakra border-4 border-background z-10">
                    <Target className="text-primary-foreground w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Footer */}
        <div className="text-center mt-16">
          <p className="mantra-text text-lg">
            Let Karma Be My Resume, Let Bhakti Be My Reference.
          </p>
          <p className="text-secondary font-sanskrit mt-4">
            — Tulsi Gupta
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
