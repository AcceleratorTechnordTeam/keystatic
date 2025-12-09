import Link from 'next/link';
import { reader } from '../lib/reader';

export default async function Homepage() {
	const posts = await reader.collections.posts.all();

	return (
		<div className='border-2 border-red-500'>
			<h1>Keystatic ⚡️</h1>
			<p>
				This homepage shows how to load a collection from the reader
				API.
			</p>

			<h2 className='text-2xl font-bold text-center mt-4 mb-4 text-primary dark:text-primary-foreground'>
				Posts
			</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={`/${post.slug}`}>{post.entry.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

