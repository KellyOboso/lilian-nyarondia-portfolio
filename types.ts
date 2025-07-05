import React from 'react';

export interface Skill {
  name: string;
  description: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  position: string;
}
