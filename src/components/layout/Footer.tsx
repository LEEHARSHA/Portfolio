import { motion } from "framer-motion";
import { navLinks, socialLinks } from "../../data/contact";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-card/50">
      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a href="#hero" className="font-display text-3xl font-bold tracking-tight">
                RUKD<span className="gradient-text">.</span>
              </a>
              <p className="mt-4 text-muted max-w-sm leading-relaxed">
                Building Digital Products That Matter. Premium software development for ambitious companies worldwide.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:border-primary/30 transition-colors"
                      aria-label={social.name}
                    >
                      {Icon && <Icon size={18} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-muted">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Solutions</li>
                <li>Cloud Services</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm">
              &copy; {new Date().getFullYear()} RUKD Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
