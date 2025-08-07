import { ExternalLink, Github, Sparkles, Flower, Zap } from 'lucide-react';
import netflixThumbnail from '@/assets/netflix.png';
import codequestThumbnail from '@/assets/CodeQuest.png';
import chromeExtensionThumbnail from '@/assets/chromeextension.webp';
import devdiaryThumbnail from '@/assets/DevDiary.png';


const ProjectsSection = () => {
  const projects = [
    {
      title: "Netflix Clone",
      subtitle: "Responsive Streaming UI",
      description:
        "A responsive UI clone of Netflix built using ReactJS and TMDB API. Integrated dynamic content rendering, movie previews, and user-friendly navigation for immersive experience.",
      technologies: ["ReactJS", "TMDB API", "CSS", "JavaScript"],
      features: ["Dynamic Movie Previews", "Responsive Layout", "Genre Browsing"],
      liveDemo: "#",
      githubRepo: "https://github.com/tulsiguptaa/Netflix-clone",
      mantra: "Drishyatam Darshayatam",
      thumbnail: netflixThumbnail,
    },
    {
      title: "CodeQuest – Quiz App",
      subtitle: "Programming Quiz Platform",
      description:
        "A full-stack Python-based quiz application designed to test programming skills. Features real-time score tracking, difficulty levels, and responsive UI using Flask and Bootstrap.",
      technologies: ["Python", "Flask", "Bootstrap", "SQLite"],
      features: ["Real-Time Scoring", "Difficulty Levels", "User-Friendly UI"],
      liveDemo: "#",
      githubRepo: "https://github.com/tulsiguptaa/Quiz-app",
      mantra: "Jnana Vardhanam",
      thumbnail: codequestThumbnail,
    },
    {
      title: "Chrome Extension – Productivity Booster",
      subtitle: "Focus & Task Manager",
      description:
        "A custom Chrome extension that helps manage tasks, block distractions, and stay focused. Uses JavaScript, HTML, and Chrome APIs to offer reminders, timers, and customizable UI.",
      technologies: ["JavaScript", "HTML", "Chrome APIs", "CSS"],
      features: ["Task Reminders", "Focus Timers", "Distraction Blocker"],
      liveDemo: "#",
      githubRepo: "https://github.com/tulsiguptaa/Extension",
      mantra: "Karya Siddhi Sadhakam",
      thumbnail: chromeExtensionThumbnail,
    },
    {
      title: "DevDiary – Blog App",
      subtitle: "Personal Blog Platform",
      description:
        "A personal blog platform where users can create, edit, and delete posts. Built using Python (Flask), SQLite, and styled with modern CSS. Implements authentication and markdown support.",
      technologies: ["Python", "Flask", "SQLite", "CSS"],
      features: ["User Auth", "Markdown Support", "Post Management"],
      liveDemo: "#",
      githubRepo: "https://github.com/tulsiguptaa/BLOG-APP",
      mantra: "Vakta Dāta Smarata Shrota",
      thumbnail: devdiaryThumbnail,
    },
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
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-divine border border-primary/30">
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
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
