export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  features: string[];
  images: string[];
  languages: {
    name: string;
    icon?: string;
    image?: string;
  }[];
  frameworksAndTools: {
    name: string;
    icon?: string;
    image?: string;
  }[];
  links: {
    name: string;
    link: string;
  }[];
  in_progress: boolean;
  redacted: boolean;
}
