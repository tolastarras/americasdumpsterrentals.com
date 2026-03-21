'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { PaginationControls } from './controls';

// Shared interface
interface PaginationBaseProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  itemsPerPageOptions?: number[];
}

// Results Summary Component
interface ResultsSummaryProps {
  startIndex: number;
  endIndex: number;
  totalItems: number;
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
  itemsPerPageOptions?: number[];
  searchTerm?: string;
}

const ResultsSummary = ({
  startIndex,
  endIndex,
  totalItems,
  itemsPerPage,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100],
  searchTerm,
}: ResultsSummaryProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="text-sm text-gray-600">
        {totalItems > 0 ? (
          <>
            Showing{' '}
            <span className="font-semibold">
              {/* If your pagination uses zero‑based startIndex, keep +1; if one‑based, remove +1 */}
              {startIndex + 1}–{Math.min(endIndex, totalItems)}
            </span>{' '}
            of <span className="font-semibold">{totalItems}</span> item{totalItems > 1 && 's'}
          </>
        ) : (
          <span className="font-semibold">0 items</span>
        )}
        {searchTerm && (
          <span className="ml-2">
            • Searching for "<span className="font-medium">{searchTerm}</span>"
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => onItemsPerPageChange(Number(value))}
          >
            <SelectTrigger size="sm">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {itemsPerPageOptions.map((option) => (
                <SelectItem key={option} value={option.toString()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-gray-600">per page</span>
        </div>
      </div>
    </div>
  );
};

// Original combined component (for backward compatibility)
export default function Pagination(
  props: PaginationBaseProps & {
    showSelectAll?: boolean;
    onSelectAll?: () => void;
    isAllSelected?: boolean;
    searchTerm?: string;
  },
) {
  const {
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    onItemsPerPageChange,
    totalItems,
    startIndex,
    endIndex,
    showSelectAll,
    onSelectAll,
    isAllSelected,
    itemsPerPageOptions,
    searchTerm,
  } = props;

  return (
    <div className="flex flex-col gap-4">
      <ResultsSummary
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        itemsPerPageOptions={itemsPerPageOptions}
        searchTerm={searchTerm}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showSelectAll={showSelectAll}
        onSelectAll={onSelectAll}
        isAllSelected={isAllSelected}
      />
    </div>
  );
}

export { PaginationControls, ResultsSummary };
