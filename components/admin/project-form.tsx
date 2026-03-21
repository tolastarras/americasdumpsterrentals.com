'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Loader2 } from 'lucide-react';

// import { createClient } from '@/lib/supabase/client';
import type { Project } from '@/lib/types';

import { Button, Input, Label, Textarea } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

import { TechStackSelector } from './tech-stack-selector';

interface ProjectFormProps {
  project?: Project
}

interface ProjectFormData {
  title: string
  description: string
  long_description: string
  category: string
  techStack: string[]  // Explicit string array
  preview_image: string
  file_url: string
}

export function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    long_description: '',
    category: '',
    techStack: [],
    preview_image: '',
    file_url: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // const supabase = createClient();

    const projectData = {
      title: formData.title,
      description: formData.description,
      long_description: formData.long_description || null,
      category: formData.category,
      techStack: [],
      preview_image: formData.preview_image || null,
      file_url: formData.file_url,
      updated_at: new Date().toISOString(),
    };
    console.error(projectData);

    try {
      if (project) {
        // const { error } = await supabase.from('projects').update(projectData).eq('id', project.id);

        if (error) throw error;
      } else {
        // const { error } = await supabase.from('projects').insert(projectData);

        if (error) throw error;
      }

      router.push('/admin/projects');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save project');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="E-Commerce Dashboard"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Short Description *</Label>
            <Input
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="A brief description for cards"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="long_description">Full Description</Label>
            <Textarea
              id="long_description"
              rows={4}
              value={formData.long_description}
              onChange={(e) => setFormData({ ...formData, long_description: e.target.value })}
              placeholder="Detailed description shown on the project page"
            />
          </div>

          <TechStackSelector
            value={formData.techStack}
            onChange={(techs) => setFormData({ ...formData, techStack: techs })}
          />

          <div className="grid gap-2">
            <Label htmlFor="preview_image">Preview Image URL</Label>
            <Input
              id="preview_image"
              type="url"
              value={formData.preview_image}
              onChange={(e) => setFormData({ ...formData, preview_image: e.target.value })}
              placeholder="https://example.com/image.png"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="file_url">Download File URL *</Label>
            <Input
              id="file_url"
              type="url"
              required
              value={formData.file_url}
              onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
              placeholder="https://example.com/project.zip"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {project ? 'Save Changes' : 'Create Project'}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
