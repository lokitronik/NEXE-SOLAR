export interface ProjectInquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  estimatedPanels: string;
  service: string;
  expectedStartDate: string;
  message: string;
}

export type ServiceId = 'solar-installation' | 'dc-cabling' | 'maintenance' | 'preventive-services';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDesc: string;
  details: string[];
  scope: string;
  iconName: string;
  badge: string;
}

export interface PartnerCategory {
  id: string;
  title: string;
  subtext: string;
  question: string;
  useCase: string[];
  icon: string;
}
