import { motion } from "framer-motion";
import {
  Lightbulb,
  Award,
  Heart,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, GlassCard, GradientText } from "../components/ui/SectionHeading";
import { aboutContent, timeline, coreValues } from "../data/about";
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
          title="Crafting the Future of Digital"
          subtitle="We are a team of passionate engineers, designers, and innovators dedicated to building software that transforms businesses."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-8">{aboutContent.story}</p>

            <div className="space-y-6">
              <GlassCard>
                <h3 className="font-display text-xl font-bold mb-2">
                  Our <GradientText>Mission</GradientText>
                </h3>
                <p className="text-muted text-sm leading-relaxed">{aboutContent.mission}</p>
              </GlassCard>
              <GlassCard>
                <h3 className="font-display text-xl font-bold mb-2">
                  Our <GradientText>Vision</GradientText>
                </h3>
                <p className="text-muted text-sm leading-relaxed">{aboutContent.vision}</p>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background" />
                  <span className="text-sm font-bold gradient-text">{item.year}</span>
                  <h4 className="font-display text-lg font-semibold mt-1">{item.title}</h4>
                  <p className="text-muted text-sm mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
