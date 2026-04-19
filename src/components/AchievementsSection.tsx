import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import usePortfolioApi, { getImageUrl } from "../hooks/usePortfolioApi";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Achievement } from "../hooks/usePortfolioApi";
import { getRandomIcon } from "../lib/randomIcons";

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { loading, achievements } = usePortfolioApi();
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            Certifications & Achievements
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {loading ? (
            Array(8).fill(0).map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <Skeleton className="w-12 h-12 rounded-xl mx-auto mb-3" />
                <Skeleton className="h-4 w-full mx-auto" />
              </div>
            ))
          ) : (
            achievements.map((achievement, i) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                onClick={() => setSelectedAchievement(achievement)}
                className="glass-card rounded-2xl p-6 cursor-pointer hover:glow-accent transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {(() => {
                    const IconComponent = getRandomIcon(achievement.id + 300);
                    return <IconComponent className="text-2xl text-accent" />;
                  })()}
                </div>
                <h3 className="text-xs font-medium text-center text-foreground">
                  {achievement.title}
                </h3>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Modal Dialog */}
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
    </section>
  );
};

export default AchievementsSection;
