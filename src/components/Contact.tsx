
import { Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const ContactItem = ({ icon, title, value, href }: ContactItemProps) => (
  <div className="flex items-start mb-6">
    <div className="mr-3 mt-1 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-muted-foreground mb-1">{title}</h4>
      {href ? (
        <a 
          href={href} 
          className="hover:text-primary transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05)_0,rgba(200,200,200,0)_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight tracking-tight animate-fade-in-up">
            Let's work together
          </h2>
          
          <p className="text-muted-foreground animate-fade-in-up">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <div className="animate-fade-in-up">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-medium mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white bg-opacity-80 border border-border",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      )}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white bg-opacity-80 border border-border",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      )}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white bg-opacity-80 border border-border",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      )}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={cn(
                        "w-full inline-flex items-center justify-center px-6 py-4 font-medium",
                        "bg-primary text-primary-foreground rounded-xl",
                        "transition-all duration-300 ease-in-out",
                        "hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed",
                        formStatus === 'success' && "bg-green-600"
                      )}
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : formStatus === 'success' ? (
                        <span>Message Sent!</span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Information - Right Side */}
          <div className="animate-fade-in-up delay-[200ms]">
            <div className="glassmorphism rounded-2xl p-8 h-full">
              <h3 className="text-xl font-medium mb-8">Contact information</h3>
              
              <ContactItem
                icon={<Mail size={20} />}
                title="Email"
                value="hello@example.com"
                href="mailto:hello@example.com"
              />
              
              <ContactItem
                icon={<Phone size={20} />}
                title="Phone"
                value="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              
              <ContactItem
                icon={<MapPin size={20} />}
                title="Location"
                value="San Francisco, CA"
              />
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {['Github', 'Twitter', 'LinkedIn', 'Instagram'].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-full",
                        "bg-secondary text-secondary-foreground",
                        "transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      )}
                      aria-label={social}
                    >
                      <span className="text-xs">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
