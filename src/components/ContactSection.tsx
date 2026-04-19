import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MessageSquare, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "contact@tajulmunandar.com", href: "mailto:contact@tajulmunandar.com" },
  { icon: Github, label: "GitHub", value: "github.com/tajulmunandar", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", value: "Muhammad Tajul Munandar", href: "https://linkedin.com/in/" },
  { icon: MessageSquare, label: "WhatsApp", value: "Available", href: "https://wa.me/" },
  { icon: MapPin, label: "Location", value: "Indonesia", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-primary/5 blur-[120px] rounded-full -translate-x-1/2" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            Get In Touch
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-accent transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:gradient-bg transition-all">
                <c.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground truncate">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
