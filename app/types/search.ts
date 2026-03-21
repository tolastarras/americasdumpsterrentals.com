export interface BulkActionHandlers {
  onBulkMarkAsRead?: () => void;
  onBulkMarkAsReplied?: () => void;
  onBulkArchive?: () => void;
  onExportToCSV?: (type: 'all' | 'selected') => void
}
