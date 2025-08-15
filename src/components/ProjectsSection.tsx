import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Learning Management System",
      description: "Comprehensive learning platform with course management and student tracking",
      image: "/api/placeholder/400/250",
      technologies: ["SpringBoot", "Java", "MySQL", "React"],
      category: "Web Development",
      github: "https://github.com/harshitasunkavalli/LMS_S38",
    },
    {
      title: "TicketGo",
      description: "Bus ticket booking application with seat selection and payment gateway",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Django", "HTML", "CSS", "SQL"],
      category: "Web Development",
      github: "https://github.com/harshitasunkavalli/bus-reservation-system-in-django-dev",
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather patterns and predictions",
      image: "/api/placeholder/400/250",
      technologies: ["React", "MongoDB", "Node.js"],
      category: "Data Science",
      github: "https://github.com/harshitasunkavalli/Weather-API",
    },
    {
      title: "ReviewMind",
      description: "Intelligent review analysis system using machine learning algorithms",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
      category: "Data Science",
      github: "https://github.com/harshitasunkavalli/Sentimentanalysisonreviews",
    },
    {
      title: "MediChain",
      description: "Blockchain-based medical records management system with secure data storage",
      image: "/api/placeholder/400/250",
      technologies: ["Blockchain", "Truffle", "MetaMask", "Ganache", "HTML"],
      category: "Web Development",
      github: "https://github.com/harshitasunkavalli/Medichain",
    },
  ];

  const categories = ["All", "Web Development", "Data Science", "Mobile Development"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my passion for creating innovative solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="group"
              >
                <Filter className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-primary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="neon" size="lg">
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;