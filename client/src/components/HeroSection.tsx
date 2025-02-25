import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="Hello, I'm John Doe"
            className="text-4xl md:text-6xl font-bold mb-4"
          />
          <AnimatedText
            text="Full Stack Developer"
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
