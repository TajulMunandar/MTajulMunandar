import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain, Code2, Smartphone, Bot, ArrowDown, Mail } from "lucide-react";
import usePortfolioApi from "../hooks/usePortfolioApi";
import { Skeleton } from "../components/ui/skeleton";
import AchievementsSection from "../components/AchievementsSection";
import { getRandomIcon } from "../lib/randomIcons";

const Index = () => {
  const { loading, profile, projects, services } = usePortfolioApi();
  const quickLinks = [
    { icon: Brain, label: "AI & ML", href: "/experience", desc: "Machine Learning" },
    { icon: Code2, label: "Web Dev", href: "/projects", desc: "Fullstack" },
    { icon: Smartphone, label: "Mobile", href: "/projects", desc: "Flutter Apps" },
    { icon: Bot, label: "Automation", href: "/services", desc: "Scraping" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] animate-pulse" style={{ animationDelay: "3s" }} />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {loading ? (
              <div className="mb-8">
                <Skeleton className="h-8 w-64 mx-auto rounded-full mb-8" />
                <Skeleton className="h-16 w-96 mx-auto rounded mb-4" />
                <Skeleton className="h-8 w-80 mx-auto rounded mb-4" />
                <Skeleton className="h-6 w-72 mx-auto rounded" />
              </div>
            ) : (
              <>
                {profile?.is_available && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
                  >
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-sm text-muted-foreground">Available for collaboration</span>
                  </motion.div>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
                >
                  <span className="text-foreground">{profile?.name || 'Loading...'}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-lg sm:text-xl text-primary font-medium mb-4"
                >
                  {profile?.title || 'Loading...'}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
                >
                  {profile?.bio || 'Loading...'}
                </motion.p>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                to="/projects"
                className="gradient-bg px-8 py-3.5 rounded-xl font-semibold text-background flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                View Portfolio
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="glass-card px-8 py-3.5 rounded-xl font-semibold text-foreground flex items-center justify-center gap-2 transition-all hover:scale-105 gradient-border"
              >
                Let's Collaborate
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="glass-card rounded-xl p-4 hover:glow-accent transition-all duration-300"
                >
                  <link.icon size={24} className="mx-auto mb-2 text-foreground" />
                  <div className="font-medium text-sm text-foreground">{link.label}</div>
                  <div className="text-xs text-muted-foreground">{link.desc}</div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick About Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
              What I Do
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="grid md:grid-cols-3 gap-6">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 text-center">
                    <Skeleton className="w-14 h-14 rounded-xl mx-auto mb-4" />
                    <Skeleton className="h-6 w-48 mx-auto mb-2" />
                    <Skeleton className="h-4 w-full mx-auto" />
                  </div>
                ))
              ) : (
                services.slice(0, 3).map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className={`glass-card rounded-2xl p-6 text-center hover:glow-accent transition-all duration-300 bg-gradient-to-br ${service.gradient}`}
                  >
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const IconComponent = getRandomIcon(service.id + 500);
                        return <IconComponent className="text-2xl text-background" />;
                      })()}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.short_description}</p>
                  </motion.div>
                ))
              )}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                Learn more about me <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Featured Projects Preview */}
       <section className="py-24 relative">
         <div className="container mx-auto px-6">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="max-w-5xl mx-auto"
           >
             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
               Featured Projects
             </h2>
             <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {loading ? (
                 Array(3).fill(0).map((_, i) => (
                   <div key={i} className="glass-card rounded-2xl p-6">
                     <Skeleton className="h-4 w-24 rounded mb-2" />
                     <Skeleton className="h-6 w-full rounded mb-2" />
                     <Skeleton className="h-4 w-full rounded" />
                   </div>
                 ))
               ) : (
                 projects.filter(p => p.is_featured).slice(0, 3).map((project, i) => (
                   <motion.div
                     key={project.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                     className={`glass-card rounded-2xl p-6 hover:glow-accent transition-all duration-300 bg-gradient-to-br ${project.gradient}`}
                   >
                     <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.category}</span>
                     <h3 className="font-display font-semibold text-lg mt-2 mb-2 text-foreground">{project.title}</h3>
                     <p className="text-sm text-muted-foreground">{project.tagline}</p>
                   </motion.div>
                 ))
               )}
             </div>

             <div className="text-center mt-10">
               <Link
                 to="/projects"
                 className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
               >
                 View All Projects <ArrowRight size={18} />
               </Link>
             </div>
           </motion.div>
         </div>
       </section>

       {/* Achievements Section */}
       <AchievementsSection />

       {/* Contact CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I'm always excited to work on new challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-bg px-8 py-3.5 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Get In Touch
                <Mail size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 glass-card px-8 py-3.5 rounded-xl font-semibold text-foreground transition-all hover:scale-105 gradient-border"
              >
                My Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
