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
    details: "Developed a machine learning-based stock optimization framework leveraging XGBoost and PySpark to analyze 20 years of Nasdaq data. Implemented weighted ensemble modeling for predictive accuracy and designed an automated trading strategy. Achieved an estimated annual profit increase from 5% to 10%, demonstrating the effectiveness of AI in financial forecasting.",
    technologies: ["Python", "XGBoost", "PySpark"],
    image: "./assets/img2.png",
    link: "https://example.com/project1"
  },
  {
    title: "Skin Lesion Classifier",
    details: "In this project, I developed a deep learning model to detect skin cancer using CNN and transfer learning. The model achieved an accuracy of 85% in identifying seven classes of skin diseases. It was trained on the HAM10000 dataset using the TensorFlow framework for designing, training, and evaluating the model.",
    technologies: ["TensorFlow", "CNN", "Transfer Learning"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800",
    link: "https://example.com/project3"
  },
  {
    title: "Personal Portfolio",
    details: "A sleek and modern portfolio website that elegantly showcases my skills, projects, and professional journey. Built with a minimalist design and intuitive navigation, the site features smooth animations and a responsive layout that adapts flawlessly across devices. Each section is carefully crafted to highlight my expertise and creativity, offering visitors a compelling and immersive browsing experience.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800",
    link: "https://krishnasaireddy425.github.io/PersonalPortfolio-4/"
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
                      <ProjectCard {...project} />
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
          // Desktop grid view
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
