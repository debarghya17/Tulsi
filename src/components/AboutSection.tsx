import { Monitor, Database, Server, Brain, Wrench } from 'lucide-react';

const AboutSection = () => {
  const skillZones = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-8 h-8" />,
      skills: ["Python", "Django", "Flask", "FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "NLP", "Computer Vision"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["Docker", "Git/GitHub", "AWS", "Linux", "CI/CD", "Firebase", "Heroku"]
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Badge */}
        <div className="text-center mb-12">
          <div className="shloka-badge mb-6">
            Shivoham Shivoham – I am Divine, I am Code
          </div>
          <h2 className="text-4xl md:text-5xl font-sanskrit font-bold text-primary mb-4">
            Who is Tulsi Gupta?
          </h2>
          <p className="text-xl text-secondary/80 font-sanskrit">
            A Journey of Bhakti, Bharat & Backend
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Portrait */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-divine"></div>
              <img
                src="/TG.png"
                alt="Tulsi Gupta"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-secondary shadow-divine"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="chakra-card">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I am <span className="text-primary font-semibold">Tulsi Gupta</span> – a proud Indian, 
                a devoted Bhakt of Mahadev and Krishna, and a passionate Full Stack Python Developer. 
                To me, code is not just logic — it's <span className="text-secondary font-sanskrit">sadhana</span>. 
                Whether I'm writing APIs or building frontends, my work is an offering to the divine.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                I blend technology with tradition. As I chant my mantras and structure my modules, 
                I carry forward the eternal spirit of Sanatan Dharma into the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Mandala Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-sanskrit font-bold text-center text-secondary mb-12">
            Technical Chakras
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillZones.map((zone, index) => (
              <div 
                key={zone.title}
                className="chakra-card text-center group h-full flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 glow-saffron group-hover:scale-110 transition-divine">
                  <div className="text-primary-foreground">
                    {zone.icon}
                  </div>
                </div>
                <h3 className="text-lg font-sanskrit font-bold text-primary mb-3">
                  {zone.title}
                </h3>
                <div className="flex-1 flex flex-wrap justify-center content-start gap-2">
                  {zone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-divine"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Closing */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <p className="mantra-text text-lg mb-6">
              Yatra Yogeshwarah Krishno Yatra Partho Dhanur Dharah | 
              Tatra Shrir Vijayo Bhutir Dhruva Neetir Matir Mama
            </p>
            <div className="flex items-center justify-center space-x-2 text-secondary font-semibold">
              <span>Proud to be Hindu</span>
              <span>|</span>
              <span>Proud to be Indian</span>
              <span>|</span>
              <span>Proud to be Tulsi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;