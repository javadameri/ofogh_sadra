export interface SocialLink {
  platform: "facebook" | "linkedin" | "dribbble";
  url: string;
}
export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  longDescription: string[];
  image: { src: string; alt: string; width: number; height: number };
  features: string[];
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: {
    src: string;
    alt: string;
  };
  phone: string;
  email: string;
  description: string[];
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    dribbble?: string;
    instagram?: string;
  };
  activities: string[];
  skills: { name: string; percentage: number }[];
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string; width: number; height: number };
  date: string;
  comments: number;
  link: string;
}

export interface DetailedBlogPost {
  id: string;
  title: string;
  date: string;
  categories: { name: string; link: string }[];
  commentsCount: number;
  image: { src: string; alt: string; width: number; height: number };
  content: {
    paragraphs: string[];
    blockquote?: { text: string; author: string };
    list?: string[];
  };
  tags: { name: string; link: string }[];
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  avatar: { src: string; alt: string; width: number; height: number };
  date: string;
  content: string;
  children?: Comment[];
}

export interface RecentPost {
  id: string;
  title: string;
  date: string;
  image: { src: string; alt: string; width: number; height: number };
  link: string;
}

export interface Tag {
  name: string;
  link: string;
}
