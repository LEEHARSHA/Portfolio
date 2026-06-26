export interface Technology {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const technologies: Technology[] = [
  { id: "react", name: "React", icon: "SiReact", color: "#61DAFB", category: "Frontend" },
  { id: "node", name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "Backend" },
  { id: "typescript", name: "TypeScript", icon: "SiTypescript", color: "#3178C6", category: "Language" },
  { id: "mongodb", name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "Database" },
  { id: "firebase", name: "Firebase", icon: "SiFirebase", color: "#FFCA28", category: "Platform" },
  { id: "aws", name: "AWS", icon: "FaAws", color: "#FF9900", category: "Cloud" },
  { id: "docker", name: "Docker", icon: "SiDocker", color: "#2496ED", category: "DevOps" },
  { id: "python", name: "Python", icon: "SiPython", color: "#3776AB", category: "Language" },
  { id: "nextjs", name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF", category: "Frontend" },
  { id: "ai", name: "AI / ML", icon: "SiOpenai", color: "#10A37F", category: "AI" },
];
