const Footer = () => {
  return (
    <footer className="py-10 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-10" />
      
      <div className="container px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display text-gradient">Thriving</span>
            <span className="text-2xl font-bold font-display text-foreground">UF</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Thriving UF. All rights reserved.
          </p>
          
          <nav className="flex gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Team
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
