export type UrgencyLevel = 'CRITICAL' | 'URGENT' | 'STANDARD';

export interface PracticeArea {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  subspecialties: string[];
  ctaText: string;
  urgencyDefault: UrgencyLevel;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  status?: 'typing' | 'done';
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  area: string;
  description: string;
  urgency?: UrgencyLevel;
  triageDetails?: string;
  whatsappConsent: boolean;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  text: string;
  area: string;
  rating: number;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  highlightText?: string;
  iconName: string;
  sizeClass: string; // Tailwind grid span classes
}
