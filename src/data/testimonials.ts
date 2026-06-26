export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "NexaCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "RUKD Technologies transformed our vision into a world-class platform. Their attention to detail and technical expertise exceeded every expectation.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "CTO",
    company: "PulseHealth",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Working with RUKD was a game-changer. They delivered our mobile app ahead of schedule with flawless performance and stunning design.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Director",
    company: "VaultPay",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content: "The team's deep understanding of fintech regulations combined with cutting-edge technology made them the perfect partner for our payment platform.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Founder",
    company: "OrbitAI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "RUKD built our AI dashboard from scratch. The architecture is scalable, the UI is intuitive, and our users love it. Highly recommended.",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "VP Engineering",
    company: "CloudSync",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    content: "Professional, responsive, and incredibly skilled. RUKD Technologies is our go-to partner for all enterprise software projects.",
    rating: 5,
  },
];
