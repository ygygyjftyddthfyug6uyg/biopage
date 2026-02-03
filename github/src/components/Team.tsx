// Team member data - easy to edit!
const teamMembers = [
  {
    name: "Your Name",
    role: "Co-Founder",
    description: "Add a short bio here about yourself.",
  },
  {
    name: "Friend 1",
    role: "Co-Founder",
    description: "Add a short bio here about your friend.",
  },
  {
    name: "Friend 2",
    role: "Co-Founder",
    description: "Add a short bio here about your friend.",
  },
  {
    name: "Friend 3",
    role: "Co-Founder",
    description: "Add a short bio here about your friend.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full gradient-glow opacity-20" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2.5 mb-8 text-sm font-medium rounded-full border border-primary/30 bg-primary/10 text-primary backdrop-blur-sm">
            Our Team
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-foreground">
            Meet the Founders
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four friends from Luleå, Sweden with a shared vision.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 rounded-2xl p-8 border border-border backdrop-blur-sm hover-lift hover-glow hover:border-primary/30 transition-all duration-500 text-center overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                {member.name.charAt(0)}
              </div>
              
              <h3 className="relative text-lg font-bold font-display mb-2 text-foreground">
                {member.name}
              </h3>
              
              <span className="relative inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {member.role}
              </span>
              
              <p className="relative text-sm text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
