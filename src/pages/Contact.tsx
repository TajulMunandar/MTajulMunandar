import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Mail, MapPin, Phone, Send, Clock, CheckCircle, Github, Linkedin, Instagram } from "lucide-react";
import usePortfolioApi from "../hooks/usePortfolioApi";
import { Skeleton } from "../components/ui/skeleton";

const Contact = () => {
  const { loading, profile } = usePortfolioApi();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        const error = await response.json();
        console.error('Form error:', error);
        alert('Gagal mengirim pesan, silakan coba lagi');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Gagal mengirim pesan, silakan coba lagi');
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "tajulmunandar701@gmail.com", href: "mailto:tajulmunandar701@gmail.com" },
    { icon: MapPin, label: "Location", value: profile?.location || "Loading...", href: "#" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
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
              <span className="text-sm text-muted-foreground">Contact Me</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, i) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                          <info.icon size={18} className="text-background" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-medium text-foreground">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                 <div className="glass-card rounded-2xl p-6">
                   <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Social Links</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/TajulMunandar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                      >
                        <Github className="text-xl" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/muhammad-tajul-munandar-02810a290/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-blue-400 transition-all hover:scale-110"
                      >
                        <Linkedin className="text-xl" />
                      </a>
                      <a
                        href="https://www.instagram.com/tajul_munandar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-pink-400 transition-all hover:scale-110"
                      >
                        <Instagram className="text-xl" />
                      </a>
                    </div>
                 </div>

                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Availability</h3>
                   {!loading && profile?.is_available && (
                     <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-sm text-foreground">Available for new projects</span>
                     </div>
                   )}
                   {!loading && !profile?.is_available && (
                     <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                       <span className="text-sm text-foreground">Currently busy</span>
                     </div>
                   )}
                   {loading && (
                     <Skeleton className="h-5 w-48" />
                   )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Open to full-time positions, freelance work, and collaborations.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="glass-card rounded-2xl p-6 md:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-background" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary hover:text-accent font-medium"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                            <input
                              type="text"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                            <input
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                          <input
                            type="text"
                            required
                            value={formState.subject}
                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="Project inquiry"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                          <textarea
                            required
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Tell me about your project..."
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full gradient-bg px-8 py-4 rounded-xl font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                        >
                          <Send size={18} />
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-12" />

            <div className="space-y-4">
              {[
                {
                  q: "What is your typical response time?",
                  a: "I usually respond within 24 hours. For urgent projects, please mention it in the subject line."
                },
                {
                  q: "Do you work with international clients?",
                  a: "Yes! I'm open to working with clients from anywhere in the world. Video calls can be arranged for discussions."
                },
                {
                  q: "What are your working hours?",
                  a: "I'm flexible with timing. Let me know what works best for you - I can adjust my schedule to match."
                },
                {
                  q: "Do you offer maintenance after project completion?",
                  a: "Absolutely! I offer ongoing maintenance packages for all my projects. We can discuss this upon project completion."
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-5"
                >
                  <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;