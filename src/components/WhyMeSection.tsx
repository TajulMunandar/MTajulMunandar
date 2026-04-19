import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Search, Layers, Target, MessageCircle, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Execution", desc: "Rapid prototyping and delivery without compromising quality." },
  { icon: Search, title: "Deep Research", desc: "Thorough analysis and data-driven decision making." },
  { icon: Layers, title: "Clean Architecture", desc: "Scalable, maintainable code with best practices." },
  { icon: Target, title: "Real-World Solutions", desc: "Practical systems that solve actual business problems." },
  { icon: MessageCircle, title: "Communication", desc: "Clear, proactive communication throughout every project." },
  { icon: HeartHandshake, title: "Long-Term Support", desc: "Committed to ongoing maintenance and partnership growth." },
];

const WhyMeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            Why Work With Me
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="glass-card rounded-xl p-6 text-center group hover:glow-accent transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <r.icon size={20} className="text-background" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1.5">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
