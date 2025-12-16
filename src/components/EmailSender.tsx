'use client';

import { useSendEmail } from '../api_Factory/mutations/useSendEmail';
import { ContactForm } from '../features/contact/components/ContactForm';
import { ContactFormSchema } from '../features/contact/schema/contactFormSchema';

export const EmailSender = () => {
	const { sendEmail, sendEmailIsLoading } = useSendEmail();

	const handleSendEmail = (values: ContactFormSchema) => {
		console.log(values);
		/* sendEmail.mutate({
			email: values.contact_email,
			firstName: values.contact_name,
			lastName: values.contact_nickname || '',
			companyName: values.contact_nom_entreprise || '',
			subject: values.contact_subject,
		}); */
	};
	return (
		<ContactForm
			isLoading={sendEmailIsLoading}
			onSubmitContactForm={handleSendEmail}
		/>
	);
};
