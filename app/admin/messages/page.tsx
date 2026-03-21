'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { AlertCircle, Download, Mail, RefreshCw, X } from 'lucide-react';

import { EmailMessage, PriorityFilter, SortOption, StatusFilter } from '@/app/types';

// import { PriorityIcon } from '@/components/priority-icon'
import { createClient } from '@/lib/supabase/client';
import { getPriorityColor } from '@/lib/utils/priority';

import { useToast } from '@/hooks/use-toast';

import { PageHeader } from '@/components/layout/page-header';
import { MessageCard } from '@/components/messages/message-card';
import { PaginationControls, ResultsSummary } from '@/components/shared/pagination';
import { SearchBar } from '@/components/shared/search/search-bar';
import { Button, StatusDot } from '@/components/ui';

import { STATUS_COLORS } from '@/constants/colors';
import { MESSAGE_STATUS_OPTIONS } from '@/constants/filters';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<EmailMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<EmailMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters & State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedMessages, setSelectedMessages] = useState<Set<string>>(new Set());

  const { toast } = useToast();

  // Fetch messages
  useEffect(() => {
    loadMessages();
  }, []);

  // Filter and sort messages
  useEffect(() => {
    filterAndSortMessages();
  }, [messages, searchTerm, statusFilter, priorityFilter, sortBy]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, priorityFilter, sortBy]);

  const loadMessages = async () => {
    const supabase = createClient();

    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('emails')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setMessages(data || []);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || 'Failed to load messages');
      }
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortMessages = useCallback(() => {
    let filtered = [...messages];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(msg =>
        // msg.name.toLowerCase().includes(term) ||
        msg.from_email.toLowerCase().includes(term) ||
        msg.subject.toLowerCase().includes(term) ||
        msg.html_body.toLowerCase().includes(term),
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(msg => msg.status === statusFilter);
    }

    // Apply priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(msg => msg.priority === priorityFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'name':
          return 0; // a.name.localeCompare(b.name);
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1, all: 0 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        default:
          return 0;
      }
    });

    setFilteredMessages(filtered);
  }, [messages, searchTerm, statusFilter, priorityFilter, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMessages = filteredMessages.slice(startIndex, endIndex);

  // Update status
  const updateStatus = async (id: string, newStatus: EmailMessage['status']) => {
    const supabase = createClient();

    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({
          status: newStatus,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg =>
        msg.id === id ? { ...msg, status: newStatus, updated_at: new Date().toISOString() } : msg,
      ));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Update priority
  const updatePriority = async (id: string, priority: EmailMessage['priority']) => {
    const supabase = createClient();

    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({
          priority,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg =>
        msg.id === id ? { ...msg, priority, updated_at: new Date().toISOString() } : msg,
      ));
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  };

  const deleteMessage = async (id: string) : Promise<void> => {
    const supabase = createClient();

    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('emails')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Database delete error:', error);
        toast({
          title: 'Error',
          variant: 'destructive',
          description: 'Could not delete message.',
        });

        return;
      }

      toast({
        title: 'Success',
        variant: 'success',
        description: 'Message deleted.',
      });

      // Refresh the list
      loadMessages();

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Deleted failed:', error.message);
        toast({
          title: 'Error',
          variant: 'destructive',
          description: 'Failed to delete message.',
        });
      }
    }
  };

  // Bulk actions
  const bulkUpdateStatus = async (status: EmailMessage['status']) => {
    const supabase = createClient();
    const ids = Array.from(selectedMessages);

    if (ids.length === 0) return;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({
          status,
          updated_at: new Date().toISOString(),
        })
        .in('id', ids);

      if (error) throw error;

      setMessages(messages.map(msg =>
        ids.includes(msg.id) ? { ...msg, status, updated_at: new Date().toISOString() } : msg,
      ));

      setSelectedMessages(new Set());
    } catch (error) {
      console.error('Error in bulk update:', error);
    }
  };

  // Selection handlers
  const toggleSelectMessage = (id: string) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedMessages(newSelected);
  };

  const selectAllOnPage = () => {
    const pageIds = paginatedMessages.map(msg => msg.id);
    const newSelected = new Set(selectedMessages);

    // If all page messages are already selected, deselect them
    const allSelected = pageIds.every(id => newSelected.has(id));
    if (allSelected) {
      pageIds.forEach(id => newSelected.delete(id));
    } else {
      pageIds.forEach(id => newSelected.add(id));
    }

    setSelectedMessages(newSelected);
  };

  const clearSelection = () => {
    setSelectedMessages(new Set());
  };

  // Export functionality
  const exportMessages = () => {
    const dataToExport = selectedMessages.size > 0
      ? messages.filter(msg => selectedMessages.has(msg.id))
      : filteredMessages;

    try {
      if (dataToExport.length === 0) {
        toast({
          title: 'Export Failed',
          variant: 'destructive',
          description: 'No messages to export.',
        });
        return;
      }

      // Generate CSV content
      const csvContent = [
        ['Name', 'Email', 'Subject', 'Message', 'Status', 'Priority', 'Date'].join(','),
        ...dataToExport.map(msg => [
          // `"${msg.name}"`,
          `"${msg.from_email}"`,
          `"${msg.subject}"`,
          // `"${msg.html_body.replace(/"/g, '""')}"`,
          msg.status,
          msg.priority,
          new Date(msg.created_at).toLocaleDateString(),
        ].join(',')),
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contact-messages-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);

      toast({
        title: 'Export Successful',
        variant: 'success',
        description: `Exported ${dataToExport.length} message${dataToExport.length !== 1 ? 's' : ''} to CSV`,
      });
      // setSelectedMessages(new Set())
    } catch (error) {
      console.error('Export failed:', error);

      toast({
        title: 'Export Failed',
        variant: 'destructive',
        description: 'Failed to export messages. Please try again later.',
      });
    }
  };

  const getStatusColor = (status: StatusFilter): string => {
    if (status === 'all') return '';

    const color = STATUS_COLORS[status as keyof typeof STATUS_COLORS];

    if (!color) {
      // console.warn(`Unknown status "${status}", using default color`);
      return 'bg-gray-100 text-gray-800 border border-gray-300';
    }

    return `${color.bg} ${color.text} border ${color.border}`;
  };

  // const getPriorityIcon = (priority: EmailMessage['priority']) => {
  //   return <PriorityIcon priority={priority} />
  // }

  const statusCounts = useMemo(() => {
    const counts = { all: messages.length, new: 0, read: 0, replied: 0, archived: 0 };
    messages.forEach(msg => counts[msg.status]++);
    return counts;
  }, [messages]);

  return (
    <div className="relative min-h-screen flex flex-col pt-32 overflow-hidden">
      <div className="mb-8">
        {/* Hero Header */}
        <PageHeader
          title="Contact Messages"
          description="Manage and respond to contact form submissions."
          actions={
            <div className="flex flex-wrap items-center gap-3">
              {selectedMessages.size > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                  <span className="font-medium">{selectedMessages.size}</span>
                  <span>selected</span>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearSelection}
                  >
                    <X className="h-4 w-4 text-blue-700" />
                  </Button>
                </div>
              )}

              <Button
                variant="outline"
                onClick={exportMessages}
              >
                <Download className="h-4 w-4" />
                Export {selectedMessages.size > 0 ? `(${selectedMessages.size})` : ''}
              </Button>

              <Button
                variant="outline"
                onClick={loadMessages}
                disabled={loading}
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          }
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {MESSAGE_STATUS_OPTIONS.map((status) => {
            const dotColor = STATUS_COLORS[status as keyof typeof STATUS_COLORS]?.dot;

            return (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-md ${
                  statusFilter === status
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900">{statusCounts[status]}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <span className="capitalize">{status} Messages</span>
                  {status !== 'all' && <StatusDot color={dotColor} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search and Filters */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        selectedCount={selectedMessages.size}
        filteredCount={filteredMessages.length}
        onBulkMarkAsRead={() => bulkUpdateStatus('read')}
        onBulkMarkAsReplied={() => bulkUpdateStatus('replied')}
        onBulkArchive={() => bulkUpdateStatus('archived')}
        onExportToCSV={exportMessages}
        onClearFilters={() => {
          setSearchTerm('');
          setStatusFilter('all');
          setPriorityFilter('all');
          setSortBy('newest');
        }}
      />

      <div className="py-4">
        <ResultsSummary
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={filteredMessages.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          searchTerm={searchTerm}
        />
      </div>

      {/* Messages List */}
      {loading ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading messages...</p>
        </div>
      ) : filteredMessages.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No messages found</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            {searchTerm || statusFilter !== 'all' || priorityFilter !== 'all'
              ? 'No messages match your current filters. Try adjusting your search criteria.'
              : 'No contact messages have been submitted yet.'}
          </p>
          {(searchTerm || statusFilter !== 'all' || priorityFilter !== 'all') && (
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
                setPriorityFilter('all');
              }}
              className="px-4 py-2 text-blue-600 hover:text-blue-800"
            >
              Clear all filters
            </Button>
          )}
        </div>
      ) : (
        <>
          {/* Messages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {paginatedMessages.map((item) => (
              <MessageCard
                key={item.id}
                message={item}
                isSelected={selectedMessages.has(item.id)}
                onToggleSelect={() => toggleSelectMessage(item.id)}
                onUpdateStatus={updateStatus}
                onUpdatePriority={updatePriority}
                onDeleteMessage={deleteMessage}
                getStatusColor={getStatusColor}
                getPriorityColor={getPriorityColor}
                // getPriorityIcon={getPriorityIcon}
              />
            ))}
          </div>

          {/* Pagination */}
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showSelectAll={true}
            onSelectAll={selectAllOnPage}
            isAllSelected={paginatedMessages.length > 0 && paginatedMessages.every(msg => selectedMessages.has(msg.id))}
          />
        </>
      )}

      {/* Error Display */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex flex-col items-start gap-3">
            <div className="flex text-red-800">
              <div className="flex flex-col space-y-4">
                <h3 className="text-md font-semibold inline-flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Error loading messages
                </h3>
                <p className="ml-1">{error}</p>
                <Button
                  variant="outline"
                  onClick={loadMessages}
                >
                  Try again
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
