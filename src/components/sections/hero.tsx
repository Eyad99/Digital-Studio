import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ThreeBlob } from '../three/three-blob';

export default function Hero() {
	const heroRef = useRef(null);
	const headlineRef = useRef(null);
	const subheadingRef = useRef(null);
	const ctaRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Hero entrance animation
			const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });

			tl.from(headlineRef.current, {
				opacity: 0,
				y: 50,
			})
				.from(
					subheadingRef.current,
					{
						opacity: 0,
						y: 30,
					},
					'-=0.6'
				)
				.from(
					ctaRef.current,
					{
						opacity: 1,
						y: 20,
					},
					'-=0.6'
				);
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={heroRef} className='w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden'>
			<div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 pointer-events-none' />

			{/* 3D blob background */}
			<ThreeBlob />

			<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl'>
				<h1 ref={headlineRef} className='text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text'>
					We Build Digital Experiences
				</h1>

				<p ref={subheadingRef} className='text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
					Transform your vision into stunning digital products with premium design, cutting-edge technology, and creative excellence.
				</p>

				<button
					ref={ctaRef}
					className='px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:shadow-2xl smooth-transition inline-block'
				>
					Start Your Project
				</button>
			</div>
		</section>
	);
}
