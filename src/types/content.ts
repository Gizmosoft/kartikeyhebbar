export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface SiteData {
  brand: string;
  name: string;
  title: string;
  footer: string;
  githubProfile: string;
  nav: NavLink[];
  social: SocialLink[];
}

export interface HomeData {
  name: string;
  role: string;
  photo: string;
  tagline: string;
  stackLines: string[];
  greeting: string;
  bio: string[];
  location: string;
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  title: string;
  dates: string;
  logo: string;
  bullets: string[];
  stack: string[];
}

export interface WorkData {
  heading: string;
  experiences: Experience[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Responsibility {
  title: string;
  role: string;
  description: string;
}

export interface EducationEntry {
  id: number;
  school: string;
  location: string;
  affiliation: string;
  degree: string;
  field: string;
  grade: string;
  courses: string[];
  achievements: Achievement[];
  responsibilities: Responsibility[];
}

export interface EducationData {
  heading: string;
  entries: EducationEntry[];
}

export interface SkillItem {
  name: string;
  logo: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  url: string;
}

export interface SkillsData {
  heading: string;
  groups: SkillGroup[];
  otherTechnologies: string[];
  certifications: Certification[];
}

export interface Project {
  id: number;
  title: string;
  timestamp: string;
  thumbnail: string;
  tech: string[];
  domain: string;
  description: string;
  source: string;
  live: string;
}

export interface ProjectsData {
  heading: string;
  githubNote: string;
  items: Project[];
}

export interface Blog {
  id: number;
  title: string;
  timestamp: string;
  thumbnail: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  readTime: string;
  source: string;
  live: string;
}

export interface BlogsData {
  heading: string;
  items: Blog[];
}

export interface ResearchItem {
  id: number;
  title: string;
  paper: string;
  issued: string;
  description: string[];
  url: string;
}

export interface ResearchData {
  heading: string;
  items: ResearchItem[];
}

export interface AspirationItem {
  id: number;
  question: string;
  answerType: 'paragraphs' | 'bullets';
  paragraphs: string[];
  bullets: string[];
}

export interface AspirationsData {
  heading: string;
  items: AspirationItem[];
}
