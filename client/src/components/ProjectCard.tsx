import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlipHorizontal } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  details?: string;
  isNight: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  details,
  isNight,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[432px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card #8C8C8C Night mode card background*/}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="h-full overflow-hidden dark:bg-[#8C8C8C] dark:border-[#737373] dark:border-2 relative hover:dark:border-[#D1D1D1] transition-all duration-300">
            <CardHeader className="p-0">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-[17.42rem] object-cover"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2 dark:text-[#FAF9F6] text-xl font-semibold">{title}</CardTitle>
              <p className="text-muted-foreground mb-4 dark:text-[#333333] font-medium">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                      ${index === 0 
                        ? 'bg-[#1A1A1A] text-[#8C8C8C]' 
                        : 'bg-[#E0E0E0] text-[#1A1A1A] border border-[#CCCCCC]'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-3 right-3">
                <motion.div
                  className="p-2 rounded-full transition-all duration-300 bg-[#1A1A1A]/10 text-[#1A1A1A] dark:bg-[#FFFFFF]/10 dark:text-[#FFFFFF] opacity-70 hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FlipHorizontal size={18} className="animate-pulse" />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="relative h-full overflow-hidden dark:bg-[#8C8C8C] dark:border-[#E8E8E8]">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <CardTitle className="mb-4 dark:text-[#262626] text-xl font-medium tracking-wide">{title}</CardTitle>
                <p className="text-muted-foreground dark:text-[#FAF9F6] leading-relaxed">{details}</p>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C2C2C] text-white px-4 py-2 rounded text-center mt-4 hover:bg-[#404040] transition-all duration-300 font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
              </a>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
