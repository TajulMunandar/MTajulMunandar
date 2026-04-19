import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Sparkles } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/TajulMunandar", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-tajul-munandar-02810a290/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/tajul_munandar/", label: "Instagram" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-xl font-bold gradient-text mb-3 block">
              Muhammad Tajul Munandar
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              AI Engineer & Fullstack Developer building intelligent systems that solve real-world problems.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles size={14} className="text-accent" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="mailto:tajulmunandar701@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors mt-4 block"
            >
              tajulmunandar701@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 <span className="gradient-text font-semibold">Muhammad Tajul Munandar</span>. All rights reserved. Built with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
