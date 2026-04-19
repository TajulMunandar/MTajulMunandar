import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, BarChart3, Gauge, Shield, Headphones, Cpu } from "lucide-react";
import usePortfolioApi from "../hooks/usePortfolioApi";
import { Skeleton } from "../components/ui/skeleton";
import { getRandomIcon } from "../lib/randomIcons";

const Services = () => {
  const { loading, services } = usePortfolioApi();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: Gauge, title: "Fast Delivery", desc: "Projects delivered on time, every time" },
    { icon: Shield, title: "Quality Assured", desc: "Thorough testing and documentation" },
    { icon: Headphones, title: "Dedicated Support", desc: "Ongoing maintenance available" },
    { icon: Cpu, title: "Modern Tech", desc: "Latest technologies and best practices" },
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
              <span className="text-sm text-muted-foreground">What I Offer</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional development services tailored to bring your vision to life with cutting-edge technology and expert craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3">
                  <benefit.icon size={18} className="text-background" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {loading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="glass-card rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-12">
                    <Skeleton className="lg:col-span-4 min-h-[300px]" />
                    <div className="lg:col-span-8 p-8">
                      <div>
                        <div>
                          <Skeleton className="h-6 w-24 mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                        </div>
                        <div>
                          <Skeleton className="h-6 w-24 mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="glass-card rounded-3xl overflow-hidden group hover:glow-accent transition-all duration-300"
              >
                <div className="grid lg:grid-cols-12">
                  {/* Icon & Title */}
                  <div className="lg:col-span-4 bg-gradient-to-br p-8 flex items-center" style={{ background: `linear-gradient(135deg, ${service.gradient.includes('from-blue') ? 'rgba(59,130,246,0.2)' : service.gradient.includes('from-purple') ? 'rgba(168,85,247,0.2)' : service.gradient.includes('from-cyan') ? 'rgba(6,182,212,0.2)' : service.gradient.includes('from-green') ? 'rgba(34,197,94,0.2)' : service.gradient.includes('from-orange') ? 'rgba(249,115,22,0.2)' : 'rgba(99,102,241,0.2)'}, ${service.gradient.includes('blue') ? 'rgba(139,92,246,0.2)' : service.gradient.includes('purple') ? 'rgba(236,72,153,0.2)' : service.gradient.includes('cyan') ? 'rgba(59,130,246,0.2)' : service.gradient.includes('green') ? 'rgba(20,184,166,0.2)' : service.gradient.includes('orange') ? 'rgba(234,179,8,0.2)' : 'rgba(139,92,246,0.2)'})` }}>
                    <div className="w-full">
                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                     {(() => {
                       const IconComponent = getRandomIcon(service.id + 100);
                       return <IconComponent className="text-3xl text-background" />;
                     })()}
                   </div>
                      <h3 className="font-display text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.tagline}</p>
                      <p className="text-sm text-muted-foreground">{service.short_description}</p>
                    </div>
                  </div>

                  {/* Features & Process */}
                  <div className="lg:col-span-8 p-8">
                     <div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Code2 size={16} className="text-accent" />
                          Features
                        </h4>
                         <ul className="space-y-2">
                           {Array.isArray(service.features) ? service.features.map((feature, idx) => (
                             <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                               <div className="w-1.5 h-1.5 rounded-full gradient-bg" />
                               {feature}
                             </li>
                           )) : null}
                         </ul>
                      </div>

                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 gradient-bg px-6 py-2.5 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Request Quote
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )))}
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
              Don't See What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              That's okay! I'm open to discussing custom projects. Reach out and let's see how I can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-bg px-8 py-3.5 rounded-xl font-semibold text-background transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Let's Discuss
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;