export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Scalable, high-performance web applications built with modern frameworks and best practices.",
    icon: "Globe",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that delight users on every device.",
    icon: "Smartphone",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Human-centered design systems and interfaces that convert visitors into loyal customers.",
    icon: "Palette",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    id: "ai",
    title: "AI Solutions",
    description: "Intelligent automation, machine learning models, and AI-powered product features.",
    icon: "Brain",
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Cloud-native architecture, migration, and infrastructure optimized for scale.",
    icon: "Cloud",
    gradient: "from-cyan-600 to-teal-500",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Workflow automation and integration pipelines that eliminate manual bottlenecks.",
    icon: "Zap",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Tailor-made enterprise software engineered for your unique business requirements.",
    icon: "Code2",
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "api",
    title: "API Integration",
    description: "Robust APIs and third-party integrations that connect your entire tech ecosystem.",
    icon: "Plug",
    gradient: "from-sky-600 to-blue-500",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    description: "Proactive monitoring, updates, and dedicated support to keep your products running flawlessly.",
    icon: "Shield",
    gradient: "from-slate-500 to-slate-400",
  },
];
