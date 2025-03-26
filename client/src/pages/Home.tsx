import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import NightModeBackground from "@/components/NightModeBackground";

interface HomeProps {
  isNight: boolean;
  toggleDayNight: () => void;
}

export default function Home({ isNight, toggleDayNight }: HomeProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background wrapper positioned absolutely to cover the entire Home */}
      {isNight ? (
        <div className="absolute inset-0 z-0">
          <NightModeBackground toggleDayNight={toggleDayNight} />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
      )}

      {/* Main content placed above the background */}
      <div className="relative z-10">
        {/* Only show navbar in day mode, as night mode now has its own navbar */}
        {!isNight && <Navbar isNight={isNight} toggleDayNight={toggleDayNight} />}
        
        {/* Only render main sections in Day Mode; Night Mode will show only the animated background */}
        {!isNight && (
          <main className="container mx-auto px-4 relative">
            <HeroSection isNight={isNight} />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        )}
      </div>
    </div>
  );
}
