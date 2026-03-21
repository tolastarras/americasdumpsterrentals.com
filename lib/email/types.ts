export interface ReceivedEmailData {
  email_id: string;
  created_at: string;
  from: string;
  to: string[];
  bcc: string[];
  cc: string[];
  message_id: string;
  subject: string;
  attachments: {
    id: string;
    filename: string;
    content_type: string;
    content_disposition: string;
    content_id?: string;
  }[];
}
