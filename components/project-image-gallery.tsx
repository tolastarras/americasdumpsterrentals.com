'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

import { cn } from '@/lib/utils/class-names';

import { Button } from '@/components/ui';

interface ProjectImageGalleryProps {
  mainImage: string
  title: string
  category: string
}

// Generate gallery images based on category
function getGalleryImages(category: string, mainImage: string) {
  const categoryImages: Record<string, string[]> = {
    web: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    ],
    mobile: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80',
      'https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=800&q=80',
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80',
    ],
    ai: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    ],
    api: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    ],
  };

  const images = categoryImages[category.toLowerCase()] || categoryImages.web;
  return [mainImage, ...images];
}

export function ProjectImageGallery({ mainImage, title, category }: ProjectImageGalleryProps) {
  const images = getGalleryImages(category, mainImage);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative group">
          <div className="aspect-video relative rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 to-cyan-500/20 p-1">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-background">
              <Image
                src={images[selectedIndex] || '/placeholder.svg'}
                alt={`${title} - View ${selectedIndex + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                onClick={goToNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Fullscreen button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                onClick={() => setIsFullscreen(true)}
              >
                <Expand className="h-5 w-5" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto p-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300',
                'ring-2 ring-offset-2 ring-offset-background',
                selectedIndex === index
                  ? 'ring-primary scale-105 shadow-lg shadow-primary/25'
                  : 'ring-transparent hover:ring-primary/50 opacity-60 hover:opacity-100',
              )}
            >
              <Image
                src={image || '/placeholder.svg'}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {selectedIndex === index && <div className="absolute inset-0 bg-primary/10" />}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4">
            <Image
              src={images[selectedIndex] || '/placeholder.svg'}
              alt={`${title} - View ${selectedIndex + 1}`}
              fill
              className="object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              className="absolute top-4 right-4 bg-transparent"
              onClick={() => setIsFullscreen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
