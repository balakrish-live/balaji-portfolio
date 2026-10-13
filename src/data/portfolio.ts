// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Balaji M",
  shortName: "Balaji",
  title: "Software Developer",
  roles: [
    "Software Developer",
    "React.js Developer",
    "NestJS Developer",
    "UI Engineer",
  ],
  summary:
    "I build end-to-end web platforms for learning, training, assessment and visualization — from architecting features from scratch to shipping polished, production-ready interfaces.",
  about:
    "Proficient in React.js for frontend development and NestJS for backend services, with hands-on expertise in SAML/SSO integration, authentication workflows, learning management systems and subscription-based platforms.",
  photo: "/profile.png",
  location: "Coimbatore, Tamil Nadu",
  email: "balakrish2330@gmail.com",
  phone: "+91 8072457716",
  resumeUrl: "/Balaji_M_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/balakrish-live" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/balaji-mohanasundaram-956116308",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "2+", label: "Years at TCP International" },
  { value: "4", label: "Platforms Built" },
  { value: "20+", label: "Technologies" },
  { value: "2", label: "Debugging Awards" },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces and reusable UI components with React.js, Tailwind CSS and Material UI.",
    icon: "code",
  },
  {
    title: "Backend & APIs",
    description:
      "Backend services and REST APIs with NestJS and PostgreSQL, built to integrate cleanly.",
    icon: "server",
  },
  {
    title: "Authentication & SSO",
    description:
      "SAML configuration, single sign-on and secure authentication workflows.",
    icon: "lock",
  },
  {
    title: "E-Learning Platforms",
    description:
      "Learning management, subscriptions, skill assessments and progress tracking.",
    icon: "book",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS / MUI", level: 90 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "SQL / PostgreSQL", level: 75 },
      { name: "SAML / SSO", level: 80 },
      { name: "PHP", level: 70 },
    ],
  },
];

export const tools = [
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "jQuery",
  "AJAX",
  "NestJS",
  "PHP",
  "REST APIs",
  "PostgreSQL",
  "SQL",
  "SAML",
  "SSO",
  "Shell Scripting",
  "FTP",
  "Git",
  "GitHub",
  "Photoshop",
];

export type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  points: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "Jul 2024 – Present",
    role: "Software Developer",
    company: "TCP International",
    points: [
      "Develop web applications and modules using React.js, Tailwind CSS, MUI, NestJS and Next.js.",
      "Build backend services and APIs with NestJS; work on SAML/SSO and authentication workflows.",
      "Build and maintain learning management, subscription and skill assessment workflows, often from scratch.",
      "Deploy builds with Shell scripting and FTP, and write technical documentation for integrations.",
    ],
  },
  {
    period: "Until Apr 2024",
    role: "Web Developer",
    company: "Sakthi Infotech, Erode",
    points: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript and PHP.",
      "Built UI components and page layouts for client projects alongside the design team.",
    ],
  },
  {
    period: "Mar 2019 – Jul 2019",
    role: "Web Designing / Digital Marketing",
    company: "Seismico Softech",
    points: [
      "Supported web design and digital marketing, including page layouts and promotional content.",
    ],
  },
  {
    period: "Jun 2017 – Dec 2017",
    role: "Data Entry Operator",
    company: "Eastern Silk Private Limited",
    points: ["Performed data entry, record management and documentation tasks."],
  },
];

export const education: TimelineEntry[] = [
  {
    period: "66.88% · First Class with Distinction",
    role: "B.Sc. Computer Science",
    company: "Erode Arts and Science College, Erode",
    points: [],
  },
  {
    period: "Jan 2018 – Aug 2018",
    role: "Frontend Development Course",
    company: "Atom Technologies",
    points: ["Structured training in HTML, CSS and JavaScript fundamentals."],
  },
  {
    period: "76%",
    role: "Higher Secondary (XII)",
    company: "Govt. Boys Hr. Sec. School, Pallipalayam",
    points: [],
  },
  {
    period: "73%",
    role: "SSLC (X)",
    company: "Govt. Boys Hr. Sec. School, Pallipalayam",
    points: [],
  },
];

export const achievements = [
  "Winner — debugging competition, intra-college meet",
  "Runner-up — debugging competition, inter-college meet",
];

export const projects: {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
}[] = [
  {
    title: "MotoVisuals",
    category: "Automotive Diagnostic & Training",
    description:
      "Interactive platform helping automotive technicians and students understand vehicle systems, component operation and diagnostics through animations and visual learning.",
    tags: ["Interactive Animations", "Visual Learning"],
  },
  {
    title: "CTI Online",
    category: "Automotive E-Learning",
    description:
      "Learning management platform for automotive service professionals — technical training, ASE test prep, courses, assessments, simulations, subscriptions and progress tracking.",
    tags: ["LMS", "Subscriptions", "Assessments"],
  },
  {
    title: "SkillTracks",
    category: "Skill Assessment",
    description:
      "Assesses technicians' capabilities, identifies skill gaps and recommends personalized learning paths based on assessment results.",
    tags: ["Assessments", "Personalized Learning"],
  },
  {
    title: "Clinical Visuals",
    category: "Medical Visualization",
    description:
      "Built from scratch to present medical conditions, procedures and anatomy through interactive visual content for healthcare professionals and patient education.",
    tags: ["Built from Scratch", "Patient Education"],
  },
];
