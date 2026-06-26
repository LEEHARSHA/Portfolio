import { useRef } from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, Headphones, Eye, type LucideIcon } from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { stats, whyChooseUs } from "../data/stats";
import { useInView } from "../hooks/useInView";
import { SectionDivider } from "../components/ui/BackgroundEffects";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Cpu,
  HeadphonesIcon: Headphones,
  Eye,
};

export function WhyChooseUs() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef);

  return (
    <section id="why-us" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Why Choose Us"
          title="Numbers That Speak"
          subtitle="Our track record demonstrates our commitment to excellence and client success."
        />

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <GlassCard className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={inView}
                  />
                </div>
                <p className="text-muted text-sm">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard className="flex gap-5 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    {Icon && <Icon size={22} className="text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
