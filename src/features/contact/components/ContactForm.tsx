'use client';
import { Button } from '@/src/components/ui/button';
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from '@/src/components/ui/field';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Form } from '../../../components/ui/form';
import {
	ContactFormSchema,
	contactFormSchema,
} from '../schema/contactFormSchema';

type ContactFormProps = {
	isLoading: boolean;
	onSubmitContactForm: (values: ContactFormSchema) => void;
};

export const ContactForm = ({
	isLoading,
	onSubmitContactForm,
}: ContactFormProps) => {
	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(contactFormSchema),
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmitContactForm)}
				className='space-y-8 max-w-3xl mx-auto py-10'
			>
				<Field>
					<FieldLabel htmlFor='contact_email'>Votre Email</FieldLabel>
					<Input
						id='contact_email'
						placeholder='Email'
						{...form.register('contact_email')}
					/>
					<FieldDescription>
						Adresse email sur laquelle vous souhaitez etre contacté
					</FieldDescription>
					<FieldError>
						{form.formState.errors.contact_email?.message}
					</FieldError>
				</Field>
				<Field>
					<FieldLabel htmlFor='contact_name'>Votre nom</FieldLabel>
					<Input
						id='contact_name'
						placeholder='Nom'
						{...form.register('contact_name')}
					/>

					<FieldError>
						{form.formState.errors.contact_name?.message}
					</FieldError>
				</Field>
				<Field>
					<FieldLabel htmlFor='contact_nickname'>
						Votre prénom
					</FieldLabel>
					<Input
						id='contact_nickname'
						placeholder='Prénom'
						{...form.register('contact_nickname')}
					/>

					<FieldError>
						{form.formState.errors.contact_nickname?.message}
					</FieldError>
				</Field>
				<Field>
					<FieldLabel htmlFor='contact_nom_entreprise'>
						Entreprise
					</FieldLabel>
					<Input
						id='contact_nom_entreprise'
						placeholder='Entreprise'
						{...form.register('contact_nom_entreprise')}
					/>
					<FieldDescription>
						Le nom de votre entreprise
					</FieldDescription>
					<FieldError>
						{form.formState.errors.contact_nom_entreprise?.message}
					</FieldError>
				</Field>
				<Field>
					<FieldLabel htmlFor='contact_subject'>
						Sujet de la demande
					</FieldLabel>
					<Textarea
						id='contact_subject'
						placeholder='Sujet'
						{...form.register('contact_subject')}
					/>
					<FieldDescription>Formulez votre demande</FieldDescription>
					<FieldError>
						{form.formState.errors.contact_subject?.message}
					</FieldError>
				</Field>
				<Button type='submit' disabled={isLoading}>
					{isLoading ? (
						<LoaderCircle className='w-4 h-4 animate-spin' />
					) : (
						'Envoyer'
					)}
				</Button>
			</form>
		</Form>
	);
};
