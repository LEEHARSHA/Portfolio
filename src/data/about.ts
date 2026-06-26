export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const aboutContent = {
  story:
    "RUKD Technologies is a software development company focused on building modern digital solutions for businesses and startups. We specialize in web development, mobile applications, AI-powered solutions, and custom software tailored to client requirements. Our goal is to deliver scalable, secure, and visually stunning products that help businesses grow.",
};

export const coreValues: CoreValue[] = [
  { title: "Innovation", description: "Pushing boundaries with cutting-edge technology and creative solutions.", icon: "Lightbulb" },
  { title: "Excellence", description: "Delivering pixel-perfect products with uncompromising quality standards.", icon: "Award" },
  { title: "Integrity", description: "Building trust through transparency, honesty, and reliable partnerships.", icon: "Heart" },
  { title: "Collaboration", description: "Working closely with clients as true partners in their success journey.", icon: "Users" },
];
