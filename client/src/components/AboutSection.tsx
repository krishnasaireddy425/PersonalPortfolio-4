import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useAnimationControls } from "framer-motion";

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
    skills: "Docker, Jenkins, AWS, GIT, JIRA, Apache Kafka",
  },
  {
    title: "Programming",
    skills: "Java, Python, C, C++, SQL, JavaScript",
  },
];

interface AboutSectionProps {
  isNight?: boolean;
}

export default function AboutSection({ isNight = false }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && isNight) {
      controls.start({
        x: [-2000, 0],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }
      });
    } else {
      controls.stop();
    }
  }, [isMobile, isNight, controls]);

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
              Over the past few years, I've built scalable web applications and backend services using technologies like Java, Spring Boot, and REST APIs—focusing on performance, security, and maintainability.
            </p>
            <p className="text-lg text-muted-foreground dark:text-white">
            I build responsive interfaces with React and tie things together using tools like Docker, AWS, and Git. I've worked on platforms with real-time analytics, AI-powered support, and performance dashboards. I'm always learning and love creating systems that make a real impact.
            </p>
          </motion.div>

          {isMobile && isNight ? (
            <div className="relative w-full h-[200px] overflow-hidden touch-pan-x">
              <div className="absolute w-full h-full">
                <motion.div 
                  className="flex gap-4 absolute left-0"
                  animate={controls}
                  style={{ width: "max-content" }}
                  onHoverStart={() => controls.stop()}
                  onHoverEnd={() => {
                    controls.start({
                      x: [-2000, 0],
                      transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }
                    });
                  }}
                  onTouchStart={() => controls.stop()}
                  onTouchEnd={() => {
                    controls.start({
                      x: [-2000, 0],
                      transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }
                    });
                  }}
                >
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                      {skillCards.map((card) => (
                        <motion.div
                          key={`${i}-${card.title}`}
                          className="min-w-[175px] h-[180px] bg-muted dark:bg-[#D9C0C0] p-4 rounded-lg shadow-lg flex flex-col justify-center"
                          whileHover={{ 
                            scale: 1.1,
                            y: -10,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 15
                            }
                          }}
                          whileTap={{ 
                            scale: 1.1,
                            y: -10,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 15
                            }
                          }}
                        >
                          <h3 className="text-lg font-bold mb-4 dark:text-black text-center">{card.title}</h3>
                          <p className="text-muted-foreground dark:text-black text-center">{card.skills}</p>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </motion.div>
    </section>
  );
}