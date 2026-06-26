import { motion } from "framer-motion";
import {
  Lightbulb,
  Award,
  Heart,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { aboutContent, coreValues } from "../data/about";
import { SectionDivider } from "../components/ui/BackgroundEffects";

const valueIcons: Record<string, LucideIcon> = {
  Lightbulb,
  Award,
  Heart,
  Users,
};

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="About Us"
          title="Building Modern Digital Solutions"
          subtitle="A focused software team dedicated to helping businesses and startups grow through technology."
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-muted text-lg leading-relaxed max-w-4xl mx-auto text-center mb-16"
        >
          {aboutContent.story}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, i) => {
            const Icon = valueIcons[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    {Icon && <Icon size={22} className="text-primary" />}
                  </div>
                  <h4 className="font-display font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted text-sm">{value.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
