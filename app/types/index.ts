export interface Specs {
  cpu: string;
  ram: string;
  storage: string;
  vga: string;
  powerUsage: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  cpu: 'entry' | 'mid' | 'high';
  ram: number;
  storage: 'hdd' | 'ssd' | 'nvme';
  vga: 'integrated' | 'entry' | 'mid' | 'high';
  specs: Specs;
  rating: number;
  warranty: number;
  powerUsage: number;
  image?: string;
  isCustom?: boolean;
}

export interface RecommendationResult extends Product {
  finalScore: number;
  matchScore: number;
  priceScore: number;
  perfScore: number;
  ratingScore: number;
  warrantyScore: number;
}

export type Priority = 'price' | 'performance' | 'efficiency' | 'balanced';

export interface SearchFilters {
  budget: number;
  cpu: string;
  ram: string;
  storage: string;
  vga: string;
  priority: Priority;
}
