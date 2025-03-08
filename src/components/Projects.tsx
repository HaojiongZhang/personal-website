
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
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting app with location-based data and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Recipe Finder",
    description: "Search engine for recipes with filtering by dietary restrictions and available ingredients.",
    image: "https://images.unsplash.com/photo-1495546968767-f0573cca821e",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Fitness Tracker",
    description: "Workout tracking application with progress charts and personalized training plans.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    tags: ["React Native", "Firebase", "D3.js"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Budget Planner",
    description: "Personal finance management tool with expense categorization and budget insights.",
    image: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd",
    tags: ["Vue.js", "Express", "MySQL"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform for social media accounts with performance metrics and audience insights.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    tags: ["React", "GraphQL", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Language Learning App",
    description: "Interactive platform for language acquisition with spaced repetition and audio exercises.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    tags: ["Flutter", "Firebase", "TensorFlow"],
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,200,200,0.05)_0,rgba(200,200,200,0)_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "group flex flex-col rounded-xl overflow-hidden",
                "border border-border/40 bg-card",
                "transition-all duration-300 ease-in-out",
                "hover:shadow-md",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      className="inline-flex items-center text-xs font-medium text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                  )}
                  
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      className="inline-flex items-center text-xs font-medium text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} className="mr-1" />
                      Code
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
