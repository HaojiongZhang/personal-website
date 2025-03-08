
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Bot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/#home', isExternal: false },
  { name: 'About', href: '/#about', isExternal: false },
  { name: 'Projects', href: '/#projects', isExternal: false },
  { name: 'Experience', href: '/#experience', isExternal: false },
  { name: 'ChessBot', href: '/chessbot', isExternal: false, icon: <Bot size={16} className="mr-1" /> },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Only find active section on homepage
      if (location.pathname === '/') {
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (item: NavItem) => {
    if (item.href.startsWith('#') || item.href.startsWith('/#')) {
      return activeSection === item.href.replace('/#', '').replace('#', '') && location.pathname === '/';
    }
    return location.pathname === item.href;
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-medium text-lg tracking-tight"
          aria-label="Home"
        >
          <span className="font-semibold">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavItemClick}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative py-2 flex items-center",
                  isActive(item) ? "text-primary" : "text-muted-foreground"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                {item.name}
                {isActive(item) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavItemClick}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative py-2 flex items-center",
                  isActive(item) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.icon}
                {item.name}
                {isActive(item) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            )
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
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavItemClick}
                  className={cn(
                    "text-sm font-medium transition-all py-2 flex items-center",
                    isActive(item) ? "text-primary" : "text-muted-foreground"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavItemClick}
                  className={cn(
                    "text-sm font-medium transition-all py-2 flex items-center",
                    isActive(item) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
