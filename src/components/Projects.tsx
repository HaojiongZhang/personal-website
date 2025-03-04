
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website with smooth animations and a focus on typography and spacing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["NextJS", "TypeScript", "Tailwind"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application to help teams manage tasks, deadlines, and collaboration.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["React", "Firebase", "Material UI"],
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,200,200,0.05)_0,rgba(200,200,200,0)_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-3 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                Projects
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight tracking-tight animate-fade-in-up">
            Selected work
          </h2>
          
          <p className="text-muted-foreground animate-fade-in-up">
            A collection of projects that showcase my skills and approach to design and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "group flex flex-col rounded-xl overflow-hidden",
                "border border-border/40 bg-card",
                "transition-all duration-300 ease-in-out",
                "hover:shadow-xl",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 flex flex-col h-full">
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1.5" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1.5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
