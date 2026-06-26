import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16 md:mb-20",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {tag && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase glass gradient-border text-secondary">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("gradient-text", className)}>{children}</span>;
}

export function GlassCard({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("glass rounded-2xl p-6 md:p-8 glow-hover", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
