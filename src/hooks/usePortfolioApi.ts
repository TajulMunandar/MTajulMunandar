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
          fetch(`${API_BASE_URL}/`),
          fetch(`${API_BASE_URL}/profile`),
        ]);

        const allData: ApiResponse<AllData> = await allResponse.json();
        const profileData: ApiResponse<Profile> = await profileResponse.json();

        setData(allData.data);
        setProfile(profileData.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('API Error:', err);
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