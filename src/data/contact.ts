export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const contactInfo: ContactInfo[] = [
  { type: "email", label: "Email Us", value: "hello@rukd.tech", href: "mailto:hello@rukd.tech", icon: "Mail" },
  { type: "phone", label: "Call Us", value: "+1 (555) 123-4567", href: "tel:+15551234567", icon: "Phone" },
  { type: "address", label: "Visit Us", value: "123 Innovation Drive, San Francisco, CA 94105", href: "#", icon: "MapPin" },
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { name: "GitHub", href: "https://github.com", icon: "Github" },
  { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
