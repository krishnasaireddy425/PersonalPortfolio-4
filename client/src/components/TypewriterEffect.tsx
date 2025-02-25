import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterEffectProps {
  phrases: string[];
  className?: string;
}

export default function TypewriterEffect({ phrases, className = "" }: TypewriterEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          setTimeout(typeText, typingSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, currentText.length - 1));
          setTimeout(typeText, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={className}
      >
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
        />
      </motion.span>
    </AnimatePresence>
  );
}
