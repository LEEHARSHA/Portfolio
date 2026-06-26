export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "nexaflow",
    title: "NexaFlow Platform",
    category: "SaaS Platform",
    description: "Enterprise workflow automation platform with real-time analytics and AI-driven insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    link: "#",
    color: "#2563EB",
  },
  {
    id: "pulsehealth",
    title: "PulseHealth App",
    category: "Mobile Application",
    description: "Telemedicine mobile app connecting patients with healthcare providers seamlessly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    technologies: ["React Native", "Firebase", "TypeScript"],
    link: "#",
    color: "#7C3AED",
  },
  {
    id: "vaultpay",
    title: "VaultPay Fintech",
    category: "Financial Technology",
    description: "Secure digital payment gateway with fraud detection and instant settlements.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    technologies: ["Next.js", "Python", "Docker", "AWS"],
    link: "#",
    color: "#06B6D4",
  },
  {
    id: "orbitai",
    title: "OrbitAI Dashboard",
    category: "AI Analytics",
    description: "Machine learning dashboard for predictive business intelligence and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["React", "Python", "AI/ML", "PostgreSQL"],
    link: "#",
    color: "#2563EB",
  },
  {
    id: "cloudsync",
    title: "CloudSync ERP",
    category: "Enterprise Software",
    description: "Cloud-based ERP system streamlining operations for mid-size manufacturing companies.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    technologies: ["Vue.js", "Node.js", "Docker", "AWS"],
    link: "#",
    color: "#7C3AED",
  },
  {
    id: "designhub",
    title: "DesignHub Studio",
    category: "Design Tool",
    description: "Collaborative design platform with real-time editing and version control for creative teams.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    technologies: ["React", "WebSocket", "TypeScript", "Firebase"],
    link: "#",
    color: "#06B6D4",
  },
];
