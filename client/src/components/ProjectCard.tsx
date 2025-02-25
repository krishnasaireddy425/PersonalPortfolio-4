import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden">
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
      </a>
    </motion.div>
  );
}
