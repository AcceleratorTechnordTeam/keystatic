import { reader } from '../lib/reader';

export const Contact = async () => {
	const contact = await reader.collections.contact.read('contact');

	return (
		<section className='h-screen w-full bg-green-500 flex flex-col items-center justify-center snap-start'>
			<h2 className='text-4xl font-bold text-white'>{contact?.title}</h2>
			<p className='text-2xl font-bold text-white'>
				{contact?.paragraph}
			</p>
		</section>
	);
};
