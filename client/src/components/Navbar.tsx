import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DayNightSwitch from './DayNightSwitch';
import { Menu } from 'lucide-react'; 

interface NavbarProps {
  isNight: boolean;
  toggleDayNight: () => void;
  scrollToSection?: (index: number) => void;
}

export default function Navbar({ isNight, toggleDayNight, scrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Define navigation links for reusability
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu when user scrolls
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionIndex: number) => {
    if (isNight && scrollToSection) {
      e.preventDefault();
      scrollToSection(sectionIndex);
    }
    setMobileMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isNight
        ? scrolled 
          ? "bg-background/5 backdrop-blur-md pt-2 pb-0" 
          : "bg-background/5 backdrop-blur-md pt-2 pb-0"
        : scrolled 
          ? "bg-background/10 backdrop-blur-md py-2" 
          : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="md:w-12"></div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
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
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-end w-full">
          <DayNightSwitch isNight={isNight} toggleDayNight={toggleDayNight} />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`ml-4 p-2 rounded-lg transition-all duration-300 ${
              isNight 
                ? 'text-black bg-gradient-to-r from-[#F5F2EE] to-[#F0ECE8]' 
                : 'text-white bg-gradient-to-r from-[#1E2A33] to-[#253237]'
            }`}
            aria-label="Toggle mobile menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden overflow-hidden mt-0 ${
            isNight 
              ? 'bg-gradient-to-b from-[#1E3A5F] to-[#253237] text-white' 
              : 'bg-primary/5 text-[#1E2A33]'
          }`}
        >
          <motion.div 
            className="container mx-auto rounded-b-2xl pt-1"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`block py-3 pl-4 my-1 text-lg border-l-2 rounded-r-lg transition-all ${
                  isNight 
                    ? 'border-l-white/30 hover:border-l-white hover:bg-white/10' 
                    : 'border-l-primary/30 hover:border-l-primary hover:bg-primary/10'
                }`}
                onClick={(e) => handleNavClick(e, index)}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
