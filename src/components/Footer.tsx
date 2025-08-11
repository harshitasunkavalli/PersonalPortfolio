import { Button } from "@/components/ui/button";
import { ChevronUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="gradient-text text-2xl font-bold">
                Harshita Sunkavalli
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Aspiring Software Engineer passionate about creating innovative 
                solutions and building the future through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Stay Connected</h4>
              <p className="text-muted-foreground text-sm">
                Let's connect and build something amazing together!
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20">
            <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© 2024 Harshita Sunkavalli. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
              <span>and React</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="group hover:bg-primary/10"
            >
              <ChevronUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Easter Egg - Hidden Animation */}
      <div className="fixed bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 bg-gradient-primary rounded-full animate-pulse cursor-pointer hover:animate-bounce"></div>
      </div>
    </footer>
  );
};

export default Footer;