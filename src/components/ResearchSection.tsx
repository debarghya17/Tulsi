import { FileText, ExternalLink, BookOpen, Quote, Brain, BarChart3, Zap, Flower2 } from 'lucide-react';

const ResearchSection = () => {
  const researchPapers = [
    {
      title: "AtmaGyaan: Learning Bias Detection in AI Models Through Indian Philosophy",
      domain: "AI Ethics & Philosophy",
      summary: "This research explores how ancient Indian philosophical concepts can be applied to detect and mitigate bias in modern AI systems. Drawing from concepts of Maya (illusion) and Dharma (righteousness), we propose a novel framework for ethical AI development.",
      technologies: ["Python", "TensorFlow", "Ethics AI", "NLP", "Philosophical Analysis"],
      paperLink: "#",
      repoLink: "#",
      citationCount: "",
      featured: true
    },
    {
      title: "Project VedaNet: Sanskrit Text Classification using Deep Learning",
      domain: "Natural Language Processing",
      summary: "Development of a comprehensive NLP pipeline for classifying and analyzing ancient Sanskrit texts. This work contributes to digital preservation of Indian heritage while advancing multilingual NLP research.",
      technologies: ["Python", "BERT", "Sanskrit NLP", "Deep Learning", "Cultural Heritage"],
      paperLink: "#",
      repoLink: "#",
      citationCount: ""
    },
    {
      title: "Dharmic Data: Privacy-Preserving Analytics for Indian Healthcare",
      domain: "Data Privacy & Healthcare",
      summary: "A study on implementing privacy-preserving data analytics in Indian healthcare systems, inspired by the principle of Ahimsa (non-harm). Focuses on protecting patient data while enabling medical research.",
      technologies: ["Differential Privacy", "Python", "Healthcare Analytics", "Security"],
      paperLink: "#",
      repoLink: "#",
      citationCount: ""
    },
    {
      title: "Shakti Computing: Empowering Women in Indian Tech Ecosystem",
      domain: "Social Computing",
      summary: "An empirical study examining barriers and opportunities for women in India's technology sector. Proposes technology-driven solutions to increase female participation in STEM fields.",
      technologies: ["Data Analysis", "Social Research", "Python", "Statistical Analysis"],
      paperLink: "#",
      repoLink: "#",
      citationCount: ""
    },
    {
      title: "Karma-Based Load Balancing: A Novel Approach to Distributed Systems",
      domain: "Distributed Systems",
      summary: "Introduces a load balancing algorithm inspired by the concept of Karma, where server selection is based on historical performance and current capacity. Shows improved efficiency over traditional methods.",
      technologies: ["Distributed Systems", "Algorithm Design", "Python", "Performance Analysis"],
      paperLink: "#",
      repoLink: "#",
      citationCount: ""
    }
  ];

  const featuredPaper = researchPapers.find(paper => paper.featured);
  const otherPapers = researchPapers.filter(paper => !paper.featured);

  const domains = [
    { name: "Applied AI", icon: Brain, description: "AI for Social Good" },
    { name: "Data for Dharma", icon: BarChart3, description: "Ethics in Data Science" },
    { name: "Backend Optimization", icon: Zap, description: "System Performance" },
    { name: "Cultural Computing", icon: Flower2, description: "Technology meets Tradition" }
  ];

  return (
    <section id="research" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-16">
          <div className="shloka-badge mb-6">
            Na hi jnanena sadrusham pavitram iha vidyate
          </div>
          <h2 className="text-4xl md:text-5xl font-sanskrit font-bold text-primary mb-4">
            Research & Explorations
          </h2>
          <p className="text-xl text-secondary/80 font-sanskrit">
            Knowledge is My Tapasya
          </p>
        </div>

        {/* Research Domains */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <div key={domain.name} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-chakra group-hover:chakra-spin">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-sanskrit text-primary font-semibold mb-1">{domain.name}</h3>
                <p className="text-sm text-foreground/70">{domain.description}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Research */}
        {featuredPaper && (
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-divine"></div>
              <div className="relative chakra-card bg-card/95 p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <BookOpen className="w-6 h-6 text-secondary" />
                  <span className="text-secondary font-sanskrit text-sm">Featured Research</span>
                  <div className="flex items-center space-x-1 ml-auto">
                    <Quote className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">{featuredPaper.citationCount} citations</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-sanskrit font-bold text-primary mb-2">
                      {featuredPaper.title}
                    </h3>
                    <p className="text-lg text-secondary/80 font-sanskrit mb-4">
                      {featuredPaper.domain}
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      {featuredPaper.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPaper.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featuredPaper.paperLink}
                      className="divine-button flex items-center space-x-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Paper</span>
                    </a>
                    <a
                      href={featuredPaper.repoLink}
                      className="flex items-center space-x-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-divine"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Research Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Research Papers */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherPapers.map((paper, index) => (
            <div key={paper.title} className="chakra-card group lotus-bloom h-full flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Paper Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary font-sanskrit">{paper.domain}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-primary">
                  <Quote className="w-3 h-3" />
                  <span>{paper.citationCount}</span>
                </div>
              </div>

              {/* Paper Content */}
              <div className="flex-1 flex flex-col space-y-4">
                <div className="flex-1">
                  <h3 className="text-lg font-sanskrit font-bold text-primary mb-2 leading-tight">
                    {paper.title}
                  </h3>
                  <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                    {paper.summary}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {paper.technologies.map((tech) => (
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
                    href={paper.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 py-2 bg-primary/10 text-primary text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-divine"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Paper</span>
                  </a>
                  <a
                    href={paper.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 py-2 border border-primary/30 text-primary text-sm rounded-lg hover:bg-primary/10 transition-divine"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Repo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Footer */}
        <div className="text-center mt-16">
          <p className="mantra-text text-lg mb-4">
            Vidhya Dadati Vinayam, Vinayad Yati Patratam
          </p>
          <p className="text-secondary font-sanskrit">
            These papers are not just insights — they are my offerings to Bharat and Dharma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
