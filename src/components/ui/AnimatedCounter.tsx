import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  inView,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) {
  const count = useAnimatedCounter(value, inView);
  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
