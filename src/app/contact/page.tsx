import { reader } from '../../lib/reader';

export default async function ContactPage() {
	const contact = await reader.collections.posts.read('contact');
	console.log(contact);
	return (
		<div>
			<p>{contact?.title}</p>
		</div>
	);
}
