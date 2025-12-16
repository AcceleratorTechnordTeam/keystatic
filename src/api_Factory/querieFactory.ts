/* import {
	MILVUS_READ_COLLECTION_KEY,
	MILVUS_READ_COLLECTION_URL,
	WATCHDOG_KEY,
	WATCHDOG_URL,
} from '../app.config';
import { fetchApplicationHealth } from './queries/fetch';
import { fetchMilvusCollection } from './queries/fetchMilvusCollection';

export const querieFactory = {
	getMilvusCollections: () => ({
		queryKey: [MILVUS_READ_COLLECTION_KEY],
		queryFn: () => fetchMilvusCollection(MILVUS_READ_COLLECTION_URL),
		staleTime: 60 * 10 * 1000, // 10 minutes
	}),

	applicationHealth: () => ({
		queryKey: [WATCHDOG_KEY],
		queryFn: () => fetchApplicationHealth(WATCHDOG_URL),
		staleTime: 60 * 10 * 1000, // 10 minutes
		refetchInterval: 1000 * 60, // 1 minute
		refetchIntervalInBackground: true,
	}),
}; */
