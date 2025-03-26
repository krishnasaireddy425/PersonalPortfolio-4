import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import HeroSection from "@/components/HeroSection";
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Navbar from './Navbar';

// Helper function to build image URLs.
// When `wrap` is true, the URL is wrapped in CSS's url() syntax (useful for background images).
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function NightModeBackground({ toggleDayNight }: { toggleDayNight: () => void }) {
  // Create a reference for the Parallax component so we can control scrolling.
  const parallax = useRef<IParallax>(null!);

  // Determine if the screen is mobile based on a simple width check.
  const [isMobile, setIsMobile] = useState(false);

  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically set the vertical space for ProjectsSection:
  // 1.5 pages on mobile vs 1 page on desktop.

  return (
    <div>
      {/* Add the navbar here with night mode specified and scrolling function */}
      <Navbar 
        isNight={true} 
        toggleDayNight={toggleDayNight}
        scrollToSection={scrollToSection} 
      />
      
      <Parallax ref={parallax} pages={4}>
        {/* --- BACKGROUND COLOR LAYERS --- */}
        {/* Hero Section background */}
        <ParallaxLayer offset={0} speed={0} factor={1} style={{ backgroundColor: '#253237' }} />
        {/* About Section background */}
        <ParallaxLayer offset={1} speed={0} factor={1} style={{ backgroundColor: '#805E73' }} />
        {/* Projects Section background */}
        <ParallaxLayer offset={2} speed={0} factor={1} style={{ backgroundColor: '#D8D8D0' }} />
        {/* Contact Section background */}
        <ParallaxLayer offset={3} speed={0} factor={1} style={{ backgroundColor: '#87BCDE' }} />
      
        {/* --- STARS BACKGROUND (overlay) --- */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            pointerEvents: 'none'
          }}
        />

        {/* --- DECORATIVE ELEMENTS (Clouds, Satellite, etc.) --- */}
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt="satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.4}
          speed={-0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} alt="earth" />
        </ParallaxLayer>

        {/* --- CONTENT (SECTION) LAYERS --- */}
        {/* Hero Section */}
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
            <HeroSection scrollToSection={scrollToSection} isNight={true} />
          </div>
        </ParallaxLayer>

        {/* About Section */}
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
            <AboutSection />
          </div>
        </ParallaxLayer>

        {/* Projects Section */}
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <div className="container mx-auto px-4 flex flex-col justify-center">
            <ProjectsSection />
          </div>
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '5%',
            width: '100%',
            zIndex: 10
          }}
        >
          <div className="container mx-auto px-4">
            <ContactSection />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

