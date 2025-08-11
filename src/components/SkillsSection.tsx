import { useEffect, useState, useRef } from "react";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "React", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Node.js", level: 78 },
        { name: "Express.js", level: 75 },
        { name: "Django", level: 70 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 },
        { name: "Jenkins", level: 65 },
        { name: "Kubernetes", level: 60 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuously learning and mastering technologies to build amazing solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card p-8 rounded-2xl"
                  style={{
                    animationDelay: `${categoryIndex * 0.2}s`,
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-primary/20 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"></div>
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                            }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Summary */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines strong fundamentals with practical experience, allowing me to 
                adapt quickly to new challenges and deliver high-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;