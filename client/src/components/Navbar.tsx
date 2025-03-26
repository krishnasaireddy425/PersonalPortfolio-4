import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import DayNightSwitch from './DayNightSwitch';

interface NavbarProps {
  isNight: boolean;
  toggleDayNight: () => void;
  scrollToSection?: (index: number) => void;
}

export default function Navbar({ isNight, toggleDayNight, scrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionIndex: number) => {
    if (isNight && scrollToSection) {
      e.preventDefault();
      scrollToSection(sectionIndex);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isNight
        ? scrolled 
         ? "bg-background/5 backdrop-blur-md py-2" 
         : "bg-background/5 backdrop-blur-md py-2"
        : scrolled 
          ? "bg-background/10 backdrop-blur-md py-2" 
          : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-12"></div>
        <div className="flex gap-8 items-center">
          <DayNightSwitch isNight={isNight} toggleDayNight={toggleDayNight} />
          <a 
            href="#" 
            className="text-lg hover:text-primary transition-colors dark:text-white"
            onClick={(e) => handleNavClick(e, 0)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-lg hover:text-primary transition-colors dark:text-white"
            onClick={(e) => handleNavClick(e, 1)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-lg hover:text-primary transition-colors dark:text-white"
            onClick={(e) => handleNavClick(e, 2)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-lg hover:text-primary transition-colors dark:text-white"
            onClick={(e) => handleNavClick(e, 3)}
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
