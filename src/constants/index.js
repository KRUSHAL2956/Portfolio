import {
  Code,
  Globe,
  Shield,
  Server,
  Users,
  Wrench,
  Network,
  Award
} from "lucide-react";

export const NAVIGATION_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const PROJECTS = [
  {
    title: "Finance Tracker Web Application",
    description: "A personal finance management application designed to help users track income, expenses, and savings goals with secure authentication and AI-assisted insights. Built with full-stack architecture focusing on clean code, data handling, and real-world usability.",
    image: "/project-images/finance-tracker.webp",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Groq API"],
    category: "web",
    liveUrl: "https://krushal-finance-tracker.vercel.app/",
    githubUrl: "https://github.com/KRUSHAL2956/Finance-Tracker",
  },
  {
    title: "Web Application Vulnerability Scanner",
    description: "A security-focused application developed to identify common web vulnerabilities such as XSS and SQL Injection. Implements automated scanning, response analysis, and structured vulnerability reports.",
    image: "/project-images/vulnerability-scanner.webp",
    technologies: ["Python", "Flask", "MongoDB", "Security Testing"],
    category: "security",
    liveUrl: "https://websec-scanner-qdmo.onrender.com/",
    githubUrl: "https://github.com/KRUSHAL2956/WebSecScanner/",
  },
  {
    title: "Real-Time Weather Dashboard",
    description: "A responsive weather dashboard that provides real-time weather data, forecasts, and location-based insights using public APIs. Features clean UI, city search, and forecast functionality.",
    image: "/project-images/weather-dashboard.webp",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    category: "web",
    liveUrl: "https://krushal-weather-dashboard.vercel.app/",
    githubUrl: "https://github.com/KRUSHAL2956/dynamic-weather-dashboard",
  },
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "security", label: "Cybersecurity" },
];

export const SKILL_CATEGORIES = [
  {
    title: "Web Development",
    icon: Globe,
    color: "#00f0ff",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design", "DOM Manipulation"],
  },
  {
    title: "Programming & DSA",
    icon: Code,
    color: "#00ff88",
    skills: ["C", "Java", "Python", "JavaScript", "Data Structures & Algorithms", "Algorithms"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "#ff0080",
    skills: ["Network Security", "Kali Linux", "Security Analysis", "Vulnerability Assessment", "Ethical Hacking"],
  },
  {
    title: "Systems & Networking",
    icon: Server,
    color: "#aaff00",
    skills: ["Linux", "Operating Systems", "Computer Networks", "Internet Protocols", "Shell Scripting"],
  },
  {
    title: "Databases, APIs & Dev Tools",
    icon: Wrench,
    color: "#ffaa00",
    skills: ["SQL & DBMS", "MongoDB", "MySQL", "REST APIs", "Git", "GitHub", "Command Line", "Version Control"],
  },
  {
    title: "Leadership & Collaboration",
    icon: Users,
    color: "#00aaff",
    skills: ["Team Leadership", "Event Management", "Community Building", "Project Management", "Public Speaking"],
  },
];

export const EXPERIENCES = [
  {
    title: "Cyber Security Intern (Virtual)",
    company: "Elevate Labs",
    location: "Virtual",
    period: "Oct 2025 – Dec 2025",
    description: "Gained hands-on exposure to cybersecurity fundamentals, vulnerability assessment, and Linux-based security tools. Worked on understanding common web security risks and was recognized with a Top Performer certificate.",
    achievements: [
      "Top Performer Certificate",
      "Vulnerability Assessment",
      "Linux Security Tools",
    ],
    technologies: ["Cybersecurity", "Vulnerability Assessment", "Linux", "Security Analysis"],
  },
  {
    title: "Frontend Development Intern (Virtual)",
    company: "Edunet Foundation in collaboration with IBM",
    location: "Virtual",
    period: "Aug 2025 – Oct 2025",
    description: "Worked on building responsive web pages using HTML, CSS, and JavaScript, focusing on UI structure, usability, and collaborative development practices.",
    achievements: [
      "Built responsive web pages",
      "UI structure & usability focus",
      "Collaborative development",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Google Student Ambassador",
    company: "Google",
    location: "Vadodara, Gujarat",
    period: "Sep 2025 – Jan 2026",
    description: "Actively involved in student engagement initiatives and technical events, supporting community building, workshops, and collaboration among students.",
    achievements: [
      "Student engagement initiatives",
      "Technical events & workshops",
      "Community building",
    ],
    technologies: ["Leadership", "Community Building", "Event Management"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Smart Coder – Data Structures & Algorithms",
    issuer: "Smart Interviews",
    date: "Aug 2025",
    icon: Code,
    url: "https://smartinterviews.in/certificate/edf51272",
    description: "Completed structured training in data structures and algorithms with a strong focus on problem-solving, logical thinking, and optimization techniques."
  },
  {
    title: "Top Performer – Cyber Security Internship",
    issuer: "Elevate Labs",
    date: "Dec 2025",
    icon: Award,
    url: "https://drive.google.com/file/d/1OgghQZ7O7JfgG_6LUGLcag8iIsMpc_UB/view?usp=drive_link",
    description: "Recognized as a Top Performer for consistent performance and hands-on involvement in cybersecurity fundamentals, vulnerability assessment, and Linux-based tools."
  },
  {
    title: "Computer Networks & Internet Protocols",
    issuer: "NPTEL",
    date: "May 2025",
    icon: Network,
    url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs15/Course/NPTEL25CS15S115760023504263652.pdf",
    description: "Developed a clear understanding of networking fundamentals, including network architectures, protocols, and data communication concepts."
  },
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    date: "Oct 2025",
    icon: Globe,
    url: "https://www.credly.com/badges/4c929793-b866-41b8-bf1c-a4e80df5e613/linked_in_profile",
    description: "Built a solid foundation in web development using HTML, CSS, and JavaScript, with emphasis on responsive design, clean structure, and best practices."
  },
  {
    title: "Frontend Developer Internship",
    issuer: "Edunet Foundation in collaboration with IBM",
    date: "Oct 2025",
    icon: Globe,
    url: "https://drive.google.com/file/d/1qeol8oZE1kYbzC-w_KaiTpQoT6G1x66e/view?usp=drive_link",
    description: "Completed a frontend-focused internship centered on building responsive web pages using HTML, CSS, and JavaScript, with attention to UI structure, usability, and collaborative workflows."
  },
];
