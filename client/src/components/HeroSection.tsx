import { motion, useScroll, useTransform } from "framer-motion";
import BaffleText from "./BaffleText";
import TypewriterEffect from "./TypewriterEffect";

interface HeroSectionProps {
  scrollToSection?: (index: number) => void;
  isNight?: boolean;
}

export default function HeroSection({ scrollToSection, isNight = false }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const roles = [
    "I am a Full Stack Developer",
    "I am a CS Student",
    "I am a Software Engineer"
  ];

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionIndex: number) => {
    if (isNight && scrollToSection) {
      e.preventDefault();
      scrollToSection(sectionIndex);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BaffleText
              text="Hi, I'm Krishna Sai Reddy"
              revealDelay={500}
              scrambleSpeed={100}
              className="text-4xl md:text-6xl font-bold mb-4 dark:text-white dark:drop-shadow-lg"
            />
            <TypewriterEffect
              phrases={roles}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 block dark:text-white dark:drop-shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => handleButtonClick(e, 2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md transition-colors 
                         dark:bg-gradient-to-r dark:from-amber-400 dark:to-amber-500 dark:text-black dark:shadow-md"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleButtonClick(e, 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors 
                         dark:border-white dark:text-white dark:hover:bg-white/20"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}