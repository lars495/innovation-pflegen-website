import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}
