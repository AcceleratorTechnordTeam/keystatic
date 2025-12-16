import { NEXT_API_URL } from '../app.config';

export const mutationService = {
	/* create: async (
		payload: AddNewCollectionFormSchema,
		timeout: number = 60000,
	) => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), timeout);

		const response = await fetch(CREATE_NEW_COLLECTION_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			signal: controller.signal,
		});
		clearTimeout(timeoutId);

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.detail || 'Failed to create collection');
		}
		const data = await response.json();
		return data;
	}, */

	// Upload file
	/* uploadFile: async (formData: FormData, timeout: number = 60000) => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), timeout);

		const response = await fetch(UPLOAD_FILE_URL, {
			method: 'POST',
			body: formData,
			signal: controller.signal,
		});
		clearTimeout(timeoutId);
		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.detail || 'Failed to upload file');
		}
		const data = await response.json();
		return data;
	}, */

	/* delete: async <T>(payload: T, timeout: number = 60000): Promise<void> => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), timeout);
		await fetch(DELETE_COLLECTION_URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			signal: controller.signal,
		});
		clearTimeout(timeoutId);
	}, */

	sendEmail: async <T>(payload: T): Promise<void> => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 60000);

		const response = await fetch(NEXT_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			signal: controller.signal,
		});
		clearTimeout(timeoutId);

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.detail || 'Failed to send message');
		}
		const data = await response.json();
		console.log('data', data);
		return data;
	},
};
