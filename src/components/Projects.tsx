import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: "Distributed Computing System",
    description:
      "A distributed computing system modeled after hadoop (optimized for smaller files) with built in sql query engine.",
    tags: ["Go"],
    codeLink: "https://github.com/HaojiongZhang/Distributed-Computing-System",
  },
  {
    title: "Linux-like OS",
    description:
      "Built a lightweight operating system from scratch with key features:\n• Memory paging and virtual memory management\n• Hardware interrupt handling (i8259 PIC)\n• CPU exception handling\n• PS/2 keyboard driver\n• In-memory filesystem\n• Round-robin process scheduling",
    tags: ["C", "x86 Assembly", "Makefile"],
    codeLink: "https://github.com/HaojiongZhang/Linux-based-OS",
  },
  {
    title: "Simplified LC-3 Processor",
    description:
      "Implemented a simplified LC-3 processor in SystemVerilog with key features:\n• Complete fetch-decode-execute cycle\n• FPGA and ModelSim compatibility\n• Core instructions: ADD*, AND*, NOT, BR, JMP, JSR, LDR, STR\n• Dual-mode arithmetic operations with immediate operands",
    tags: ["SystemVerilog", "FPGA", "ModelSim"],
    codeLink: "https://github.com/HaojiongZhang/SLC-3",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather forecasting app with location-based data and interactive maps.",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    codeLink: "#",
  },
  {
    title: "Recipe Finder",
    description:
      "Search engine for recipes with filtering by dietary restrictions and available ingredients.",
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "Workout tracking application with progress charts and personalized training plans.",
    tags: ["React Native", "Firebase", "D3.js"],
    codeLink: "#",
  },
  {
    title: "Budget Planner",
    description:
      "Personal finance management tool with expense categorization and budget insights.",
    tags: ["Vue.js", "Express", "MySQL"],
    codeLink: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics platform for social media accounts with performance metrics and audience insights.",
    tags: ["React", "GraphQL", "PostgreSQL"],
    codeLink: "#",
  },
  {
    title: "Language Learning App",
    description:
      "Interactive platform for language acquisition with spaced repetition and audio exercises.",
    tags: ["Flutter", "Firebase", "TensorFlow"],
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-tight tracking-tight">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium">{project.title}</h3>

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      className="text-primary hover:text-primary/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} code`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex px-2 py-1 text-xs rounded bg-secondary/50 text-secondary-foreground"
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
