import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { MagneticButton } from "../components/ui/MagneticButton";
import { contactInfo, socialLinks } from "../data/contact";
import { SectionDivider } from "../components/ui/BackgroundEffects";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactGlobe = lazy(() =>
  import("../three/ContactGlobe").then((m) => ({ default: m.ContactGlobe }))
);

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Mail,
  Phone,
  MapPin,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
};

export function Contact() {
  return (
    <section id="contact" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Contact"
          title="Let's Build Together"
          subtitle="Ready to transform your vision into reality? Get in touch and let's start the conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = iconMap[info.icon];
                return (
                  <motion.a
                    key={info.type}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                  >
                    <GlassCard className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                        {Icon && <Icon size={20} className="text-primary" />}
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider">{info.label}</p>
                        <p className="font-medium text-sm mt-0.5">{info.value}</p>
                      </div>
                    </GlassCard>
                  </motion.a>
                );
              })}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {Icon && <Icon size={18} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <Suspense fallback={<div className="w-full h-[300px] animate-pulse bg-card/30 rounded-2xl mb-8" />}>
              <ContactGlobe />
            </Suspense>

            <GlassCard>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl glass text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl glass text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl glass text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl glass text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
                <MagneticButton type="submit" className="w-full">
                  Send Message <Send size={16} />
                </MagneticButton>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
