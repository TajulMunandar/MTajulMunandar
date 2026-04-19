import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Sparkles, Zap, Target, Lightbulb, Users } from "lucide-react";
import usePortfolioApi, { getImageUrl } from "../hooks/usePortfolioApi";
import { Skeleton } from "../components/ui/skeleton";
import { getRandomIcon } from "../lib/randomIcons";

const About = () => {
  const { loading, profile, services } = usePortfolioApi();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "8+", label: "Technologies Mastered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    { icon: Target, title: "Result-Oriented", desc: "Focusing on delivering measurable outcomes that drive real business value." },
    { icon: Zap, title: "Efficient Solutions", desc: "Building systems that automate repetitive tasks and maximize productivity." },
    { icon: Lightbulb, title: "Innovative Thinking", desc: "Combining technical expertise with creative problem-solving approaches." },
    { icon: Users, title: "Collaborative Spirit", desc: "Working seamlessly with teams to transform ideas into reality." },
  ];

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
              <span className="text-sm text-muted-foreground">Get to know me</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {loading ? <Skeleton className="h-6 w-full" /> : profile?.bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 relative" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            {/* Profile Card */}
            <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  {loading ? (
                    <>
                      <Skeleton className="h-8 w-72 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-6" />
                      <div className="flex flex-wrap gap-4 mb-6">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-5 w-32" />
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                        Hello, I'm <span className="gradient-text">{profile?.name}</span>
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {profile?.about_full}
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} className="text-accent" />
                          <span>{profile?.location}</span>
                        </div>
                        {profile?.is_available && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={16} className="text-accent" />
                            <span>Available now</span>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Let's Connect
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-primary/30">
                    {loading ? (
                      <Skeleton className="w-full h-full" />
                    ) : (
                      <img 
                        src={profile?.avatar ? getImageUrl(profile.avatar) : '/profile.jpeg'} 
                        alt={profile?.name || 'Profile'} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
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
              What I Do
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="grid md:grid-cols-3 gap-6">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6">
                    <Skeleton className="w-14 h-14 rounded-xl mb-4" />
                    <Skeleton className="h-6 w-48 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-5 w-20 rounded-md" />
                      <Skeleton className="h-5 w-20 rounded-md" />
                    </div>
                  </div>
                ))
              ) : (
                services.slice(0, 3).map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                    className={`glass-card rounded-2xl p-6 hover:glow-accent transition-all duration-300 bg-gradient-to-br ${service.gradient}`}
                  >
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4">
                      {(() => {
                        const IconComponent = getRandomIcon(service.id + 600);
                        return <IconComponent className="text-2xl text-background" />;
                      })()}
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.short_description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((h, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                          {h}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Core Values
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-5 text-center hover:glow-accent transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3">
                    <value.icon size={18} className="text-background" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together.
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

export default About;