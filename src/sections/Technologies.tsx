import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiPython,
  SiNextdotjs,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { technologies } from "../data/technologies";
import { SectionDivider } from "../components/ui/BackgroundEffects";

const TechOrbitScene = lazy(() =>
  import("../three/TechOrbitScene").then((m) => ({ default: m.TechOrbitScene }))
);

const iconComponents: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  FaAws,
  SiDocker,
  SiPython,
  SiNextdotjs,
  SiOpenai,
};

export function Technologies() {
  return (
    <section id="technologies" className="relative section-padding overflow-hidden">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Technologies"
          title="Powered by Modern Stack"
          subtitle="We leverage industry-leading technologies to build robust, scalable, and future-proof solutions."
        />

        <Suspense fallback={<div className="w-full h-[400px] animate-pulse bg-card/30 rounded-2xl" />}>
          <TechOrbitScene />
        </Suspense>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
          {technologies.map((tech, i) => {
            const Icon = iconComponents[tech.icon];
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.05 }}
              >
                <GlassCard className="text-center py-6 group cursor-default">
                  <div className="mb-3 flex justify-center drop-shadow-[0_0_12px_rgba(37,99,235,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300">
                    {Icon && <Icon size={36} color={tech.color} />}
                  </div>
                  <h4 className="font-display text-sm font-semibold">{tech.name}</h4>
                  <span className="text-xs text-muted mt-1 block">{tech.category}</span>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
