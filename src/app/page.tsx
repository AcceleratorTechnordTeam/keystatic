// import { motion, useScroll } from 'motion/react';
import { Contact } from '../components/Contact';
import { Feature } from '../components/Feature';
import { Hero } from '../components/Hero';

export default async function Homepage() {
	// const { scrollYProgress } = useScroll();

	return (
		<>
			{/* <motion.div
				id='scroll-indicator'
				style={{
					scaleX: scrollYProgress,
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					height: 10,
					originX: 0,
					backgroundColor: '#000',
				}}
			/> */}
			<Hero />
			<Feature />
			<Contact />
		</>
	);
}

