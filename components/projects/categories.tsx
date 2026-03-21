'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui';

import { TECH_CATEGORIES } from '@/constants/categories';

export const ProjectCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...TECH_CATEGORIES.slice(0, 6).map((category) => category.label)];

  return (
    <>
      {categories.map((category) => (
        <Badge
          key={category}
          variant="outline"
          className={`transition-colors ${
            selectedCategory === category.toLowerCase()
              ? 'bg-primary text-primary-foreground'
              : 'cursor-pointer hover:bg-primary hover:text-primary-foreground'
          }`}
          onClick={() => setSelectedCategory(category.toLowerCase())}
        >
          {category}
        </Badge>
      ))}
    </>
  );
};

export default ProjectCategories;
