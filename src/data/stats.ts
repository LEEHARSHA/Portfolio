export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export const stats: Stat[] = [
  { label: "Years of Experience", value: 7, suffix: "+" },
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Team Members", value: 35, suffix: "+" },
];

export const whyChooseUs = [
  {
    title: "Fast Delivery",
    description: "Agile methodology and efficient workflows ensure rapid time-to-market without compromising quality.",
    icon: "Rocket",
  },
  {
    title: "Modern Technology",
    description: "We leverage the latest frameworks and tools to build future-proof, scalable digital products.",
    icon: "Cpu",
  },
  {
    title: "Dedicated Support",
    description: "24/7 support and proactive maintenance keep your products running at peak performance.",
    icon: "HeadphonesIcon",
  },
  {
    title: "Transparent Process",
    description: "Full visibility into project progress with regular updates, demos, and open communication.",
    icon: "Eye",
  },
];
