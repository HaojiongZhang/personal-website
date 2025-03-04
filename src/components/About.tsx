
import { Code, Laptop, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SkillCard = ({ icon, title, description, className }: SkillCardProps) => (
  <div 
    className={cn(
      "glassmorphism rounded-2xl p-6 transition-all duration-300",
      "hover:shadow-lg hover:transform hover:-translate-y-1",
      "border border-border/40",
      className
    )}
  >
    <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/5 text-primary">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,200,200,0.05)_0,rgba(200,200,200,0)_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  About Me
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight animate-fade-in-up">
              Combining creativity with technical expertise
            </h2>
            
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate digital creator with experience in design and development. I focus on creating clean, user-friendly experiences that solve real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With attention to detail and a commitment to quality, I transform ideas into beautiful, functional digital solutions that help businesses grow and connect with their audience.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 animate-fade-in-up">
              <div>
                <h4 className="font-medium mb-2">Design Tools</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Sketch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Development</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-blur-in">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Workspace with computer and code"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="mb-3 animate-fade-in-up">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  My Skills
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight tracking-tight animate-fade-in-up">
              What I bring to the table
            </h2>
            <p className="text-muted-foreground animate-fade-in-up">
              I combine technical skills with creative thinking to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard
              icon={<Palette size={24} />}
              title="UI/UX Design"
              description="Creating beautiful, intuitive interfaces focused on usability and accessibility."
              className="animate-fade-in-up"
            />
            <SkillCard
              icon={<Code size={24} />}
              title="Development"
              description="Building responsive, performant websites and applications with modern technologies."
              className="animate-fade-in-up delay-[150ms]"
            />
            <SkillCard
              icon={<Laptop size={24} />}
              title="Digital Strategy"
              description="Aligning digital solutions with business goals for maximum impact and ROI."
              className="animate-fade-in-up delay-[300ms]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
