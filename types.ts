import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  idealFor?: string[];
  tech?: string[];
}

export interface PricingTier {
  title: string;
  priceRange: string;
  description: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}