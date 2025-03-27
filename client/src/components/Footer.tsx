import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  isNight?: boolean;
}

export default function Footer({ isNight = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 } 
    }
  };
  
  return (
    <footer className="py-8">
      <motion.div 
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="flex justify-center gap-8 mb-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-all duration-300 transform hover:scale-110 ${
              isNight 
                ? 'text-white hover:text-[#D8D8D0]' 
                : 'text-gray-800 hover:text-primary'
            }`}
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-all duration-300 transform hover:scale-110 ${
              isNight 
                ? 'text-white hover:text-[#D8D8D0]' 
                : 'text-gray-800 hover:text-primary'
            }`}
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className={`transition-all duration-300 transform hover:scale-110 ${
              isNight 
                ? 'text-white hover:text-[#D8D8D0]' 
                : 'text-gray-800 hover:text-primary'
            }`}
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </motion.div>
        
        <motion.p 
          variants={itemVariants} 
          className={`text-sm ${isNight ? 'text-white/70' : 'text-gray-500'}`}
        >
          © {currentYear} Krishna Sai Reddy. All Rights Reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
} 