import { useState } from 'react';
import Link from 'next/link';

import DOMPurify from 'dompurify';
import { Calendar, Copy, Eye, Mail, Paperclip, Send, Trash2, User } from 'lucide-react';

import { EmailMessage } from '@/app/types';

import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui';

// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sendReplyAction } from '@/app/actions/send-reply';
// import { MESSAGE_STATUS_OPTIONS } from '@/constants';

interface MessageCardProps {
  message: EmailMessage
  isSelected: boolean
  onToggleSelect: () => void
  onUpdateStatus: (id: string, status: EmailMessage['status']) => void
  onUpdatePriority: (id: string, priority: EmailMessage['priority']) => void
  onDeleteMessage: (id: string) => Promise<void>
  getStatusColor: (status: EmailMessage['status']) => string
  getPriorityColor: (priority: EmailMessage['priority']) => string
  // getPriorityIcon: (priority: ContactMessage['priority']) => React.ReactElement
}

export function MessageCard({
  message,
  isSelected,
  onToggleSelect,
  onUpdateStatus,
  // onUpdatePriority,
  onDeleteMessage,
  // getStatusColor,
  // getPriorityColor,
  // getPriorityIcon
}: MessageCardProps) {
  const { toast } = useToast();
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const {
    id: messageId,
    created_at,
    status,
    // priority,
    from_email,
    subject,
    html_body,
    attachments,
  } = message;

  const sanitizedHtml = DOMPurify.sanitize(html_body);

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setIsSending(true);

    try {
      const html = `<p>${replyText.replace(/\n/g, '<br>')}</p>`;
      const result = await sendReplyAction({
        to: message.from_email,
        subject: message.subject,
        replyBody: html,
        messageId: message.id, // make sure this exists
      });

      if (!result.success) throw new Error(result.error);

      toast({ title: 'Reply sent!', variant: 'success' });
      setShowReplyModal(false);
      setReplyText('');
    } catch (error) {
      toast({ title: 'Failed to send reply', description: String(error), variant: 'destructive' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div
        className={`bg-white rounded-xl border transition-all duration-200 hover:shadow-md overflow-hidden ${
          isSelected
            ? 'border-blue-500 ring-2 ring-blue-200'
            : 'border-gray-200'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={onToggleSelect}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <div className="text-sm text-muted-foreground flex items-center gap-1 mr-2">
                <Calendar className="h-3 w-3" />
                {new Date(created_at).toLocaleDateString()}
              </div>
              {/* <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(status)}`}>
                {status}
              </div> */}
              {/* <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${getPriorityColor(priority)}`}>
                {message?.priority && (
                  <>
                    {priority}
                  </>
                )}
              </div> */}
            </div>

            <div className="relative">
              <div className="flex items-center gap-2">
                {/* <Select
                  value={status}
                  onValueChange={(value) => onUpdateStatus(messageId, value as EmailMessage['status'])}
                >
                  <SelectTrigger
                    size="sm"
                    className="text-sm border border-gray-300 rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {MESSAGE_STATUS_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        <span className="capitalize">{option}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select> */}
                {/* <div className="relative group">
                  <Button variant="ghost" className="p-1.5">
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <Button
                      variant="ghost"
                      onClick={() => onUpdatePriority(messageId, priority === 'high' ? 'low' : 'high')}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                    >
                      {priority === 'high' ? 'Set low priority' : 'Set high priority'}
                    </Button>
                  </div>
                </div> */}
                {attachments && attachments.length > 0 && (
                  <Paperclip className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>

          {/* Sender Info */}
          <div>
            <h3 className="text-lg mt-4 mb-2 font-semibold text-gray-900 truncate">{subject}</h3>
            <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-gray-900 truncate">Unknown</div>
                <div className="text-sm text-gray-600 truncate">{from_email}</div>
              </div>
            </div>
          </div>

          {/* Message Preview */}
          <div
            className="prose prose-sm max-w-none h-24 md:h-20 overflow-y-auto text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
            <Button asChild className="md:hidden">
              <Link href={`mailto:${from_email}?subject=Re: ${encodeURIComponent(subject)}`}>
                <Mail className="h-4 w-4" />
                Reply via Email
              </Link>
            </Button>

            {/* In‑app reply – visible on medium and larger screens */}
            <Button
              onClick={() => setShowReplyModal(true)}
              className="hidden md:inline-flex"
            >
              <Send className="h-4 w-4 mr-2" />
              Reply
            </Button>
            <Button
              variant="outline"
              onClick={() => navigator.clipboard.writeText(from_email)}
            >
              <Copy className="h-4 w-4" />
              Copy Email
            </Button>
            <Button
              variant="outline"
              onClick={() => navigator.clipboard.writeText(html_body)}
            >
              <Copy className="h-4 w-4" />
              Copy Message
            </Button>
            {status === 'new' && (
              <Button
                variant="outline"
                onClick={() => onUpdateStatus(messageId, 'read')}
              >
              <Eye className="h-4 w-4" />
                Mark as Read
              </Button>
            )}
            <Button
              variant="destructive"
              onClick={() => onDeleteMessage(messageId)}
            >
            <Trash2 className="h-4 w-4" />
              Delete Message
            </Button>
          </div>
        </div>
      </div>

      {showReplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <h1 className="text-lg font-semibold">Re: {message.subject}</h1>
            <h2 className="text-foreground mb-4">From: {message.from_email}</h2>
            <form onSubmit={handleReplySubmit}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full h-32 p-2 border rounded-md"
                placeholder="Write your reply..."
                required
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowReplyModal(false)}
                  className="px-4 py-2 border rounded-md"
                  disabled={isSending}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSending || !replyText.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
                >
                  {isSending ? 'Sending...' : 'Send Reply'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
