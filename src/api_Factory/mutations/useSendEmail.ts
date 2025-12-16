import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { mutationService } from '../mutationServices';

type SendEmailPayload = {
	email: string;
	firstName: string;
	lastName: string;
	companyName: string;
	subject: string;
};

export const useSendEmail = () => {
	const mutation = useMutation({
		mutationFn: (payload: SendEmailPayload) => {
			return mutationService.sendEmail(payload);
		},

		onSuccess: async () => {
			toast.success('Email sent successfully');
		},

		onError: (error) => {
			console.log('error', error);
			toast.error('Email not sent');
		},
	});

	return {
		sendEmail: mutation,
		sendEmailIsLoading: mutation.isPending,
	};
};
