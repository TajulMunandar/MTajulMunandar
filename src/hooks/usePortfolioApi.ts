import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://tajulcms.developerdadakan.com/api';
const STORAGE_BASE_URL = 'https://tajulcms.developerdadakan.com/storage/';

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  category: string;
  stack: string[];
  features: string[];
  gradient: string;
  icon: string;
  link: string;
  github: string;
  is_featured: boolean;
  sort_order: number;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: number;
  year: number;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  color: string;
  category: string;
  level: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  title: string;
  tagline: string;
  short_description: string;
  features: string[];
  icon: string;
  gradient: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  sort_order: number;
  date_received: string;
  certificate_link: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  about_full: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  github: string;
  linkedin: string;
  instagram: string;
  is_available: boolean;
}

interface ApiResponse<T> {
  status: string;
  data: T;
}

interface AllData {
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  services: Service[];
  achievements: Achievement[];
}

export const getImageUrl = (path: string) => `${STORAGE_BASE_URL}${path}`;

export const usePortfolioApi = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AllData>({
    projects: [],
    experiences: [],
    skills: [],
    services: [],
    achievements: [],
  });
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [allResponse, profileResponse] = await Promise.all([
          fetch(`${API_BASE_URL}`),
          fetch(`${API_BASE_URL}/profile`),
        ]);

        const allData: ApiResponse<AllData> = await allResponse.json();
        const profileData: ApiResponse<Profile> = await profileResponse.json();

        setData(allData.data);
        setProfile(profileData.data);
       } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('API Error:', err);
        
        // Fallback dummy data jika API gagal/CORS error
        setData({
          projects: [
            { id: 1, title: "AI Currency Detection", tagline: "Real-time currency detection system", description: "Real-time currency detection system using YOLO and SSD deep learning models", category: "AI & Computer Vision", stack: ["Python", "YOLO", "OpenCV"], features: ["Real-time detection", "Multi currency support"], gradient: "from-blue-500/20 to-purple-500/20", icon: "", link: "", github: "", is_featured: true, sort_order: 1, image: "", created_at: "", updated_at: "" },
            { id: 2, title: "Acehnese Speech Recognition", tagline: "Speech-to-text for Acehnese language", description: "Speech-to-text system for the Acehnese language using deep learning", category: "AI & NLP", stack: ["Python", "PyTorch", "Librosa"], features: ["Custom acoustic model", "High accuracy"], gradient: "from-purple-500/20 to-pink-500/20", icon: "", link: "", github: "", is_featured: true, sort_order: 2, image: "", created_at: "", updated_at: "" },
            { id: 3, title: "UTBK Data Research System", tagline: "UTBK exam analytics platform", description: "Comprehensive data research platform for UTBK exam analytics", category: "Web Application", stack: ["Laravel", "MySQL", "Chart.js"], features: ["Analytics dashboard", "Data visualization"], gradient: "from-cyan-500/20 to-blue-500/20", icon: "", link: "", github: "", is_featured: true, sort_order: 3, image: "", created_at: "", updated_at: "" },
          ],
          experiences: [
            { id: 1, year: 2024, title: "AI Engineer", company: "Freelance", description: "Developing AI and computer vision systems for various clients", highlights: ["Object detection systems", "NLP applications"], sort_order: 1, created_at: "", updated_at: "" },
            { id: 2, year: 2023, title: "Fullstack Developer", company: "Digital Agency", description: "Building web applications and backend systems", highlights: ["API development", "Database design"], sort_order: 2, created_at: "", updated_at: "" },
          ],
          skills: [
            { id: 1, name: "Python", icon: "", color: "#3776AB", category: "Programming", level: 90, sort_order: 1, created_at: "", updated_at: "" },
            { id: 2, name: "Laravel", icon: "", color: "#FF2D20", category: "Backend", level: 85, sort_order: 2, created_at: "", updated_at: "" },
            { id: 3, name: "React", icon: "", color: "#61DAFB", category: "Frontend", level: 80, sort_order: 3, created_at: "", updated_at: "" },
            { id: 4, name: "Machine Learning", icon: "", color: "#FF6F00", category: "AI", level: 88, sort_order: 4, created_at: "", updated_at: "" },
          ],
          services: [
            { id: 1, title: "AI Development", tagline: "Custom AI solutions", short_description: "Building intelligent systems using machine learning and deep learning", features: ["Computer Vision", "NLP", "Predictive Analytics"], icon: "", gradient: "from-blue-500/20 to-purple-500/20", sort_order: 1, created_at: "", updated_at: "" },
            { id: 2, title: "Web Development", tagline: "Fullstack web applications", short_description: "Modern web applications with clean architecture", features: ["Backend API", "Frontend UI", "Database Design"], icon: "", gradient: "from-purple-500/20 to-pink-500/20", sort_order: 2, created_at: "", updated_at: "" },
            { id: 3, title: "Mobile Development", tagline: "Cross platform mobile apps", short_description: "Beautiful and performant mobile applications", features: ["Flutter", "Native Performance", "Offline Support"], icon: "", gradient: "from-cyan-500/20 to-blue-500/20", sort_order: 3, created_at: "", updated_at: "" },
          ],
          achievements: [
            { id: 1, title: "Machine Learning Certification", description: "Professional certification in machine learning", icon: "", sort_order: 1, date_received: "2024-01-15", certificate_link: "", image: "", created_at: "", updated_at: "" },
            { id: 2, title: "Web Developer Bootcamp", description: "Complete web development bootcamp certification", icon: "", sort_order: 2, date_received: "2023-06-20", certificate_link: "", image: "", created_at: "", updated_at: "" },
          ]
        });
        
        setProfile({
          name: "Muhammad Tajul Munandar",
          title: "AI Engineer & Fullstack Developer",
          bio: "AI Engineer & Fullstack Developer building intelligent systems that solve real-world problems.",
          about_full: "I am a passionate developer with expertise in artificial intelligence, machine learning, and fullstack web development. I love building systems that automate tasks and solve real problems.",
          location: "Aceh, Indonesia",
          email: "tajulmunandar701@gmail.com",
          phone: "",
          avatar: "",
          github: "https://github.com/TajulMunandar",
          linkedin: "https://www.linkedin.com/in/muhammad-tajul-munandar-02810a290/",
          instagram: "https://www.instagram.com/tajul_munandar/",
          is_available: true
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return {
    loading,
    error,
    profile,
    projects: data.projects || [],
    experiences: data.experiences || [],
    skills: data.skills || [],
    services: data.services || [],
    achievements: data.achievements || [],
  };
};

export default usePortfolioApi;