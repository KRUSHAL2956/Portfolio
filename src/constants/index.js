import { 
  Code, 
  Globe, 
  Shield, 
  Server, 
  Users, 
  Wrench, 
  Network 
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
    title: "Finance Tracker Web App",
    description: "Full-stack personal finance app with real-time tracking, budget planning, and AI-driven insights using Gemini API.",
    image: "/project-images/finance-tracker.png",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Groq API"],
    category: "web",
    liveUrl: "https://krushal-finance-tracker.vercel.app/",
    githubUrl: "https://github.com/KRUSHAL2956",
  },
  {
    title: "Real-Time Weather Dashboard",
    description: "A responsive weather application built with vanilla JavaScript, featuring real-time weather data and interactive maps. Includes 5-day forecast and city search.",
    image: "/project-images/weather-dashboard.png",
    technologies: ["JavaScript", "HTML", "CSS", "Leaflet.js", "OpenWeatherMap API"],
    category: "web",
    liveUrl: "https://krushal-weather-dashboard.vercel.app/",
    githubUrl: "https://github.com/KRUSHAL2956/dynamic-weather-dashboard",
  },
  {
    title: "Web Application Vulnerability Scanner",
    description: "A comprehensive security tool to detect common web vulnerabilities like XSS and SQL Injection. Features automated scanning and detailed reporting.",
    image: "/project-images/vulnerability-scanner.png",
    technologies: ["Python", "Flask", "BeautifulSoup", "Security"],
    category: "security",
    liveUrl: "https://websec-scanner-qdmo.onrender.com/",
    githubUrl: "https://github.com/KRUSHAL2956/WebSecScanner/",
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
    skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX Design", "DOM Manipulation", "React", "Tailwind CSS"],
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "#00ff88",
    skills: ["Python", "Java", "C", "JavaScript", "DSA", "Algorithms"],
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
    skills: ["Computer Networks", "Internet Protocols", "Linux", "Operating Systems", "Shell Scripting", "SQL & DBMS"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "#ffaa00",
    skills: ["Git & GitHub", "VS Code", "Command Line", "Version Control", "API Integration", "Debugging"],
  },
  {
    title: "Leadership",
    icon: Users,
    color: "#00aaff",
    skills: ["Team Leadership", "Event Management", "Community Building", "Project Management", "Public Speaking"],
  },
];

export const EXPERIENCES = [
  {
    title: "Cyber Security Intern",
    company: "Elevate Labs",
    location: "Virtual",
    period: "Oct 2025 - Present",
    description: "Performed network and web application vulnerability assessments, supported threat analysis, and prepared security reports to enhance system security.",
    achievements: [
      "Conducting vulnerability assessments",
      " implementing security controls",
      "Monitoring security threats",
    ],
    technologies: ["Security Analysis", "Vulnerability Assessment", "Incident Response"],
  },
  {
    title: "Google Student Ambassador",
    company: "Google",
    location: "Vadodara, Gujarat",
    period: "Sep 2025 - Present",
    description: "Led university tech events and community initiatives, promoting Google programs. Demonstrated strong communication, leadership, and student engagement skills.",
    achievements: [
      "Managed 15+ technical events",
      "Built student developer community",
      "Organized workshops",
    ],
    technologies: ["Leadership", "Community Building", "Event Management"],
  },
  {
    title: "Front-End Development Intern",
    company: "IBM",
    location: "Virtual",
    period: "Aug 2025 - Oct 2025",
    description: "Developed responsive web pages using HTML, CSS, and JavaScript, improving UI/UX and collaborating with team members for project delivery.",
    achievements: [
      "Built responsive web applications",
      "Mastered modern development practices",
      "Hands-on experience with frontend tech",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "B.Tech Computer Science & Engineering",
    company: "Parul University",
    location: "Surat, Gujarat",
    period: "Jun 2027",
    description: "Currently in 5th semester with 8.02 CGPA. Specializing in Cybersecurity & Web Development.",
    achievements: [
      "CGPA: 8.02",
      "Specialization in Cybersecurity",
      "Active Campus Leader",
    ],
    technologies: ["Computer Science", "Networks", "Web Development"],
  },
  {
    title: "Higher Secondary Education",
    company: "Ashadeep IIT",
    location: "Surat, Gujarat",
    period: "May 2023",
    description: "Completed Higher Secondary Education.",
    achievements: [],
    technologies: [],
  },
  {
    title: "Secondary Education",
    company: "Sardar Patel Vidhya Bhavan",
    location: "Surat, Gujarat",
    period: "Apr 2021",
    description: "Completed Secondary Education.",
    achievements: [],
    technologies: [],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Smart Coder",
    issuer: "Smart Interviews",
    date: "Aug 2025",
    credentialId: "SI-SC-2025",
    icon: Code,
    url: "https://smartinterviews.in/certificate/edf51272",
    description: "Comprehensive training in Data Structures and Algorithms, focusing on problem-solving and optimization techniques."
  },
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    date: "October 2025",
    credentialId: "IBM-WEB-2025",
    icon: Globe,
    url: "https://www.credly.com/badges/4c929793-b866-41b8-bf1c-a4e80df5e613/linked_in_profile",
    description: "Foundational knowledge of web development technologies including HTML, CSS, and JavaScript."
  },
  {
    title: "Computer Networks and Internet Protocols",
    issuer: "NPTEL",
    date: "May 2025",
    credentialId: "NPTEL-CN-2025",
    icon: Network,
    url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs15/Course/NPTEL25CS15S115760023504263652.pdf",
    description: "In-depth understanding of computer networking concepts, protocols, and architecture."
  },
];
