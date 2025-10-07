import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  CarouselDots
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Optimizing Stock Portfolio Returns with Big Data and ML",
    // description: "ML-based stock optimization framework using XGBoost and PySpark for financial forecasting.",
    details: "Developed a machine learning-based stock optimization framework leveraging XGBoost and PySpark to analyze 20 years of Nasdaq data. Implemented weighted ensemble modeling for predictive accuracy and designed an automated trading strategy. Achieved an estimated annual profit increase from 5% to 10%, demonstrating the effectiveness of AI in financial forecasting.",
    technologies: ["Python", "XGBoost", "PySpark"],
    image: "./assets/img2.png",
    link: "https://medium.com/@krishnasaireddy275/optimizing-stock-portfolio-returns-using-big-data-and-machine-learning-07f6533060bd"
  },
  {
    title: "Torvi AI: Autonomous Workflow Orchestration with Intelligent Agents",
    // description: "Intelligent workflow orchestration platform with AI agents for automated task execution.",
    details: "Torvi AI is an intelligent workflow orchestration platform that combines automation, reasoning, and AI agents. Built with Next.js and Supabase, it enables users to design adaptive workflows and create AI agents that connect multiple tools, execute complex tasks, and make contextual decisions on triggers or scheduled intervals autonomously.",
    technologies: ["Next.js", "React", "Node.js"],
    image: "./assets/logo.png",
    link: "https://medium.com/@krishnasaireddy275/prefetch-ai-building-the-future-of-intelligent-workflow-orchestration-bb8d3b3e25f4"
  },
  {
    title: "AI-Powered Restaurant Review Q&A System (RAG Architecture)",
    // description: "Real-time Q&A system using RAG architecture with LangChain and LLMs for contextual responses.",
    details: "Developed a real-time Q&A system using RAG architecture with Python, LangChain, and LLMs (Ollama/Llama3). Ingested and embedded restaurant reviews using ChromaDB for semantic search. Implemented custom retrievers to surface relevant feedback, enabling context-aware, expert responses to user queries based on actual customer experiences at a pizza restaurant.",
    technologies: ["LangChain", "ChromaDB", "LLaMA 3"],
    image: "./assets/img1.png",
    link: "https://github.com/krishnasaireddy425/AI_Agent"
  },
  {
    title: "Spatial Regionalization using Reinforcement Learning (DQN)",
    // description: "Deep Q-Networks approach for spatial clustering optimization and regional partitioning.",
    details: "This project explores spatial regionalization using Deep Q-Networks, addressing the p-regions problem. By applying reinforcement learning, it dynamically optimizes spatial clustering, surpassing traditional methods like Region2Vec in adaptability, efficiency, and producing balanced, homogeneous regional partitions.",
    technologies: ["TensorFlow", "Python", "Scikit-learn"],
    image: "./assets/img4.png",
    link: "https://medium.com/@krishnasaireddy275/spatial-regionalization-using-reinforcement-learning-dqn-25795353d28b"
  }  
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-12 dark:text-[#3B3B3B]">Featured Projects</h2>
        
        {isMobile ? (
          // Mobile carousel view
          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                containScroll: "trimSnaps",
              }}
              onSlideChange={setActiveIndex}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-4 md:basis-4/5 lg:basis-1/2">
                    <div className={`transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-70'}`}>
                      <ProjectCard {...project} isNight={false} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop horizontal scroll view
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
              <div className="flex gap-8 min-w-max px-4">
                {projects.map((project) => (
                  <div key={project.title} className="flex-shrink-0 w-[400px] lg:w-[450px]">
                    <ProjectCard {...project} isNight={false} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll hint for desktop */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-black opacity-70">
              ← Scroll horizontally to see more projects →
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
