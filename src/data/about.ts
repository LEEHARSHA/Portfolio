export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const aboutContent = {
  mission:
    "To empower businesses with innovative digital solutions that drive growth, efficiency, and lasting impact in an ever-evolving technological landscape.",
  vision:
    "To be the global leader in premium software development, recognized for excellence, innovation, and transformative digital experiences.",
  story:
    "Founded with a passion for crafting exceptional digital products, RUKD Technologies has grown into a trusted partner for startups and enterprises worldwide. We combine technical mastery with creative vision to deliver software that truly matters.",
};

export const timeline: TimelineItem[] = [
  { year: "2018", title: "Company Founded", description: "RUKD Technologies was born with a mission to build digital products that matter." },
  { year: "2019", title: "First Major Client", description: "Delivered our first enterprise SaaS platform, setting the standard for quality." },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to serve clients across 15+ countries worldwide." },
  { year: "2023", title: "AI Division Launch", description: "Launched dedicated AI solutions division for machine learning and automation." },
  { year: "2025", title: "150+ Projects", description: "Celebrated 150+ successful project deliveries with 98% client satisfaction." },
];

export const coreValues: CoreValue[] = [
  { title: "Innovation", description: "Pushing boundaries with cutting-edge technology and creative solutions.", icon: "Lightbulb" },
  { title: "Excellence", description: "Delivering pixel-perfect products with uncompromising quality standards.", icon: "Award" },
  { title: "Integrity", description: "Building trust through transparency, honesty, and reliable partnerships.", icon: "Heart" },
  { title: "Collaboration", description: "Working closely with clients as true partners in their success journey.", icon: "Users" },
];
