import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import usePortfolioApi, { getImageUrl } from "../hooks/usePortfolioApi";
import { Skeleton } from "./ui/skeleton";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { loading, projects } = usePortfolioApi();

  // Filter only featured projects
  const featuredProjects = projects.filter(p => p.is_featured);
  // Remove old hardcoded projects data
  // const projects = [...]

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            Featured Projects
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <div className="p-5">
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-5" />
                  <div className="flex gap-2 mb-5">
                    <Skeleton className="h-5 w-16 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                  </div>
                  <div className="flex gap-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glow-accent transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                {project.image ? (
                  <img 
                    src={getImageUrl(project.image)} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-background/50" />
                    <span className="font-display font-bold text-lg text-foreground relative z-10 px-4 text-center">
                      {project.title}
                    </span>
                  </>
                )}
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link ? (
                    <a href={project.link} className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <ExternalLink size={14} /> Offline
                    </span>
                  )}
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
             </motion.div>
           ))
          )}
         </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
