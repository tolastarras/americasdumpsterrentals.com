import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Code2 } from 'lucide-react';

import type { Project } from '@/lib/types';

import { Badge } from '@/components/ui';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project
}

const defaultImages: Record<string, string> = {
  web: '/modern-web-application-dashboard-with-code.jpg',
  mobile: '/mobile-app-interface.png',
  ai: '/insights/ai-ml.png',
  api: '/api-backend-server-infrastructure.jpg',
  fullstack: '/fullstack-application-architecture.jpg',
  default: '/programming-code-on-screen-developer.jpg',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.preview_image || defaultImages[project.category?.toLowerCase()] || defaultImages.default;

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="group overflow-hidden bg-card hover:bg-secondary/50 transition-all duration-500 border-black/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 pt-0">
        <div className="aspect-3/2 relative overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={project.title}
            fill
            loading="eager"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Code2 className="h-4 w-4 text-primary" />
          </div>
        </div>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="secondary"
              className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {project.category}
            </Badge>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-balance group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10">{project.description}</p>
        </CardContent>
        <CardFooter className="flex items-start justify-between h-7 overflow-hidden">
          <div className="flex flex-wrap gap-1">
            {project.tech_stack.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-mono border-black/50 group-hover:border-accent/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </CardFooter>
      </Card>
    </Link>
  );
}
