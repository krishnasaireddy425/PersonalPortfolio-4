import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  details?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  details = "Detailed information about this project will be added soon.",
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[400px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{title}</CardTitle>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary-foreground px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {/* Opaque layer to block particles */}
          <div className="absolute inset-0 bg-background" />
          <Card className="relative h-full overflow-hidden bg-primary/5">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <CardTitle className="mb-4">{title}</CardTitle>
                <p className="text-muted-foreground">{details}</p>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-4 py-2 rounded text-center mt-4 hover:bg-primary/90 transition-colors"
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
