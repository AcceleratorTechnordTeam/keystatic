import Image from 'next/image';
import { reader } from '../lib/reader';

export const Hero = async () => {
	const hero = await reader.singletons.hero.read();

	console.log(hero);
	return (
		<section className='h-screen w-full bg-red-500 flex flex-col items-center justify-center snap-start'>
			<h1 className='text-4xl font-bold text-white'>
				{hero?.title ?? ''}
			</h1>
			<p className='text-2xl font-bold text-white'>
				{hero?.paragraph ?? ''}
			</p>

			<Image
				src={hero?.avatar ?? ''}
				alt={hero?.title ?? 'No title'}
				width={100}
				height={100}
			/>
		</section>
	);
};
