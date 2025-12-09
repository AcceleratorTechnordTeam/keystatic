import { collection, config, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
	storage: {
		kind: 'github',
		repo: `${process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER}/${process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_NAME}`,
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

