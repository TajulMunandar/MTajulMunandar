import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain, Code2, Database, Smartphone, Search, Cog,
  Eye, Mic, Network
} from "lucide-react";

const skills = [
  { icon: Brain, name: "AI & Machine Learning", color: "from-blue-500 to-purple-500" },
  { icon: Code2, name: "Python & Flask", color: "from-green-400 to-cyan-500" },
  { icon: Database, name: "Laravel & Backend API", color: "from-red-400 to-orange-500" },
  { icon: Smartphone, name: "React / Flutter", color: "from-cyan-400 to-blue-500" },
  { icon: Search, name: "Data Scraping & Research", color: "from-yellow-400 to-orange-400" },
  { icon: Cog, name: "Automation Systems", color: "from-purple-400 to-pink-500" },
  { icon: Eye, name: "Computer Vision (YOLO/SSD)", color: "from-indigo-400 to-blue-600" },
  { icon: Mic, name: "Speech Recognition", color: "from-pink-400 to-rose-500" },
  { icon: Network, name: "System Architecture", color: "from-teal-400 to-emerald-500" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:glow-accent transition-all duration-300 cursor-default"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <skill.icon size={20} className="text-foreground" />
              </div>
              <span className="font-medium text-sm text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
