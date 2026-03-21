import { PriorityFilter, StatusFilter } from './filter';

interface BaseMessage {
  id: string
  subject: string
  html_body: string
  text_body: string
  status: StatusFilter
  priority: PriorityFilter
  created_at: string
  updated_at: string
}

export interface ContactMessage extends BaseMessage {
  type: 'contact'
  name: string
  email: string
}

export interface EmailAttachment {
  id: string
  filename: string
  content_type: string
  content_disposition: string
  content_id?: string
  size?: number
  download_url?: string
}

export interface EmailMessage extends BaseMessage {
  type: 'email'
  from_email: string
  to_emails: string[]
  attachments?: EmailAttachment[]
}

export interface EmailMessage extends BaseMessage {
  type: 'email'
  from_email: string
  to_emails: string[]
  message_id: string
  attachments?: EmailAttachment[]
}
