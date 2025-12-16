import { z } from 'zod';

export const contactFormSchema = z.object({
	contact_email: z.email(),
	contact_name: z.string().min(1).min(1).max(40),
	contact_nickname: z.string().min(1).min(1).max(45).optional(),
	contact_nom_entreprise: z.string().min(1).optional(),
	contact_subject: z.string().min(1).max(1000),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
