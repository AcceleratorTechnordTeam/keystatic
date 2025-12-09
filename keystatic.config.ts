import { collection, config, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
	storage: {
		kind: 'github',
		repo: 'AcceleratorTechnordTeam/keystatic',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.markdoc({ label: 'Content' }),
			},
		}),
	},
});

