import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCards = [
  {
    title: "Frontend",
    skills: "React, TypeScript, Javascript, CSS, React, XML",
  },
  {
    title: "Backend",
    skills: "Spring Boot, PostgreSQL,  Spring Boot, REST , SOAP",
  },
  {
    title: "DevOps, Tools & Infrastructure",
    skills: "Git, Docker, AWS, Docker, Jenkins, GIT, JIRA, Postgres, AWS, Apache Kafka",
  },
  {
    title: "Programming",
    skills: "Java, Python, C, C++, SQL, JavaScript",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-lg text-muted-foreground mb-4 dark:text-white">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              Over the past few years, I’ve built scalable web applications and backend services using technologies like Java, Spring Boot, and REST APIs—focusing on performance, security, and maintainability.
            </p>
            <p className="text-lg text-muted-foreground dark:text-white">
              On the frontend, I work with React to craft responsive interfaces, and I often bring everything 
              together using tools like Docker, AWS, and Git. I’ve also built internal platforms with real-time analytics, automated support features using AI integrations, and dashboards for monitoring system performance with Grafana and Kibana. 
              Earlier on, I contributed to healthcare applications by building reliable test automation frameworks. I'm always curious, always learning, and passionate about building systems that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skillCards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-muted dark:bg-[#D9C0C0] p-4 rounded-lg transform transition-all duration-200 hover:shadow-lg"
              >
                <h3 className="font-bold mb-2 dark:text-black">{card.title}</h3>
                <p className="text-muted-foreground dark:text-black">{card.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}