export interface Project {
  id: string;
  name: string;
  year: string;
  descKey: string;
  tech: string[];
  image?: string;
  url: string;
  websiteUrl?: string;
  featured?: boolean;
}
