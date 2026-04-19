import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";

const links = [
  { icon: Mail, label: "Email Me", href: "mailto:contact@tajulmunandar.com" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: Github, label: "GitHub", href: "https://github.com/" },
];

const CollaborateSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="collaborate" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let's Collaborate
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I'm open to collaboration for AI projects, system development, data research, and startup building.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl px-6 py-3.5 flex items-center gap-3 font-medium text-sm text-foreground hover:glow-blue transition-all duration-300 hover:scale-105 gradient-border"
              >
                <link.icon size={18} className="text-primary" />
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborateSection;
