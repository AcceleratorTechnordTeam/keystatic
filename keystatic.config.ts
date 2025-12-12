import { collection, config, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
	storage: {
		kind: 'github',
		repo: `${process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER}/${process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_NAME}`,
	},
	ui: {
		brand: { name: 'Twist' },
	},

	collections: {
		hero: collection({
			label: 'Hero',
			slugField: 'title',
			path: 'src/content/hero/*',
			format: { data: 'json' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				paragraph: fields.text({ label: 'Paragraph' }),
				/* content: fields.markdoc({ label: 'Content' }), */
				/* image: fields.image({ label: 'Image' }), */
				/* content: fields.markdoc({ label: 'Content' }), */
			},
		}),
		feature: collection({
			label: 'Feature',
			slugField: 'title',
			path: 'src/content/feature/*',
			format: { data: 'json' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				paragraph: fields.text({ label: 'Paragraph' }),
				/* content: fields.markdoc({ label: 'Content' }), */
				/* image: fields.image({ label: 'Image' }), */
				/* content: fields.markdoc({ label: 'Content' }), */
			},
		}),
		contact: collection({
			label: 'Contact',
			slugField: 'title',
			path: 'src/content/contact/*',
			format: { data: 'json' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				paragraph: fields.text({ label: 'Paragraph' }),
				/* content: fields.markdoc({ label: 'Content' }), */
				/* image: fields.image({ label: 'Image' }), */
				/* content: fields.markdoc({ label: 'Content' }), */
			},
		}),
	},
});

