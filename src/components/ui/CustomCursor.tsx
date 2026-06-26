import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import { useMediaQuery } from "../../hooks/useInView";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: x - 16, y: y - 16, scale: isHovering ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9998]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  );
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 15 + 5, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 500);
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-8">
              RUKD
            </h1>
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-muted text-sm">{Math.floor(progress)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
