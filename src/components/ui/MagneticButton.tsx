import { type ReactNode, type MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useMagnetic } from "../../hooks/useMousePosition";
import { cn } from "../../utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
  secondary: "glass gradient-border text-white hover:bg-white/5",
  ghost: "text-muted hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useMagnetic(ref, 0.15);

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 overflow-hidden group",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={classes}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
          }
          onClick?.(e);
        }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      className={classes}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
