import { config, fields, singleton } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
	storage: {
		kind: 'github',
		repo: `${process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER}/${process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_NAME}`,
	},
	ui: {
		brand: { name: 'Twist' },
	},

	singletons: {
		hero: singleton({
			label: 'Hero',
			path: 'src/content/hero',
			format: { data: 'json' },
			schema: {
				title: fields.text({ label: 'Title' }),
				paragraph: fields.text({ label: 'Paragraph' }),
				avatar: fields.image({
					label: 'Avatar',
					directory: 'public/images/download.jpg',
				}),
			},
		}),
		feature: singleton({
			label: 'Feature',
			path: 'src/content/feature',
			format: { data: 'json' },
			schema: {
				title: fields.text({ label: 'Title' }),
				paragraph: fields.text({ label: 'Paragraph' }),
			},
		}),
		contact: singleton({
			label: 'Contact',
			path: 'src/content/contact',
			format: { data: 'json' },
			schema: {
				title: fields.text({ label: 'Title' }),
				paragraph: fields.text({ label: 'Paragraph' }),
			},
		}),
	},
});

