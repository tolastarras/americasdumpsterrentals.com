import { useState } from 'react';

import { Check, Code2, Database, Globe, MonitorSmartphone, Palette, PanelsTopLeft, Search, Server, Sparkles, X } from 'lucide-react';

import { Badge } from '@/components/ui';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

import { TECH_CATEGORIES } from '@/constants/categories';

interface TechStackSelectorProps {
  value: string[]
  onChange: (techs: string[]) => void
}

export function TechStackSelector({ value = [], onChange }: TechStackSelectorProps) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(true);

  // Get selected tech per category
  const getSelectedTechForCategory = (categoryId: string) => {
    const category = TECH_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return null;
    return value.find(tech => category.options.some(option => option === tech));
  };

  const handleTechSelect = (tech: string, categoryId: string) => {
    const category = TECH_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;

    const otherTechs = value.filter(t =>
      !category.options.some(option => option === t),
    );

    // If already selected, deselect it (toggle off)
    if (value.includes(tech)) {
      onChange(otherTechs);
    } else {
      // Select new tech (replace any existing in same category)
      onChange([...otherTechs, tech]);
    }
  };

  // Filter categories based on search
  const filteredCategories = TECH_CATEGORIES.map(category => ({
    ...category,
    options: category.options.filter(tech =>
      tech.toLowerCase().includes(search.toLowerCase()) ||
      category.label.toLowerCase().includes(search.toLowerCase()),
    ),
  })).filter(category => category.options.length > 0);

  return (
    <div className="space-y-3">
      {/* Selected Techs Preview */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tech) => {
          // Fix: Add type assertion
          const category = TECH_CATEGORIES.find(c =>
            (c.options as readonly string[]).includes(tech),
          );

          return (
            <Badge
              key={tech}
              variant="secondary"
              className={`
                gap-1.5 pl-3 pr-2 py-1.5 text-sm font-medium group
                ${category?.id === 'frontend' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                ${category?.id === 'backend' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                ${category?.id === 'styling' ? 'bg-purple-50 text-purple-700 border-purple-200' : ''}
                ${category?.id === 'database' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
                ${category?.id === 'devops' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                ${category?.id === 'domains' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                ${category?.id === 'platforms' ? 'bg-pink-50 text-pink-700 border-pink-200' : ''}
              `}
            >
              {tech}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(value.filter(t => t !== tech));
                }}
                className="ml-1 rounded-full p-0.5 hover:bg-muted transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          );
        })}
        </div>
      )}

      {/* Enhanced Command Component */}
      <div className="relative">
        <Command className="border rounded-lg shadow-sm max-h-84">
          <div className="flex items-center border-b py-2">
            <CommandInput
              placeholder="Search technologies or categories..."
              value={search}
              onValueChange={setSearch}
              className="font-semibold focus:ring-0 focus-visible:ring-0"
              onFocus={() => setOpen(true)}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="ml-2 rounded-full p-1 hover:bg-muted"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {open && (
            <CommandList className="max-h-100 overflow-y-auto">
              <CommandEmpty className="flex flex-col items-center justify-center py-8 text-center">
                <Search className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No technologies found</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try a different search term
                </p>
              </CommandEmpty>

              {filteredCategories.map((category) => {
                const selectedTech = getSelectedTechForCategory(category.id);

                return (
                  <CommandGroup
                    key={category.id}
                    heading={
                      <div className={`
                        flex items-center gap-3 px-3 py-3 rounded-md mb-1
                        ${category.id === 'frontend' ? 'bg-blue-50 border border-blue-100' : ''}
                        ${category.id === 'backend' ? 'bg-green-50 border border-green-100' : ''}
                        ${category.id === 'styling' ? 'bg-purple-50 border border-purple-100' : ''}
                        ${category.id === 'database' ? 'bg-orange-50 border border-orange-100' : ''}
                        ${category.id === 'devops' ? 'bg-red-50 border border-red-100' : ''}
                        ${category?.id === 'domains' ? 'bg-yellow-50 border border-yellow-100' : ''}
                        ${category?.id === 'platforms' ? 'bg-pink-50 border border-pink-100' : ''}
                      `}>
                        {category.id === 'frontend' && <PanelsTopLeft className="h-4 w-4 text-blue-800" />}
                        {category.id === 'backend' && <Code2 className="h-4 w-4 text-green-800" />}
                        {category.id === 'styling' && <Palette className="h-4 w-4 text-purple-800" />}
                        {category.id === 'database' && <Database className="h-4 w-4 text-orange-800" />}
                        {category.id === 'devops' && <Server className="h-4 w-4 text-red-800" />}
                        {category.id === 'domains' && <Globe className="h-4 w-4 text-yellow-800" />}
                        {category.id === 'platforms' && <MonitorSmartphone className="h-4 w-4 text-pink-800" />}

                        <span className={`
                          font-bold text-sm
                          ${category.id === 'frontend' ? 'text-blue-800' : ''}
                          ${category.id === 'backend' ? 'text-green-800' : ''}
                          ${category.id === 'styling' ? 'text-purple-800' : ''}
                          ${category.id === 'database' ? 'text-orange-800' : ''}
                          ${category.id === 'devops' ? 'text-red-800' : ''}
                          ${category.id === 'domains' ? 'text-yellow-800' : ''}
                          ${category.id === 'platforms' ? 'text-pink-800' : ''}
                        `}>
                          {category.label}
                        </span>
                        {selectedTech && (
                          <Badge
                            variant="outline"
                            className={`
                              ml-auto text-xs
                              ${category.id === 'frontend' ? 'border-blue-300 text-blue-700' : ''}
                              ${category.id === 'backend' ? 'border-green-300 text-green-700' : ''}
                              ${category.id === 'styling' ? 'border-purple-300 text-purple-700' : ''}
                              ${category.id === 'database' ? 'border-orange-300 text-orange-700' : ''}
                              ${category.id === 'devops' ? 'border-red-300 text-red-700' : ''}
                              ${category.id === 'domains' ? 'border-yellow-300 text-yellow-700' : ''}
                              ${category.id === 'platforms' ? 'border-pink-300 text-pink-700' : ''}
                            `}
                          >
                            Selected: {selectedTech}
                          </Badge>
                        )}
                      </div>
                    }
                    className="**:[[cmdk-group-heading]]:px-0 **:[[cmdk-group-heading]]:py-0"
                  >
                    {category.options.map((tech) => {
                      const isSelected = value.includes(tech);
                      return (
                        <CommandItem
                          key={tech}
                          value={tech}
                          onSelect={() => handleTechSelect(tech, category.id)}
                          className={`
                            flex items-center justify-between px-4 py-2.5 mx-2 mb-1
                            cursor-pointer rounded-md transition-colors
                            ${isSelected
                              ? category.id === 'frontend' ? 'bg-blue-100 text-blue-900 border border-blue-200' :
                                category.id === 'backend' ? 'bg-green-100 text-green-900 border border-green-200' :
                                category.id === 'styling' ? 'bg-purple-100 text-purple-900 border border-purple-200' :
                                category.id === 'database' ? 'bg-orange-100 text-orange-900 border border-orange-200' :
                                category.id === 'devops' ? 'bg-red-300 text-red-900 border border-red-200' :
                                category.id === 'domains' ? 'bg-yellow-300 text-yellow-900 border border-yellow-200' :
                                category.id === 'platforms' ? 'bg-pink-300 text-pink-900 border border-pink-200' :
                                'bg-red-100 text-red-900 border border-red-200'
                              : 'hover:bg-accent'
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            {/* Radio button */}
                            <div className={`
                              flex h-3 w-3 items-center justify-center rounded-full border-2
                              ${isSelected
                                ? category.id === 'frontend' ? 'border-blue-600 bg-blue-600' :
                                  category.id === 'backend' ? 'border-green-600 bg-green-600' :
                                  category.id === 'styling' ? 'border-purple-600 bg-purple-600' :
                                  category.id === 'database' ? 'border-orange-600 bg-orange-600' :
                                  category.id === 'devops' ? 'border-red-600 text-red-600' :
                                  category.id === 'domains' ? 'border-yellow-600 text-yellow-600' :
                                  category.id === 'platforms' ? 'border-pink-600 text-pink-600' :
                                  'border-red-600 bg-red-600'
                                : 'border-muted'
                              }
                            `}>
                              {isSelected && (
                                <div className="h-2 w-2 rounded-full bg-white" />
                              )}
                            </div>
                            <span className={`font-medium ${isSelected ? 'font-semibold' : ''}`}>
                              {tech}
                            </span>
                          </div>

                          {isSelected && (
                            <Check className={`
                              h-4 w-4
                              ${category.id === 'frontend' ? 'text-blue-600' : ''}
                              ${category.id === 'backend' ? 'text-green-600' : ''}
                              ${category.id === 'styling' ? 'text-purple-600' : ''}
                              ${category.id === 'database' ? 'text-orange-600' : ''}
                              ${category.id === 'devops' ? 'text-red-600' : ''}
                              ${category.id === 'devops' ? 'text-red-600' : ''}
                              ${category.id === 'domains' ? 'text-yellow-600' : ''}
                              ${category.id === 'platforms' ? 'text-pink-600' : ''}
                            `} />
                          )}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                );
              })}
            </CommandList>
          )}
        </Command>

        {/* Quick Stats */}
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground px-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
              {value.length} selected ({TECH_CATEGORIES.length} categories)
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              {TECH_CATEGORIES.reduce((acc, cat) => acc + cat.options.length, 0)} total options
            </span>
          </div>
          {value.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
