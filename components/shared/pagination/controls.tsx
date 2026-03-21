import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui';

// Pagination Controls Component
interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showSelectAll?: boolean
  onSelectAll?: () => void
  isAllSelected?: boolean
  className?: string
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  showSelectAll = false,
  onSelectAll,
  isAllSelected = false,
  className = '',
}: PaginationControlsProps) => {
  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= maxVisiblePages - 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages.map((page, index) => {
      if (page === '...') {
        return (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        );
      }

      return (
        <Button
          key={page}
          onClick={() => onPageChange(page as number)}
          variant={currentPage === page ? 'default' : 'outline'}
          className="w-9 h-9"
        >
          {page}
        </Button>
      );
    });
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-4 px-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {showSelectAll && onSelectAll && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={onSelectAll}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">
              Select all on page
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {renderPageNumbers()}
          </div>

          <Button
            variant="outline"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
