export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "sehat-setu",
    title: "Sehat Setu",
    category: "AI Healthcare Chatbot",
    description:
      "Sehat Setu is an AI-powered medical chatbot designed to provide instant health guidance during emergency situations. It helps users understand symptoms, provides first-response recommendations, and guides them toward appropriate medical assistance through an intuitive conversational interface.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    features: [
      "AI Medical Chatbot",
      "Emergency Guidance",
      "Health Assistance",
      "Responsive UI",
      "Secure Architecture",
    ],
    link: "#",
    color: "#2563EB",
  },
  {
    id: "food-munch",
    title: "Food Munch",
    category: "Restaurant Website",
    description:
      "Food Munch is a modern restaurant website featuring an interactive digital menu, food categories, attractive UI, responsive layouts, and seamless browsing experience for customers.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    features: [
      "Interactive Menu",
      "Responsive Design",
      "Beautiful Food Showcase",
      "Fast Performance",
      "Modern UI",
    ],
    link: "#",
    color: "#7C3AED",
  },
  {
    id: "fitness-trainer",
    title: "Fitness Trainer App",
    category: "Mobile Application",
    description:
      "A comprehensive fitness application developed specifically for gym trainers. The platform helps trainers manage clients, assign workout plans, monitor progress, provide nutrition guidance, and generate additional revenue by delivering professional digital fitness services.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: [
      "Client Management",
      "Workout Tracking",
      "Progress Monitoring",
      "Nutrition Planning",
      "Revenue Growth for Trainers",
    ],
    link: "#",
    color: "#06B6D4",
  },
];
