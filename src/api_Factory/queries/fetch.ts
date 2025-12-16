/* import { fetchWithTimeout } from '../../lib/functions/fetchWithTimeout';

export const fetchApplicationHealth = async (
	url: string,
	timeout: number = 15000,
) => {
	if (!url) throw new Error('URL is required');

	try {
		const response = await fetchWithTimeout(url, timeout);
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				errorData.detail ||
					errorData.message ||
					`HTTP ${response.status}`,
			);
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error fetching application health:', error);
		throw error;
	}
}; */
