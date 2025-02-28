import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface NavbarProps {
  isNight: boolean;
  toggleDayNight: () => void;
}

export default function Navbar({ isNight, toggleDayNight }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Portfolio</a>
        </Link>
        <div className="flex gap-8 items-center">
          <button
            onClick={toggleDayNight}
            className="text-xl focus:outline-none"
            aria-label="Toggle Day/Night Mode"
          >
            {isNight ? "☀️" : "🌙"}
          </button>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
