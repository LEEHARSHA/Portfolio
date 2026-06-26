export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export const stats: Stat[] = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 3, suffix: "" },
  { label: "Team Members", value: 5, suffix: "" },
];
