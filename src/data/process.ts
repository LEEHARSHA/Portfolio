export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  { id: "discovery", title: "Discovery", description: "Understanding your vision, goals, and requirements through deep research and stakeholder interviews.", icon: "Search" },
  { id: "planning", title: "Planning", description: "Creating detailed roadmaps, architecture designs, and project timelines with clear milestones.", icon: "Map" },
  { id: "design", title: "Design", description: "Crafting intuitive UI/UX with wireframes, prototypes, and pixel-perfect visual designs.", icon: "PenTool" },
  { id: "development", title: "Development", description: "Building robust, scalable code with agile sprints and continuous integration practices.", icon: "Code2" },
  { id: "testing", title: "Testing", description: "Rigorous QA testing including unit, integration, performance, and user acceptance testing.", icon: "TestTube" },
  { id: "deployment", title: "Deployment", description: "Seamless launch with CI/CD pipelines, monitoring setup, and production optimization.", icon: "Rocket" },
  { id: "support", title: "Support", description: "Ongoing maintenance, updates, and dedicated support to ensure long-term success.", icon: "HeadphonesIcon" },
];
