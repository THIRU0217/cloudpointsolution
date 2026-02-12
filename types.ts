
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  result: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface LeadEntry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization: string;
  interest: string;
  message: string;
  timestamp: string;
}

export enum PageType {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  AI_AUTOMATION = 'ai-automation',
  SAAS_DEV = 'saas-dev',
  MOBILE_CLOUD_APPS = 'mobile-cloud-apps',
  CYBERSECURITY = 'cybersecurity',
  IT_OUTSOURCING = 'it-outsourcing',
  DIGITAL_MARKETING = 'digital-marketing',
  SAP_TRAINING = 'sap-training',
  CORP_TRAINING = 'corp-training',
  UNI_TRAINING = 'uni-training',
  COLLEGE_TRAINING = 'college-training',
  CUSTOM_TRAINING = 'custom-training',
  CASE_STUDIES = 'case-studies',
  BLOG = 'blog',
  CAREERS = 'careers',
  CONTACT = 'contact',
  CONTACT_SUCCESS = 'contact-success',
  ADMIN_PORTAL = 'admin-portal',
  PRICING = 'pricing',
  PARTNER = 'partner',
  SUPPORT = 'support'
}
