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

export const companyTagline = "Transforming Ideas into Powerful Digital Solutions";

export const contactEmail = "badigantileeharsha@gmail.com";

export const contactPhones = ["8555948055", "9346507620"];

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: "Mail",
  },
  {
    type: "phone-1",
    label: "Phone",
    value: contactPhones[0],
    href: `tel:${contactPhones[0]}`,
    icon: "Phone",
  },
  {
    type: "phone-2",
    label: "Phone",
    value: contactPhones[1],
    href: `tel:${contactPhones[1]}`,
    icon: "Phone",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { name: "GitHub", href: "https://github.com", icon: "Github" },
  { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const footerServices = [
  "Website Development",
  "Mobile App Development",
  "AI Solutions",
  "Custom Software Development",
  "UI/UX Design",
  "API Development",
];
