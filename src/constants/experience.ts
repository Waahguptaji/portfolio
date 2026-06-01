export interface ExperienceItem {
  id: string;
  date: string;
  company: string;
  role: string;
  description: string;
  isActive?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "tcs",
    date: "Oct 2024 — Pres",
    company: "Tata Consultancy Services",
    role: "Full Stack Developer",
    description:
      "Writing production-grade Java and managing JDBC data layers to support scalable backend services for enterprise financial web applications in the BFSI domain.",
    isActive: true,
  },
  {
    id: "american-chase",
    date: "Feb — Jul 2024",
    company: "American Chase",
    role: "Software Development Engineer",
    description:
      "Developed core frontend features using React, TypeScript, and Redux Toolkit for a real-time warehouse management dashboard, improving application stability by 40%.",
  },
];
