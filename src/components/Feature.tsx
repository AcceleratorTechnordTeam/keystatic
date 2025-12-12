import { reader } from '../lib/reader';

export const Feature = async () => {
	const feature = await reader.singletons.feature.read();

	return (
		<section className='h-screen w-full bg-blue-500 flex flex-col items-center justify-center snap-start'>
			<h2 className='text-4xl font-bold text-white'>{feature?.title}</h2>
			<p className='text-2xl font-bold text-white'>
				{feature?.paragraph}
			</p>
		</section>
	);
};
