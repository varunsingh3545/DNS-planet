import { motion } from "framer-motion";
import { Globe, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Platform",
      color: "eco-green",
      links: [
        { label: "AI Agents", href: "#ai-agents" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Live Earth", href: "#live-earth" },
        { label: "Research Portal", href: "#research" }
      ]
    },
    {
      title: "Community",
      color: "neon-blue",
      links: [
        { label: "Citizen Science", href: "#public-layer" },
        { label: "Education Hub", href: "#public-layer" },
        { label: "Career Portal", href: "#public-layer" },
        { label: "About Us", href: "#about" }
      ]
    },
    {
      title: "Investors",
      color: "infrared-orange",
      links: [
        { label: "Investment Overview", href: "#investor" },
        { label: "Pitch Deck", href: "#" },
        { label: "Financial Reports", href: "#" },
        { label: "Contact IR", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", color: "eco-green" },
    { icon: Linkedin, href: "#", color: "neon-blue" },
    { icon: Github, href: "#", color: "infrared-orange" }
  ];

  return (
    <footer className="bg-[hsl(var(--space-black))] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] flex items-center justify-center">
                <Globe className="w-4 h-4 text-black" />
              </div>
              <span className="text-lg font-bold gradient-text">DNS Planet</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Digital Nervous System of the Planet - Connecting AI and conservation for a sustainable future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-[hsl(var(--${social.color}))] hover:text-[hsl(var(--${social.color === 'eco-green' ? 'neon-blue' : social.color === 'neon-blue' ? 'infrared-orange' : 'eco-green'}))] transition-colors duration-300`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg font-bold text-[hsl(var(--${section.color}))] mb-4`}>
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <button
                      onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href, '_blank')}
                      className="text-gray-300 hover:text-[hsl(var(--eco-green))] transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Digital Nervous System of the Planet. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-[hsl(var(--eco-green))] text-sm transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-[hsl(var(--eco-green))] text-sm transition-colors duration-300">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-[hsl(var(--eco-green))] text-sm transition-colors duration-300">
              Cookie Policy
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
