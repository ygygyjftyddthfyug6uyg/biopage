const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full gradient-glow animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full gradient-glow animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 left-32 w-2 h-2 rounded-full bg-accent animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-40 w-4 h-4 rounded-full bg-primary/50 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-48 left-20 w-2 h-2 rounded-full bg-accent/50 animate-float" style={{ animationDelay: '0.5s' }} />
      
      <div className="container relative z-10 px-6 py-20 text-center">
        <span className="inline-block px-5 py-2.5 mb-8 text-sm font-medium rounded-full border border-primary/30 bg-primary/10 text-primary animate-fade-up backdrop-blur-sm">
          Est. August 2025
        </span>
        
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 tracking-tight animate-fade-up-delay-1">
          <span className="text-gradient">Thriving</span>
          <span className="text-foreground"> UF</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-2">
          Four friends from Luleå, Sweden building something meaningful together. 
          We believe in growth, collaboration, and making a positive impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a 
            href="#about" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl gradient-hero text-primary-foreground shadow-glow hover-lift hover-glow overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 animate-shimmer" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl bg-secondary/50 text-foreground border border-border backdrop-blur-sm hover-lift hover:border-primary/50 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
