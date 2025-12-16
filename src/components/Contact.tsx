import { reader } from '../lib/reader';
import { EmailSender } from './EmailSender';

export const Contact = async () => {
	const contact = await reader.singletons.contact.read();
	const contactData = await reader.singletons;
	console.log(contactData);

	return (
		<section className='h-screen w-full bg-green-500 flex flex-col items-center justify-center snap-start'>
			<h2 className='text-4xl font-bold text-white'>{contact?.title}</h2>
			<p className='text-2xl font-bold text-white'>
				{contact?.paragraph}
			</p>
			<EmailSender />
		</section>
	);
};
