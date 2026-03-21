import { Archive, Eye, FileSpreadsheet, MailOpen } from 'lucide-react';

import { BulkActionHandlers } from '@/app/types';

import { Button } from '@/components/ui';

interface BulkActionsProps extends BulkActionHandlers {
  selectedCount: number
  filteredCount: number
  setShowBulkActions: (show: boolean) => void
}

export const BulkActions = ({
  setShowBulkActions,
  onBulkMarkAsRead,
  onBulkMarkAsReplied,
  onBulkArchive,
  onExportToCSV,
  selectedCount,
  filteredCount,
}: BulkActionsProps) => {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="py-1">
        {onBulkMarkAsRead && (
          <Button
            variant="ghost"
            onClick={() => {
              onBulkMarkAsRead();
              setShowBulkActions(false);
            }}
            className="w-full text-left px-4 py-3 gap-3 border-b border-gray-100"
          >
            <Eye className="h-4 w-4" />
            <div className="flex-1">
              <div className="font-medium">Mark as read</div>
              <div className="text-xs text-gray-500">Change status to "read"</div>
            </div>
          </Button>
        )}
        {onBulkMarkAsReplied && (
          <Button
            variant="ghost"
            onClick={() => {
              onBulkMarkAsReplied();
              setShowBulkActions(false);
            }}
            className="w-full text-left px-4 py-3 gap-3 border-b border-gray-100"
          >
            <MailOpen className="h-4 w-4" />
            <div className="flex-1">
              <div className="font-medium">Mark as replied</div>
              <div className="text-xs text-gray-500">Change status to "replied"</div>
            </div>
          </Button>
        )}
        {onBulkArchive && (
          <Button
            variant="ghost"
            onClick={() => {
              onBulkArchive();
              setShowBulkActions(false);
            }}
            className="w-full text-left px-4 py-3 gap-3 border-b border-gray-100"
          >
            <Archive className="h-4 w-4" />
            <div className="flex-1">
              <div className="font-medium">Archive</div>
              <div className="text-xs text-gray-500">Move to archived messages</div>
            </div>
          </Button>
        )}
        {onExportToCSV && (
          <Button
            variant="ghost"
            onClick={() => {
              onExportToCSV('selected');
              setShowBulkActions(false);
            }}
            className="w-full text-left px-4 py-3 gap-3"
          >
            <FileSpreadsheet className="h-4 w-4" />
            <div className="flex-1">
              <div className="font-medium">Export to CSV</div>
              <div className="text-xs text-gray-500">
                Export {selectedCount} of {filteredCount} messages
              </div>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};
