import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              With a focus on creating elegant and efficient solutions, I bring ideas to life
              through clean code and intuitive user experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              My journey in software development has led me to work with various technologies
              including React, Node.js, and cloud platforms. I'm always excited to take on
              new challenges and create meaningful applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-muted-foreground">React, TypeScript, Tailwind</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-muted-foreground">Node.js, Express, PostgreSQL</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-2">Tools</h3>
              <p className="text-muted-foreground">Git, Docker, AWS</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">Figma, Adobe XD</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
