import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Eye, Mail } from "lucide-react";
import profileImage from "@/assets/harshita-profile.jpg";
const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Aspiring Software Engineer", "B.Tech Graduate from KLU", "Full-Stack Developer", "Problem Solver"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: "4s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-scale">
            <div className="relative inline-block">
              
              
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">Harshita</span>{" "}
            <span className="text-foreground">Sunkavalli</span>
          </h1>

          {/* Animated Title */}
          <div className="h-16 mb-6 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <h2 className="text-xl md:text-2xl text-muted-foreground transition-all duration-500">
              {titles[currentTitle]}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: "0.4s"
        }}>
            "Building <span className="text-primary">code</span> and <span className="text-secondary">ideas</span> for a smarter tomorrow."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{
          animationDelay: "0.6s"
        }}>
            <Button asChild variant="hero" size="lg" className="group" aria-label="View Resume">
              <a href="https://drive.google.com/file/d/1jqwB-jd3h5Nw5O3HBfTEdvsQQI5iGElf/view" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                View Resume
              </a>
            </Button>
            <Button 
              variant="neon" 
              size="lg" 
              className="group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Projects
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 text-xs font-mono text-primary/30 animate-float hidden lg:block">
        {`const developer = {
  name: "Harshita",
  passion: "coding"
};`}
      </div>
      <div className="absolute bottom-20 right-10 text-xs font-mono text-secondary/30 animate-float hidden lg:block" style={{
      animationDelay: "3s"
    }}>
        {`while(learning) {
  skills++;
  dreams.push("innovation");
}`}
      </div>
    </section>;
};
export default HeroSection;