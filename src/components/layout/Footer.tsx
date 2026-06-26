import { motion } from "framer-motion";
import {
  navLinks,
  socialLinks,
  companyTagline,
  contactEmail,
  contactPhones,
  footerServices,
} from "../../data/contact";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

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
                RUKD Technologies
              </a>
              <p className="mt-4 text-muted max-w-md leading-relaxed">{companyTagline}</p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  {contactEmail}
                </a>
                {contactPhones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-sm text-muted hover:text-white transition-colors"
                  >
                    <Phone size={16} className="text-primary shrink-0" />
                    {phone}
                  </a>
                ))}
              </div>

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
                {footerServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-muted text-sm">
              &copy; 2026 RUKD Technologies. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
