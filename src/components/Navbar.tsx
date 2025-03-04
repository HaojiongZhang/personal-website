
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') as string;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (href: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          className="font-medium text-lg tracking-tight"
          aria-label="Home"
        >
          <span className="font-semibold">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavItemClick(item.href)}
              className={cn(
                "text-sm font-medium transition-all duration-200 hover:text-primary relative py-2",
                activeSection === item.href.substring(1) 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "top-2 rotate-45" : "top-0"
              )}
            />
            <span 
              className={cn(
                "absolute w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "opacity-0" : "top-2 opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "top-2 -rotate-45" : "top-4"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b border-gray-100",
          mobileMenuOpen ? "max-h-64 py-5" : "max-h-0 py-0 overflow-hidden border-none"
        )}
      >
        <div className="container mx-auto px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavItemClick(item.href)}
                className={cn(
                  "text-sm font-medium transition-all py-2",
                  activeSection === item.href.substring(1) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
