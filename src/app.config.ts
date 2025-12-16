// RESEND EMAIL CONSTANTES
export const NEXT_API_URL = '/api/send';
export const EMAIL_TO = process.env.RESEND_EMAIL_TO as string;
export const EMAIL_FROM = process.env.RESEND_EMAIL_FROM as string;
export const EMAIL_SUBJECT = 'First contact by a visitor';
