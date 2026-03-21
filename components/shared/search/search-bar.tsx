'use client';

import React, { useEffect, useRef, useState } from 'react';

import { ChevronDown, Filter, Search } from 'lucide-react';

import { BulkActionHandlers, PriorityFilter, SortOption, StatusFilter } from '@/app/types';

import { Button, Label } from '@/components/ui';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { BulkActions } from './bulk-actions';

interface SearchBarProps extends BulkActionHandlers {
  // Search props
  searchTerm: string
  setSearchTerm: (term: string) => void
  placeholder?: string

  // Filter panel props
  showFilters: boolean
  setShowFilters: (show: boolean) => void

  // Filter values with proper types
  sortBy: SortOption
  setSortBy: (value: SortOption) => void
  statusFilter: StatusFilter
  setStatusFilter: (value: StatusFilter) => void
  priorityFilter: PriorityFilter
  setPriorityFilter: (value: PriorityFilter) => void

  // Bulk actions props
  selectedCount: number
  filteredCount: number

  // Clear filters
  onClearFilters: () => void

  // UI props
  className?: string
}

export function SearchBar({
  searchTerm,
  setSearchTerm,
  placeholder = 'Search messages by name, email, subject, or content...',
  showFilters,
  setShowFilters,
  sortBy,
  setSortBy,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  selectedCount = 0,
  filteredCount = 0,
  onBulkMarkAsRead,
  onBulkMarkAsReplied,
  onBulkArchive,
  onExportToCSV,
  onClearFilters,
  className = '',
}: SearchBarProps): React.ReactElement {
  const [showBulkActions, setShowBulkActions] = useState(false);
  const bulkActionsRef = useRef<HTMLDivElement>(null);

  // Helper functions to convert string to typed values
  const handleSortChange = (value: string) => {
    setSortBy(value as SortOption);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value as StatusFilter);
  };

  const handlePriorityChange = (value: string) => {
    setPriorityFilter(value as PriorityFilter);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bulkActionsRef.current && !bulkActionsRef.current.contains(event.target as Node)) {
        setShowBulkActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleBulkActions = () => {
    setShowBulkActions(!showBulkActions);
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 mb-6 ${className}`}>
      {/* Remove overflow-hidden from here */}
      <div className="p-4">
        {/* Top Row: Search Input + Filter Toggle + Bulk Actions */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {/* Filter Toggle Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>

            {/* Bulk Actions Dropdown (only shows when items are selected) */}
            {selectedCount > 0 && (
              <div className="relative" ref={bulkActionsRef}>
                <Button
                  onClick={toggleBulkActions}
                  className="py-2.5"
                >
                  Bulk Actions ({selectedCount})
                  <ChevronDown className={`h-4 w-4 transition-transform ${showBulkActions ? 'rotate-180' : ''}`} />
                </Button>

                {/* Dropdown Menu */}
                {showBulkActions && (
                  <BulkActions
                    selectedCount={selectedCount}
                    filteredCount={filteredCount}
                    setShowBulkActions={setShowBulkActions}
                    onBulkMarkAsRead={onBulkMarkAsRead}
                    onBulkMarkAsReplied={onBulkMarkAsReplied}
                    onBulkArchive={onBulkArchive}
                    onExportToCSV={onExportToCSV}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Expanded Filter Panel */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label className="mb-2 font-medium">Sort by</Label>
                <Select
                  value={sortBy}
                  onValueChange={(value) => handleSortChange(value)}
                >
                  <SelectTrigger className="w-full text-md border border-gray-300 rounded-lg px-4 py-5 focus:ring-2 focus:ring-blue-500 outline-none">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="priority">Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 font-medium">Status</Label>
                <Select
                  value={statusFilter}
                  onValueChange={(value) => handleStatusChange(value)}
                >
                  <SelectTrigger className="w-full text-md border border-gray-300 rounded-lg px-4 py-5 focus:ring-2 focus:ring-blue-500 outline-none">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="new">New only</SelectItem>
                    <SelectItem value="read">Read only</SelectItem>
                    <SelectItem value="replied">Replied only</SelectItem>
                    <SelectItem value="archived">Archived only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 font-medium">Priority</Label>
                <Select
                  value={priorityFilter}
                  onValueChange={(value) => handlePriorityChange(value)}
                >
                  <SelectTrigger className="w-full text-md border border-gray-300 rounded-lg px-4 py-5 focus:ring-2 focus:ring-blue-500 outline-none">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="text-md" value="all">All priorities</SelectItem>
                    <SelectItem className="text-md" value="high">High priority</SelectItem>
                    <SelectItem className="text-md" value="medium">Medium priority</SelectItem>
                    <SelectItem className="text-md" value="low">Low priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end gap-2">
                <Button
                  variant="outline"
                  onClick={onClearFilters}
                  className="flex-1"
                >
                  Clear filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
