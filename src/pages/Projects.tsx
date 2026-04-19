import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ExternalLink, Github } from "lucide-react";
import usePortfolioApi, { getImageUrl } from "../hooks/usePortfolioApi";
import { Skeleton } from "../components/ui/skeleton";
import { getRandomIcon } from "../lib/randomIcons";

const Projects = () => {
  const { loading, projects } = usePortfolioApi();
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["All", ...new Set((projects || []).map(p => p.category))];
  
  const filteredProjects = activeCategory === "All" 
    ? (projects || []) 
    : (projects || []).filter(p => p.category === activeCategory);

  // const categories = ["All", "AI & Computer Vision", "AI & NLP", "Web Application", "Mobile App"];

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
              <span className="text-sm text-muted-foreground">Portfolio</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in AI, fullstack development, and innovative problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8">
        <div className="container mx-auto px-6">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {loading ? (
                Array(5).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-9 w-24 rounded-full" />
                ))
              ) : (
                categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat 
                        ? "gradient-bg text-background" 
                        : "glass-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))
              )}
            </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8" ref={ref}>
        <div className="container mx-auto px-6">
           <div className="space-y-12 max-w-5xl mx-auto">
             {loading ? (
               Array(3).fill(0).map((_, i) => (
                 <div key={i} className="glass-card rounded-3xl overflow-hidden">
                   <div className="grid lg:grid-cols-5">
                     <Skeleton className="lg:col-span-2 min-h-[300px]" />
                     <div className="lg:col-span-3 p-8">
                       <Skeleton className="h-4 w-24 mb-2" />
                       <Skeleton className="h-8 w-72 mb-2" />
                       <Skeleton className="h-4 w-full mb-4" />
                       <Skeleton className="h-4 w-full mb-2" />
                       <Skeleton className="h-4 w-3/4 mb-4" />
                       <div className="flex flex-wrap gap-2 mb-4">
                         <Skeleton className="h-5 w-16 rounded-md" />
                         <Skeleton className="h-5 w-16 rounded-md" />
                         <Skeleton className="h-5 w-16 rounded-md" />
                       </div>
                       <div className="flex flex-wrap gap-2 mb-4">
                         <Skeleton className="h-5 w-20 rounded-md" />
                         <Skeleton className="h-5 w-20 rounded-md" />
                         <Skeleton className="h-5 w-20 rounded-md" />
                       </div>
                     </div>
                   </div>
                 </div>
               ))
             ) : (
               filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="glass-card rounded-3xl overflow-hidden group hover:glow-accent transition-all duration-300"
              >
                <div className="grid lg:grid-cols-5">
                   {/* Image Section */}
                   <div className={`lg:col-span-2 bg-gradient-to-br ${project.gradient} p-0 flex items-center justify-center min-h-[300px] relative overflow-hidden`}>
                     {project.image ? (
                       <img 
                         src={getImageUrl(project.image)} 
                         alt={project.title}
                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                     ) : (
                       <div className="text-center">
                          <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center mx-auto mb-4">
                            {(() => {
                              const IconComponent = getRandomIcon(project.id);
                              return <IconComponent className="text-4xl text-foreground" />;
                            })()}
                          </div>
                         <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground">
                           {project.category}
                         </span>
                       </div>
                     )}
                   </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="font-display text-2xl font-bold mt-1 mb-2 text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.tagline}
                        </p>
                      </div>
                      
                       <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                         {project.description}
                       </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                         <div className="flex flex-wrap gap-2">
                           {Array.isArray(project.features) ? project.features.slice(0, 4).map((feature, idx) => (
                             <span 
                               key={idx}
                               className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                             >
                               {feature}
                             </span>
                           )) : null}
                         </div>
                      </div>
                      
                      <div className="mt-auto">
                         <div className="flex flex-wrap gap-2 mb-4">
                           {Array.isArray(project.stack) ? project.stack.map((tech, idx) => (
                             <span
                               key={idx}
                               className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                             >
                               {tech}
                             </span>
                           )) : null}
                         </div>
                         <div className="flex gap-3">
                           {project.link ? (
                             <a
                               href={project.link}
                               className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                             >
                               <ExternalLink size={14} /> Live Demo
                             </a>
                           ) : (
                             <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                               <ExternalLink size={14} /> Offline
                             </span>
                           )}
                           {project.github && (
                             <a
                               href={project.github}
                               className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                             >
                               <Github size={14} /> Source
                             </a>
                           )}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )))}
          </div>
        </div>
      </section>

      {/* More Projects CTA */}
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
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I'm always excited to work on new challenges. Let's discuss how I can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-bg px-8 py-3.5 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;