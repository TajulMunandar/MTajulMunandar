import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Award, TrendingUp, Users, ExternalLink } from "lucide-react";
import usePortfolioApi, { getImageUrl } from "../hooks/usePortfolioApi";
import { Skeleton } from "../components/ui/skeleton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Achievement } from "../hooks/usePortfolioApi";
import { getRandomIcon } from "../lib/randomIcons";

const Experience = () => {
  const { loading, experiences, skills, achievements } = usePortfolioApi();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-sm text-muted-foreground">Career Journey</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Experience & <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey through years of building AI systems, web applications, and solving complex problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
              Career Timeline
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className={`flex gap-6 mb-10 last:mb-0 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-[calc(50%-3rem)] ml-20 md:ml-0">
                      <Skeleton className="glass-card rounded-2xl p-6 h-48" />
                    </div>
                  </div>
                ))
              ) : (
                experiences.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    className={`flex gap-6 mb-10 last:mb-0 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-[calc(50%-3rem)] ml-20 md:ml-0">
                      <div className="glass-card rounded-2xl p-6 hover:glow-accent transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium gradient-bg text-background">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-accent mb-3">{item.company}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                       <div className="flex flex-wrap gap-2">
                         {Array.isArray(item.highlights) ? item.highlights.map((h, idx) => (
                           <span key={idx} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                             {h}
                           </span>
                         )) : null}
                       </div>
                      </div>
                    </div>

                     {/* Mobile icon */}
                     <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center z-10">
                       {(() => {
                         const IconComponent = getRandomIcon(item.id + 400);
                         return <IconComponent className="text-xl text-background" />;
                       })()}
                     </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
              Technical Skills
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="grid md:grid-cols-2 gap-6">
              {loading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} className="glass-card rounded-xl p-5">
                    <div className="flex justify-between items-center mb-3">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))
              ) : (
                skills.map((skill, i) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    className="glass-card rounded-xl p-5"
                  >
                     <div className="flex justify-between items-center mb-3">
                       <div className="flex items-center gap-2">
                         {(() => {
                           const IconComponent = getRandomIcon(skill.id + 200);
                           return <IconComponent size={18} style={{ color: skill.color }} />;
                         })()}
                         <span className="font-medium text-foreground">{skill.name}</span>
                       </div>
                       <span className="text-xs text-muted-foreground">{skill.category}</span>
                     </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
              Achievements
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {loading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="glass-card rounded-xl p-5 text-center">
                    <Skeleton className="w-12 h-12 rounded-xl mx-auto mb-3" />
                    <Skeleton className="h-5 w-28 mx-auto mb-1" />
                    <Skeleton className="h-4 w-32 mx-auto" />
                  </div>
                ))
              ) : (
                achievements.map((item, i) => (
                   <motion.div
                     key={item.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                     onClick={() => setSelectedAchievement(item)}
                     className="glass-card rounded-xl p-5 text-center hover:glow-accent transition-all duration-300 cursor-pointer group"
                   >
                     <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                       {(() => {
                         const IconComponent = getRandomIcon(item.id + 300);
                         return <IconComponent className="text-lg text-background" />;
                       })()}
                     </div>
                     <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                     <p className="text-xs text-muted-foreground">{item.description}</p>
                   </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>

       {/* Achievement Modal Dialog */}
       <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
         <AnimatePresence>
           {selectedAchievement && (
             <DialogContent className="sm:max-w-md glass-card border-0 shadow-2xl">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
                 transition={{ duration: 0.3, ease: "easeOut" }}
               >
                 <DialogHeader>
                   <DialogTitle className="flex items-center gap-3 font-display text-xl">
                   <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                     {(() => {
                       const IconComponent = getRandomIcon(selectedAchievement.id + 300);
                       return <IconComponent className="text-xl text-background" />;
                     })()}
                   </div>
                     {selectedAchievement.title}
                   </DialogTitle>
                   <DialogDescription className="text-left mt-2">
                     {selectedAchievement.date_received && (
                       <span className="text-xs text-accent font-medium">
                         {new Date(selectedAchievement.date_received).toLocaleDateString('id-ID', { 
                           year: 'numeric', 
                           month: 'long' 
                         })}
                       </span>
                     )}
                   </DialogDescription>
                 </DialogHeader>

                 <div className="mt-4">
                   {selectedAchievement.image && (
                     <div className="mb-4 rounded-xl overflow-hidden">
                       <img 
                         src={getImageUrl(selectedAchievement.image)} 
                         alt={selectedAchievement.title}
                         className="w-full h-auto object-cover"
                       />
                     </div>
                   )}
                   
                   <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                     {selectedAchievement.description}
                   </p>

                   {selectedAchievement.certificate_link && (
                     <a
                       href={selectedAchievement.certificate_link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-background text-sm font-medium hover:scale-105 transition-transform"
                     >
                       <ExternalLink size={14} />
                       View Certificate
                     </a>
                   )}
                 </div>
               </motion.div>
             </DialogContent>
           )}
         </AnimatePresence>
       </Dialog>

       {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's collaborate to turn your ideas into reality. I'm excited to work on new and challenging projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-bg px-8 py-3.5 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Get In Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 glass-card px-8 py-3.5 rounded-xl font-semibold text-foreground transition-all hover:scale-105 gradient-border"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;