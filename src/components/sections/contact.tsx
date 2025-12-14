import type React from 'react';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
	const contactRef = useRef(null);
	const headingRef = useRef(null);
	const formRef = useRef(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(headingRef.current, {
				scrollTrigger: {
					trigger: contactRef.current,
					start: 'top 80%',
					markers: false,
				},
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power3.out',
			});

			gsap.from(formRef.current, {
				scrollTrigger: {
					trigger: formRef.current,
					start: 'top 85%',
					markers: false,
				},
				opacity: 0,
				y: 30,
				duration: 0.8,
				delay: 0.2,
				ease: 'power3.out',
			});
		}, contactRef);

		return () => ctx.revert();
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission
	};

	return (
		<section ref={contactRef} className='py-24 px-4 sm:px-6 lg:px-8 bg-muted/30'>
			<div className='max-w-4xl mx-auto'>
				<h2 ref={headingRef} className='text-4xl md:text-5xl font-bold text-center mb-8'>
					Let's Build Something Amazing
				</h2>

				<p className='text-xl text-muted-foreground text-center mb-12'>Ready to start your next project? Get in touch with our team.</p>

				<form ref={formRef} onSubmit={handleSubmit} className='space-y-6 max-w-2xl mx-auto'>
					<div>
						<label className='block text-sm font-semibold mb-2'>Name</label>
						<input
							type='text'
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							className='w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50'
							placeholder='Your name'
							required
						/>
					</div>

					<div>
						<label className='block text-sm font-semibold mb-2'>Email</label>
						<input
							type='email'
							value={formData.email}
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							className='w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50'
							placeholder='your@email.com'
							required
						/>
					</div>

					<div>
						<label className='block text-sm font-semibold mb-2'>Message</label>
						<textarea
							value={formData.message}
							onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							rows={5}
							className='w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50'
							placeholder='Tell us about your project...'
							required
						/>
					</div>

					<button
						type='submit'
						className='cursor-pointer w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:shadow-lg smooth-transition'
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
