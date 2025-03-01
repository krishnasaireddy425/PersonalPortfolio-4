import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import HeroSection from "@/components/HeroSection";
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

// Helper function to build image URLs.
// When `wrap` is true, the URL is wrapped in CSS's url() syntax (useful for background images).
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function NightModeBackground() {
  // Create a reference for the Parallax component so we can control scrolling.
  const parallax = useRef<IParallax>(null!);

  return (
    // Main container with a fallback background (won't be visible if layers fully cover).
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={4}>
        {/* --- BACKGROUND COLOR LAYERS --- */}
        {/* Page 2 background */}
        <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#805E73' }} />
        {/* Page 3 background (your chosen color) */}
        <ParallaxLayer offset={2} speed={0} style={{ backgroundColor: '#D8D8D0' }} />
        {/* Page 4 background */}
        <ParallaxLayer offset={3} speed={0} style={{ backgroundColor: '#87BCDE' }} />

        {/* --- STARS BACKGROUND --- */}
        {/* A full-page stars background spanning all 4 pages */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        {/* --- PAGE 2 DECORATIVE ELEMENTS --- */}
        {/* Satellite layer on Page 2 */}
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt="satellite" />
        </ParallaxLayer>

        {/* Cloud layers on Page 2 */}
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

        {/* --- DUPLICATED CLOUDS DESIGN FOR PAGE 3 --- */}
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

        {/* --- ORIGINAL PAGE 3 DESIGN BECOMES PAGE 4 --- */}
        <ParallaxLayer offset={3} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} alt="earth" />
        </ParallaxLayer>

        {/* --- NAVIGATION LAYERS --- */}
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HeroSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AboutSection />   
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            overflow: 'visible',
          }}
        >
          <div className="container mx-auto px-4">
            <ProjectsSection />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            overflow: 'visible',
          }}
        >
          <ContactSection />
        </ParallaxLayer>
      </Parallax>
    </div>
    );
}

