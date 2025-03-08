
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality and secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website with smooth animations.",
    tags: ["NextJS", "TypeScript", "Tailwind"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Task Management App",
    description: "A productivity application to help teams manage tasks.",
    tags: ["React", "Firebase"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting app with location-based data.",
    tags: ["JavaScript", "Weather API"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Recipe Finder",
    description: "Search engine for recipes with dietary restrictions filtering.",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fitness Tracker",
    description: "Workout tracking application with progress charts.",
    tags: ["React Native", "Firebase"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Budget Planner",
    description: "Personal finance management tool with expense insights.",
    tags: ["Vue.js", "Express"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform for social media accounts with metrics.",
    tags: ["React", "GraphQL"],
    demoLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Chess Game",
    description: "Interactive chess application with move validation and AI.",
    tags: ["React", "TypeScript"],
    demoLink: "/chessbot",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-gradient-to-b from-white to-gray-50">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="mb-3 opacity-90">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                My Work
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight tracking-tight">
            Projects
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills and experience in design and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image || "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    
                    {project.codeLink && (
                      <a 
                        href={project.codeLink}
                        className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} code`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
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
