import { lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { MagneticButton } from "../components/ui/MagneticButton";
import { GradientText, GlassCard } from "../components/ui/SectionHeading";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { stats } from "../data/stats";
import { companyTagline } from "../data/contact";
import { useInView } from "../hooks/useInView";

const HeroScene = lazy(() =>
  import("../three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="inline-block mb-6 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase glass gradient-border text-secondary">
            Premium Software Development
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.95] mb-6"
        >
          RUKD
          <br />
          <GradientText>Technologies</GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {companyTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton href="#contact" size="lg">
            Start Your Project <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton href="#projects" variant="secondary" size="lg">
            View Our Work
          </MagneticButton>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mt-16"
        >
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="text-center py-5">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  inView={statsInView}
                />
              </div>
              <p className="text-muted text-xs sm:text-sm">{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
