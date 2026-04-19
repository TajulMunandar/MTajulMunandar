import { 
  Code, Brain, Bot, Database, Globe, Smartphone, Layers, Shield, 
  Zap, BarChart3, Cpu, Headphones, Server, Terminal, Cloud, Lock,
  Search, Filter, Layout, Palette, PenTool, Monitor, Smartphone as Mobile,
  Wifi, Bluetooth, Battery, Camera, Mic, FileCode, Coffee, Rocket,
  Target, Lightbulb, Users, MessageSquare, Mail, Github, Linkedin,
  Award, Trophy, Star, CheckCircle, TrendingUp, PieChart, LineChart,
  Activity, Bell, BookOpen, Briefcase, Building, Calendar, Clock,
  CreditCard, DollarSign, Eye, FileText, Folder, Heart, Home, Image,
  Info, Key, Loader, MapPin, Menu, Music, Package, Paperclip, Phone,
  Plus, Settings, Share2, ShoppingCart, ThumbsUp, User, Video, Volume2,
  Wrench, ZapOff, AlertCircle, ArrowUp, ArrowDown, ChevronRight,
  ExternalLink, Github as GitBranch, RefreshCw
} from "lucide-react";

// Daftar icon lucide yang akan dipilih secara random
export const iconList = [
  Code, Brain, Bot, Database, Globe, Smartphone, Layers, Shield,
  Zap, BarChart3, Cpu, Headphones, Server, Terminal, Cloud, Lock,
  Search, Filter, Layout, Palette, PenTool, Monitor, Mobile,
  Wifi, FileCode, Coffee, Rocket, Target, Lightbulb, Award, Trophy,
  Star, TrendingUp, PieChart, Activity, Bell, BookOpen, Briefcase,
  Calendar, Eye, FileText, Folder, Heart, Image, Key, Package,
  Settings, User, Wrench, AlertCircle, GitBranch, RefreshCw
];

// Fungsi untuk mendapatkan icon secara random berdasarkan id (konsisten)
export const getRandomIcon = (id: number) => {
  const index = id % iconList.length;
  return iconList[index];
};
