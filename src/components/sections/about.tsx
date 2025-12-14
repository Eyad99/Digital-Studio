import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
	'Strategy & Planning',
	'Design Systems',
	'Web Development',
	'Mobile Apps',
	'Cloud Infrastructure',
	'Analytics & Optimization',
];

export default function About() {
	const aboutRef = useRef(null);
	const headingRef = useRef(null);
	const contentRef = useRef(null);
	const capabilityRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Heading animation
			gsap.from(headingRef.current, {
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top 80%',
					markers: false,
				},
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power3.out',
			});

			// Content animation
			gsap.from(contentRef.current, {
				scrollTrigger: {
					trigger: contentRef.current,
					start: 'top 85%',
					markers: false,
				},
				opacity: 0,
				y: 30,
				duration: 0.8,
				delay: 0.2,
				ease: 'power3.out',
			});

			// Capability badges animation
			capabilityRefs.current.forEach((badge, index) => {
				if (!badge) return;

				gsap.from(badge, {
					scrollTrigger: {
						trigger: badge,
						start: 'top 90%',
						markers: false,
					},
					opacity: 0,
					scale: 0.8,
					duration: 0.6,
					delay: index * 0.05,
					ease: 'back.out',
				});
			});
		}, aboutRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={aboutRef} className='py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-accent/5'>
			<div className='max-w-7xl mx-auto'>
				<h2 ref={headingRef} className='text-4xl md:text-5xl font-bold mb-12'>
					About Digital Studio
				</h2>

				<div ref={contentRef} className='grid md:grid-cols-2 gap-12 mb-16'>
					<div>
						<h3 className='text-2xl font-bold mb-4'>Our Philosophy</h3>
						<p className='text-lg text-muted-foreground mb-6'>
							We believe in creating digital experiences that matter. Every project is an opportunity to push boundaries, solve real
							problems, and create lasting impact for our clients.
						</p>
						<p className='text-lg text-muted-foreground'>
							With expertise in design, engineering, and strategy, we deliver comprehensive solutions that elevate your brand.
						</p>
					</div>

					<div>
						<h3 className='text-2xl font-bold mb-4'>Why Choose Us</h3>
						<ul className='space-y-4 text-muted-foreground'>
							<li className='flex gap-3'>
								<span className='text-primary font-bold'>✓</span>
								<span>Award-winning team of designers and engineers</span>
							</li>
							<li className='flex gap-3'>
								<span className='text-primary font-bold'>✓</span>
								<span>Proven track record with industry leaders</span>
							</li>
							<li className='flex gap-3'>
								<span className='text-primary font-bold'>✓</span>
								<span>Dedicated to innovation and excellence</span>
							</li>
						</ul>
					</div>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-8'>Our Capabilities</h3>
					<div className='flex flex-wrap gap-4'>
						{capabilities.map((capability, index) => (
							<div
								key={capability}
								ref={(el) => {
									if (el) capabilityRefs.current[index] = el;
								}}
								className='px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20 hover:bg-primary hover:text-primary-foreground smooth-transition cursor-pointer'
							>
								{capability}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
