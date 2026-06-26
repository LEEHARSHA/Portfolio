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
    title: "Website Development",
    description: "Modern, responsive websites built with performance, SEO, and user experience at the core.",
    icon: "Globe",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver smooth, engaging experiences on every device.",
    icon: "Smartphone",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "ai",
    title: "AI Solutions",
    description: "Intelligent chatbots, automation, and AI-powered features tailored to your business needs.",
    icon: "Brain",
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailor-made software engineered to solve unique business challenges and scale with growth.",
    icon: "Code2",
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Human-centered interfaces and design systems that look premium and convert visitors into users.",
    icon: "Palette",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    id: "api",
    title: "API Development",
    description: "Robust, secure APIs and integrations that connect your products and power seamless workflows.",
    icon: "Plug",
    gradient: "from-sky-600 to-blue-500",
  },
];
