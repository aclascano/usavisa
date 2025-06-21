// src/types/visa.ts
export interface Visa {
  id: string;
  title: string;
  country: string;
  image: string;
  tags: string[];
  description: string;
  details: string;
  requirements?: string[];
}
