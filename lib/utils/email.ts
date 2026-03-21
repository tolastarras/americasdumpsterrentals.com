/**
 * Escape HTML for safe email display
 * Use this when inserting text into email HTML templates
 */
export const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

/**
 * Format message for email with preserved paragraphs
 * Converts newlines to <br> tags for HTML email display
 */
export const textToHtml = (text: string): string =>
  escapeHtml(text).replace(/\n/g, '<br>');
