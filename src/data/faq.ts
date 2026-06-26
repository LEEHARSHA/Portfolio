export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What types of projects does RUKD Technologies handle?",
    answer: "We specialize in web applications, mobile apps, AI solutions, cloud infrastructure, custom enterprise software, and API integrations. From MVPs to large-scale platforms, we deliver end-to-end digital products.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard web application takes 8–16 weeks, while enterprise platforms may take 4–8 months. We provide detailed timelines during the discovery phase.",
  },
  {
    id: "3",
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes. We offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring for critical applications.",
  },
  {
    id: "4",
    question: "What is your development process?",
    answer: "We follow a proven agile methodology: Discovery → Planning → Design → Development → Testing → Deployment → Support. You'll receive regular updates and have full visibility throughout the project.",
  },
  {
    id: "5",
    question: "Can you work with our existing team?",
    answer: "Absolutely. We seamlessly integrate with in-house teams, providing dedicated developers, designers, or full project teams depending on your needs. We adapt to your workflow and tools.",
  },
  {
    id: "6",
    question: "What technologies do you use?",
    answer: "We work with modern, battle-tested technologies including React, Next.js, Node.js, TypeScript, Python, MongoDB, Firebase, AWS, Docker, and cutting-edge AI/ML frameworks.",
  },
];
