
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.05)_0,rgba(120,120,120,0)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Text Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="mb-3 opacity-90">
              <div className="inline-block animate-fade-in-up">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Hello, I'm a developer
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-tight lg:leading-tight mb-6 tracking-tight">
              <span className="block overflow-hidden">
                <span className="block animate-text-reveal inline-block delay-[0ms]">
                  Creating digital experiences
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-text-reveal inline-block delay-[300ms] text-primary">
                  that matter
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              I'm a passionate developer and engineer focused on building products that combine clean design with efficient code. With experience at companies like Google and Twitter, I bring both creativity and technical expertise to every project.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <a 
                href="#projects" 
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 font-medium",
                  "bg-primary text-primary-foreground rounded-full",
                  "transition-all duration-300 ease-in-out",
                  "hover:shadow-md hover:transform hover:-translate-y-1"
                )}
              >
                View Projects
              </a>
              <a 
                href="#experience" 
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 font-medium",
                  "bg-secondary text-secondary-foreground rounded-full",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-secondary/80"
                )}
              >
                See Experience
              </a>
            </div>
            
            <div className="pt-4 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="md:col-span-5 flex justify-center md:justify-end animate-blur-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/90 shadow-xl">
              <img 
                src="/lovable-uploads/41592500-06d1-446c-85ca-b624b4703ede.png" 
                alt="Developer portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
        >
          <ArrowDown size={20} className="text-foreground/70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
