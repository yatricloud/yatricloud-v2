export interface Certification {
  code: string;
  name: string;
  level: string;
  description: string;
}

export interface CertificationGroup {
  title: string;
  description: string;
  certifications: Certification[];
}

export interface CurriculumSection {
  title: string;
  topics: string[];
}

export interface CertificationDetail {
  code: string;
  name: string;
  level: string;
  description: string;
  credlyBadge: string;
  duration: string;
  price: number;
  discountedPrice?: number;
  examVoucher?: boolean;
  learningObjectives: string[];
  prerequisites: string[];
  curriculum: CurriculumSection[];
}