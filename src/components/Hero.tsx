
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3 opacity-90">
            <div className="inline-block animate-fade-in-up">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                Welcome to my portfolio
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
              <span className="block animate-text-reveal inline-block delay-[300ms]">
                with <span className="text-primary">purpose</span> and <span className="text-primary">precision</span>
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            I'm a passionate designer and developer focused on crafting beautiful, functional digital experiences that connect with users and drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
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
              href="#contact" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 font-medium",
                "bg-secondary text-secondary-foreground rounded-full",
                "transition-all duration-300 ease-in-out",
                "hover:bg-secondary/80"
              )}
            >
              Get in Touch
            </a>
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
