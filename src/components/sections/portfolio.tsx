'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
	id: number;
	title: string;
	category: string;
	image: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'The Silly Bunny',
		category: 'Website / 3D',
		image: '/immersive-3d-website-with-colorful-bunny-character.jpg',
	},
	{
		id: 2,
		title: 'Immersive Experience',
		category: 'Interactive Design',
		image: '/modern-interactive-digital-experience.jpg',
	},
	{
		id: 3,
		title: 'Brand Transformation',
		category: 'Branding & Strategy',
		image: '/luxury-brand-identity-design.jpg',
	},
];

export default function Portfolio() {
	const portfolioRef = useRef(null);
	const titleRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(titleRef.current, {
				scrollTrigger: {
					trigger: portfolioRef.current,
					start: 'top 80%',
					markers: false,
				},
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power3.out',
			});
		}, portfolioRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={portfolioRef} className='py-24 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h2 ref={titleRef} className='text-4xl md:text-5xl font-bold mb-16'>
					Featured Work
				</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<div
							key={project.id}
							className='group cursor-pointer overflow-hidden rounded-2xl bg-muted/50 hover:shadow-xl smooth-transition'
						>
							<div className='relative h-64 overflow-hidden'>
								<img
									src={project.image || '/placeholder.svg'}
									alt={project.title}
									className='w-full h-full object-cover group-hover:scale-110 smooth-transition'
								/>
							</div>

							<div className='p-6'>
								<p className='text-sm font-semibold text-primary mb-2'>{project.category}</p>
								<h3 className='text-2xl font-bold'>{project.title}</h3>
							</div>
						</div>
					))}
				</div>

				<div className='text-center mt-12'>
					<button className='px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground smooth-transition'>
						View All Work
					</button>
				</div>
			</div>
		</section>
	);
}
