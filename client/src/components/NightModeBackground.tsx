import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import HeroSection from "@/components/HeroSection";
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

// Helper function to build image URLs.
// When `wrap` is true, the URL is wrapped in CSS's url() syntax (useful for background images).
const url = (name: string, wrap = false) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/PersonalPortfolio-4' : '';
  return `${wrap ? 'url(' : ''}${basePath}/assets/${name}.svg${wrap ? ')' : ''}`;
};

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

  // Add scroll event handler for the whole component
  useEffect(() => {
    // This will help close the navbar in night mode when scrolling
    const handleNightModeScroll = () => {
      // Dispatch a synthetic scroll event that the Navbar component can detect
      window.dispatchEvent(new Event('scroll'));
    };
    
    // Add event listener to the parallax container
    if (parallax.current) {
      const container = parallax.current.container.current;
      if (container) {
        container.addEventListener('scroll', handleNightModeScroll);
        return () => container.removeEventListener('scroll', handleNightModeScroll);
      }
    }
  }, [parallax]);

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
        <ParallaxLayer offset={2} speed={0} factor={1} style={{ backgroundColor: '#CCCCCC' }} />
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
        <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.5} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={0.2} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '35%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%' }} alt="cloud" />
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
            <AboutSection isNight={true} />
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
            zIndex: 5
          }}
        >
          <div className="container mx-auto px-4">
            <ContactSection isNight={true} />
          </div>
        </ParallaxLayer>

        {/* Footer Section - Adjust position and styling */}
        <ParallaxLayer
          offset={3.7}  // Moved up from 3.8 to ensure visibility
          speed={0}   // Added slight parallax effect
          factor={0.4}  // Ensure enough space is allocated
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            zIndex: 20,   // Increased zIndex to ensure it's above other elements
          }}
        >
          <div className="container mx-auto px-2 py-10 w-full">
            <div className="flex flex-col items-center w-full">
              <div className="flex justify-center gap-8 mb-4">
                {/* GitHub */}
                <motion.a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#253237] transition-all duration-300"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>
                
                {/* LinkedIn */}
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#253237] transition-all duration-300"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
                
                {/* Email */}
                <motion.a 
                  href="mailto:your.email@example.com" 
                  className="text-black hover:text-[#253237] transition-all duration-300"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </motion.a>
              </div>
              
              <div className="h-px w-1/3 bg-black mb-6"></div>
              
              <p className="text-black text-center text-sm font-medium">
                © {new Date().getFullYear()} Krishna Sai Reddy. All Rights Reserved.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

