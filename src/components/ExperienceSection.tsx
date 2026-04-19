import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, BarChart3, Globe, Smartphone, Bot } from "lucide-react";

const timeline = [
  { icon: Brain, title: "AI Model Development", desc: "Designed and trained deep learning models for computer vision and NLP tasks." },
  { icon: BarChart3, title: "Data Research Projects", desc: "Built research systems for data collection, analysis, and visualization." },
  { icon: Globe, title: "Web System Development", desc: "Developed fullstack web platforms with Laravel, React, and REST APIs." },
  { icon: Smartphone, title: "Mobile App with Offline Sync", desc: "Created Flutter mobile apps with offline-first architecture and sync." },
  { icon: Bot, title: "Automation & Scraping Systems", desc: "Engineered automated data pipelines and intelligent scraping tools." },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            What I Build
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="flex gap-6 mb-8 last:mb-0 relative"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 z-10">
                <item.icon size={20} className="text-background" />
              </div>
              <div className="glass-card rounded-xl p-5 flex-1 hover:glow-accent transition-all duration-300">
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
