import React from 'react';
import { motion } from 'framer-motion';

interface DayNightSwitchProps {
  isNight: boolean;
  toggleDayNight: () => void;
}

export default function DayNightSwitch({ isNight, toggleDayNight }: DayNightSwitchProps) {
  return (
    <div className="flex items-center">
      <motion.button
        onClick={toggleDayNight}
        className={`relative w-[48px] h-[24px] rounded-full flex items-center cursor-pointer 
                  ${isNight 
                    ? 'bg-gradient-to-r from-[#F5F2EE] to-[#F0ECE8] border border-[#E6E2DE]' 
                    : 'bg-gradient-to-r from-[#1E2A33] to-[#253237] border border-[#34444C]'} 
                  shadow-inner transition-all duration-500 focus:outline-none`}
        aria-label="Toggle Day/Night Mode"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: isNight ? '0 0 8px rgba(240, 236, 232, 0.9)' : '0 0 8px rgba(37, 50, 55, 0.6)' 
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Stars (only visible in night mode) */}
        {isNight && (
          <>
            <motion.div 
              className="absolute w-[0.8px] h-[0.8px] bg-gray-400 rounded-full"
              style={{ top: '5px', left: '8px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' } }}
            />
            <motion.div 
              className="absolute w-[1.5px] h-[1.5px] bg-gray-400 rounded-full"
              style={{ top: '10px', left: '16px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], transition: { duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 } }}
            />
            <motion.div 
              className="absolute w-[1px] h-[1px] bg-gray-400 rounded-full"
              style={{ top: '14px', left: '12px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 1 } }}
            />
          </>
        )}
        
        {/* Track icons */}
        <div className="absolute left-[6px]">
          <svg 
            className={`w-2.5 h-2.5 ${isNight ? 'text-amber-700 opacity-40' : 'text-amber-300 opacity-100'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute right-[6px]">
          <svg 
            className={`w-2.5 h-2.5 ${isNight ? 'text-gray-600 opacity-100' : 'text-white/80 opacity-40'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
        
        {/* Slider thumb */}
        <motion.div 
          className={`absolute w-[19px] h-[19px] rounded-full z-10 flex items-center justify-center
                    ${isNight 
                      ? 'bg-gradient-to-br from-[#333333] to-[#111111]' 
                      : 'bg-gradient-to-br from-[#34444C] to-[#1E2A33]'} 
                    shadow-lg transition-colors duration-500`}
          animate={{ 
            x: isNight ? 26 : 2,
            boxShadow: isNight 
              ? '0 0 8px rgba(51, 51, 51, 0.5), inset 0 0 5px rgba(255, 255, 255, 0.2)' 
              : '0 0 8px rgba(37, 50, 55, 0.7), inset 0 0 5px rgba(255, 255, 255, 0.3)'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 25 
          }}
        >
          {/* Icon inside the thumb */}
          {isNight ? (
            <motion.svg
              className="w-2.5 h-2.5 text-white"
              fill="currentColor" 
              viewBox="0 0 20 20"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </motion.svg>
          ) : (
            <motion.svg
              className="w-3 h-3 text-amber-300"
              fill="currentColor" 
              viewBox="0 0 20 20"
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </motion.svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
} 