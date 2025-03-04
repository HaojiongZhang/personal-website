
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 relative bg-card border-t border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={cn(
                "p-2 rounded-full",
                "bg-secondary text-secondary-foreground",
                "transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
