import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Zap,
  Code2,
  Plug,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { services } from "../data/services";
import { SectionDivider } from "../components/ui/BackgroundEffects";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Zap,
  Code2,
  Plug,
  Shield,
};

export function Services() {
  return (
    <section id="services" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Services"
          title="What We Do Best"
          subtitle="End-to-end digital solutions engineered with precision, passion, and cutting-edge technology."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  rotateY: 5,
                  rotateX: -5,
                  transition: { duration: 0.3 },
                }}
                style={{ perspective: 1000 }}
              >
                <GlassCard className="h-full group relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    {Icon && <Icon size={24} className="text-white" />}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
