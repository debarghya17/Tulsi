import Navbar from '@/components/Navbar';
import FloatingNavbar from '@/components/FloatingNavbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-divine">
      {/* Fixed Top Navbar */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      
      {/* Floating Bottom Navigation */}
      <FloatingNavbar />
    </div>
  );
};

export default Index;
