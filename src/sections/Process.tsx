import { motion } from "framer-motion";
import {
  Search,
  Map,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { processSteps } from "../data/process";
import { SectionDivider } from "../components/ui/BackgroundEffects";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Map,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  HeadphonesIcon: Headphones,
};

export function Process() {
  return (
    <section id="process" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Our Process"
          title="How We Build"
          subtitle="A proven development methodology that ensures quality, transparency, and on-time delivery."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative text-center group"
                >
                  <div className="relative mx-auto w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      {Icon && <Icon size={24} className="text-primary" />}
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-2">{step.title}</h4>
                  <p className="text-muted text-xs leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
