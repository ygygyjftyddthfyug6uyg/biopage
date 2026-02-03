const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-5 py-2.5 mb-8 text-sm font-medium rounded-full border border-primary/30 bg-primary/10 text-primary animate-fade-up backdrop-blur-sm">
            About Us
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-10 text-foreground animate-fade-up-delay-1">
            Who We Are
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up-delay-2">
            Thriving UF was founded in August 2025 by four friends from Luleå, Sweden. 
            We came together with a shared vision and the belief that when passionate 
            people collaborate, extraordinary things happen.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up-delay-3">
            Our name reflects our core philosophy: we're not just surviving, we're thriving. 
            Every day, we push ourselves to grow, learn, and create something that makes a difference.
          </p>
        </div>
        
        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
              title: "Innovation",
              description: "We embrace new ideas and aren't afraid to think differently.",
              delay: "0s"
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              ),
              title: "Collaboration",
              description: "Together we achieve more than we ever could alone.",
              delay: "0.1s"
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              ),
              title: "Excellence",
              description: "We strive for quality in everything we do.",
              delay: "0.2s"
            }
          ].map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover-lift hover-glow hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: value.delay }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {value.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
