// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Balaji M",
  shortName: "Balaji",
  title: "Full-Stack Developer",
  // Used for the browser tab / search-engine title.
  seoTitle: "Full-Stack Developer | React.js | Next.js | NestJS | TypeScript",
  roles: [
    "Full-Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "NestJS Developer",
  ],
  summary:
    "I design, develop and maintain scalable, responsive and user-friendly web applications with React.js, Next.js, NestJS and TypeScript.",
  about: [
    "I'm a passionate Full-Stack Developer with 7+ years of experience in web development, including 2+ years as a Full-Stack Developer, designing, developing, and maintaining scalable, responsive, and user-friendly web applications.",
    "I specialize in frontend development using React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS, along with backend development using Node.js, NestJS, REST APIs, and MySQL.",
    "Throughout my career, I've worked on various projects involving interactive learning platforms, healthcare visualization systems, content management solutions, and enterprise administration dashboards.",
    "I have hands-on experience in developing applications from scratch, building RESTful APIs, integrating third-party services, implementing secure authentication and authorization, optimizing application performance, and deploying applications using AWS.",
    "I enjoy solving complex technical challenges, learning new technologies, and transforming business requirements into reliable software solutions.",
  ],
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
  { value: "7+", label: "Years in Web Development" },
  { value: "2+", label: "Years as Full-Stack Developer" },
  { value: "React & Next.js", label: "Frontend Development" },
  { value: "NestJS", label: "Backend Development" },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Reusable components and responsive interfaces with React.js, Next.js, TypeScript and Tailwind CSS.",
    icon: "code",
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs and backend services with Node.js, NestJS and MySQL, built from scratch.",
    icon: "server",
  },
  {
    title: "Authentication & Security",
    description:
      "JWT, SAML, OAuth and SSO, role-based access, and secure media delivery.",
    icon: "lock",
  },
  {
    title: "Cloud & Deployment",
    description:
      "AWS S3, RDS and CloudFront for storage and delivery, deployed on Linux with PM2.",
    icon: "bolt",
  },
] as const;

export const skillCategories = [
  { title: "Frontend", icon: "code", skills: ["React.js", "Next.js", "JavaScript", "TypeScript"] },
  { title: "UI Development", icon: "layout", skills: ["HTML5", "CSS3", "Tailwind CSS", "Material UI"] },
  { title: "State Management", icon: "layers", skills: ["Redux", "Zustand"] },
  { title: "Backend", icon: "server", skills: ["Node.js", "NestJS", "REST APIs"] },
  { title: "Database", icon: "database", skills: ["MySQL", "TypeORM", "SQL"] },
  { title: "Cloud & Storage", icon: "cloud", skills: ["AWS S3", "AWS RDS", "CloudFront"] },
  { title: "Media Processing", icon: "film", skills: ["FFmpeg", "HLS Streaming"] },
  { title: "Authentication", icon: "key", skills: ["JWT", "SAML", "OAuth", "SSO"] },
  { title: "Tools", icon: "wrench", skills: ["Git", "GitHub", "Postman", "Docker", "VS Code"] },
  { title: "Deployment", icon: "rocket", skills: ["Linux", "Ubuntu", "PM2", "AWS"] },
];

// Brand colour for the dot shown next to each technology.
export const techColors: Record<string, string> = {
  "React.js": "#61dafb",
  "Next.js": "#111111",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  HTML5: "#e34f26",
  CSS3: "#1572b6",
  "Tailwind CSS": "#06b6d4",
  "Material UI": "#007fff",
  Redux: "#764abc",
  Zustand: "#443e38",
  "Node.js": "#5fa04e",
  NestJS: "#e0234e",
  "REST APIs": "#00489d",
  MySQL: "#4479a1",
  TypeORM: "#fe0803",
  SQL: "#336791",
  "AWS S3": "#569a31",
  "AWS RDS": "#527fff",
  CloudFront: "#8c4fff",
  FFmpeg: "#007808",
  "HLS Streaming": "#ff6f00",
  JWT: "#d63aff",
  SAML: "#0072c6",
  OAuth: "#eb5424",
  SSO: "#0ea5e9",
  Git: "#f05032",
  GitHub: "#181717",
  Postman: "#ff6c37",
  Docker: "#2496ed",
  "VS Code": "#007acc",
  Linux: "#fcc624",
  Ubuntu: "#e95420",
  PM2: "#2b037a",
  AWS: "#ff9900",
};


export type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  points: string[];
  projects?: { name: string; stack?: string; points: string[] }[];
};

