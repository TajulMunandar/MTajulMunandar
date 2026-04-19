import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            About Me
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Code2, title: "Developer", desc: "Fullstack engineer building robust web & mobile systems with clean architecture." },
              { icon: Brain, title: "AI Engineer", desc: "Designing intelligent models — from computer vision to speech recognition and NLP." },
              { icon: Rocket, title: "Problem Solver", desc: "Turning complex data into actionable systems with automation and research." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 text-center group hover:glow-accent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={22} className="text-background" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I'm a passionate developer and AI engineer from Indonesia with hands-on experience
            building real-world projects — from AI-powered detection systems to fullstack web platforms.
            I thrive on turning complex problems into elegant, automated solutions. Always open for
            meaningful collaboration and new challenges.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
