import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const socialLinks = [{
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/harshita-sunkavalli",
    color: "hover:text-blue-400"
  }, {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/harshita-sunkavalli",
    color: "hover:text-gray-400"
  }, {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/harshita_dev",
    color: "hover:text-blue-300"
  }];
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "harshita.sunkavalli@example.com",
    link: "mailto:harshita.sunkavalli@example.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 12345 67890",
    link: "tel:+911234567890"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    link: "https://maps.google.com/?q=Hyderabad,India"
  }];
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss how we can work together on amazing projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="glass border-primary/30 focus:border-primary" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="glass border-primary/30 focus:border-primary" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hello..." rows={5} className="glass border-primary/30 focus:border-primary resize-none" />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map(item => {
                  const IconComponent = item.icon;
                  return <a key={item.label} href={item.link} className="flex items-center p-4 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="p-3 bg-gradient-primary/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{item.label}</div>
                          <div className="text-foreground font-medium">{item.value}</div>
                        </div>
                      </a>;
                })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
                
                <div className="flex gap-4">
                  {socialLinks.map(social => {
                  const IconComponent = social.icon;
                  return <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-4 glass rounded-lg hover:scale-110 transition-all duration-300 ${social.color} group`}>
                        
                      </a>;
                })}
                </div>
                
                <p className="text-muted-foreground mt-4 text-sm">
                  Follow me for updates on my latest projects and tech insights
                </p>
              </div>

              {/* Quick Response Promise */}
              <div className="glass-card p-6 rounded-2xl border border-primary/30">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <span className="text-green-400 font-semibold">Quick Response</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;