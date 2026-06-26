import { useMousePosition } from "../../hooks/useMousePosition";

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}

export function GradientBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div
        className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]"
        style={{ animation: "pulse 4s ease-in-out infinite alternate" }}
      />
      <div className="absolute -bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-secondary/8 blur-[110px]" />
    </div>
  );
}

export function SpotlightEffect() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(37,99,235,0.04), transparent 40%)`,
      }}
    />
  );
}

export function SectionDivider() {
  return (
    <div className="relative w-full h-px my-0">
      <svg
        className="absolute inset-0 w-full h-24 -translate-y-1/2 opacity-30"
        viewBox="0 0 1440 48"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 24 Q360 0 720 24 T1440 24"
          stroke="url(#dividerGrad)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <linearGradient id="dividerGrad" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#2563EB" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