export const experience: TimelineEntry[] = [
  {
    period: "Jul 2024 – Present",
    role: "Fullstack Developer",
    company: "TCP International",
    points: [
      "Developing full-stack web applications using React.js, Next.js, NestJS, and TypeScript.",
      "Building reusable frontend components and responsive interfaces.",
      "Developing REST APIs and integrating MySQL databases.",
      "Implementing secure authentication, SSO, and role-based access.",
      "Integrating AWS S3 and CloudFront for media storage and delivery.",
      "Optimizing application performance and resolving production issues.",
    ],
  },
  {
    period: "Jun 2019 – Apr 2024",
    role: "Web Developer",
    company: "Sakthi Infotech, Erode",
    points: [
      "Worked on website design and development.",
      "Gained experience in frontend and backend web technologies.",
      "Worked with PHP, MySQL, JavaScript, and modern web development technologies.",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    period: "66.88% · First Class",
    role: "Bachelor of Science – Computer Science (B.Sc.)",
    company: "Erode Arts and Science College, Erode",
    points: [],
  },
];

export const achievements = [
  "Built an HLS video pipeline with FFmpeg and AWS MediaConvert for Clinical Visuals",
  "Secured video delivery with CloudFront signed cookies and S3 pre-signed uploads",
  "Implemented SSO between CTI Online and SkillTracks with JWT login tokens",
  "Top backend contributor on Clinical Visuals: 15 major features, 293 commits",
  "Winner — debugging competition, intra-college",
  "Runner-up — debugging competition, inter-college",
];

export const projects: {
  title: string;
  category: string;
  role?: string;
  description: string;
  tags: string[];
  contributions?: string[];
  href?: string;
}[] = [
  {
    title: "Clinical Visuals",
    category: "Healthcare Visualization & Learning Platform",
    role: "Full-Stack Development",
    description:
      "Developed a healthcare visualization platform that provides interactive medical animations, narrated content, and educational resources.",
    tags: ["React.js", "TypeScript", "NestJS", "MySQL", "AWS", "FFmpeg"],
    contributions: [
      "Developed the application from scratch, handling both frontend and backend.",
      "Built animation management, interactive narrated content, and system-based modules.",
      "Implemented large video uploads using AWS S3 presigned URLs.",
      "Integrated FFmpeg for HLS video transcoding and streaming.",
      "Implemented CloudFront signed cookies for secure video delivery.",
      "Developed user management, business cards, templates, and admin modules.",
      "Implemented secure media access and CDN integration.",
    ],
  },
  {
    title: "CTI Online",
    category: "Online Learning & Training Platform",
    role: "Full-Stack Development",
    description:
      "Worked on an online learning platform designed to manage training programs, users, assessments, and learning activities.",
    tags: ["React", "TypeScript", "Ruby on Rails", "MySQL", "JWT"],
    contributions: [
      "Implemented Single Sign-On (SSO) between CTI Portal and SkillTracks.",
      "Developed secure JWT-based login token generation.",
      "Implemented redirect-after-login functionality.",
      "Developed user enrollment and session capacity management.",
      "Built user guide management and shareable deep links.",
      "Implemented encrypted identifiers and dynamic banner management.",
      "Worked on backend APIs and frontend integrations.",
    ],
  },
  {
    title: "SkillTracks",
    category: "Skills Assessment & Learning Platform",
    role: "Feature Development",
    description:
      "Contributed to a skills assessment and learning platform integrated with CTI Online.",
    tags: ["React", "TypeScript", "REST APIs", "SSO"],
    contributions: [
      "Developed assessment management interfaces.",
      "Implemented user enrollment and seat capacity restrictions.",
      "Worked on skill assessment level-based content access.",
      "Developed feedback management features.",
      "Integrated SSO for seamless access from CTI Online.",
      "Enhanced user experience and navigation.",
    ],
  },
  {
    title: "Vehicle Visuals Admin Panel",
    category: "Automotive Content Management Dashboard",
    role: "Full-Stack Development",
    description:
      "Worked on developing a modern administration panel for managing automotive visualization content and business data.",
    tags: ["React", "TypeScript", "NestJS", "MySQL", "AWS S3"],
    contributions: [
      "Developed dashboard analytics with charts and filters.",
      "Implemented Manage Language module.",
      "Developed Parts AWS, Parts Interactive, and Parts Narrated modules.",
      "Implemented image cropping and S3 image uploads.",
      "Developed User IP Report with searchable and sortable tables.",
      "Integrated IP address geolocation information and backend caching.",
      "Implemented dark mode and admin dashboard enhancements.",
    ],
  },
  {
    title: "Liger Medical",
    category: "Medical Web Platform",
    role: "Web Development & Deployment",
    description:
      "Contributed to medical web application development, deployment, and server maintenance.",
    tags: ["React", "Next.js", "Node.js", "MySQL", "AWS"],
    contributions: [
      "Developed and maintained website features.",
      "Created and deployed a sandbox environment.",
      "Worked on database and deployment configurations.",
      "Troubleshot server performance and production issues.",
      "Managed application processes using PM2.",
    ],
  },
  {
    title: "MotoVisuals",
    category: "Automotive Training & Visualization Platform",
    role: "Web Development",
    description:
      "Worked on an automotive visualization and training platform focused on delivering interactive vehicle-related educational content.",
    tags: ["React", "JavaScript", "Web Technologies"],
  },
  {
    title: "Service Visuals",
    category: "Service & Technical Visualization Platform",
    description:
      "Worked on web application features related to service visualization and digital content management, using modern frontend and backend technologies.",
    tags: [],
  },
];
