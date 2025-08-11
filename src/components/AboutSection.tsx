import { GraduationCap, School, Award } from "lucide-react";

const AboutSection = () => {
  const educationTimeline = [
    {
      year: "2020",
      institution: "Vasavi Ideal Public School",
      degree: "10th Grade",
      icon: School,
    },
    {
      year: "2020-2022",
      institution: "Sasi Junior College, Nallerla",
      degree: "Intermediate",
      icon: GraduationCap,
    },
    {
      year: "2020-2024",
      institution: "KL University",
      degree: "B.Tech",
      icon: Award,
    },
  ];

  const skills = [
    "Java", "Python", "JavaScript", "React", "Spring Boot", 
    "MySQL", "AWS", "Git", "Node.js", "MongoDB"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about software development and learning new technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Introduction */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a recent B.Tech graduate from KL University, I'm passionate about creating 
                  innovative software solutions that make a real difference. My journey in 
                  technology began with curiosity and has evolved into a deep commitment to 
                  continuous learning and excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, efficient code and staying updated with the 
                  latest industry trends. My goal is to contribute to meaningful projects 
                  that solve real-world problems while growing as a professional developer.
                </p>
              </div>

              {/* Skills Snapshot */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Skills Snapshot</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-gradient-primary/20 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
                Education <span className="gradient-text">Timeline</span>
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
                
                {educationTimeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="relative flex items-start mb-8 last:mb-0">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full shadow-neon">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-6 flex-1">
                        <div className="glass-card p-6 rounded-xl">
                          <div className="text-sm text-primary font-semibold mb-1">
                            {item.year}
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-2">
                            {item.degree}
                          </h4>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;