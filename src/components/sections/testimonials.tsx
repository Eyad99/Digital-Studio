import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
	id: number;
	quote: string;
	author: string;
	company: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		quote:
			'Digital Studio transformed our vision into a stunning reality. Their attention to detail and creative excellence exceeded our expectations.',
		author: 'Sarah Johnson',
		company: 'Tech Innovations Inc.',
	},
	{
		id: 2,
		quote:
			'Working with the team was seamless. They understood our needs perfectly and delivered a solution that drove measurable results.',
		author: 'Michael Chen',
		company: 'Global Brands Co.',
	},
	{
		id: 3,
		quote: 'The level of professionalism and creativity was outstanding. They truly care about creating experiences that matter.',
		author: 'Emma Williams',
		company: 'Design Forward Studio',
	},
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const testimonialsRef = useRef(null);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const autoPlayRef = useRef<any | null>(null);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		if (cardRef.current) {
			gsap.fromTo(cardRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' });
		}
	}, [currentIndex]);

	useEffect(() => {
		autoPlayRef.current = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, []);

	const handleManualNavigation = (action: () => void) => {
		if (autoPlayRef.current) {
			clearInterval(autoPlayRef.current);
		}
		action();
		autoPlayRef.current = setInterval(() => {
			nextSlide();
		}, 5000);
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(testimonialsRef.current, {
				scrollTrigger: {
					trigger: testimonialsRef.current,
					start: 'top 85%',
					markers: false,
				},
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power3.out',
			});
		}, testimonialsRef);

		return () => ctx.revert();
	}, []);

	const currentTestimonial = testimonials[currentIndex];

	return (
		<section ref={testimonialsRef} className='py-24 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>What Clients Say</h2>

				<div className='relative'>
					<div
						ref={cardRef}
						className='p-8 md:p-12 rounded-2xl bg-card border border-border shadow-lg min-h-[280px] flex flex-col justify-between'
					>
						<div>
							<div className='flex gap-1 mb-6'>
								{[...Array(5)].map((_, i) => (
									<span key={i} className='text-xl'>
										⭐
									</span>
								))}
							</div>

							<blockquote className='text-lg md:text-xl text-muted-foreground mb-8 italic'>
								&quot;{currentTestimonial.quote}&quot;
							</blockquote>
						</div>

						<div>
							<p className='font-bold text-foreground text-lg'>{currentTestimonial.author}</p>
							<p className='text-sm text-muted-foreground'>{currentTestimonial.company}</p>
						</div>
					</div>

					<button
						onClick={() => handleManualNavigation(prevSlide)}
						className='cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 smooth-transition shadow-lg'
						aria-label='Previous testimonial'
					>
						<ChevronLeft className='w-6 h-6' />
					</button>

					<button
						onClick={() => handleManualNavigation(nextSlide)}
						className='cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 smooth-transition shadow-lg'
						aria-label='Next testimonial'
					>
						<ChevronRight className='w-6 h-6' />
					</button>
				</div>

				<div className='flex justify-center gap-3 mt-8'>
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => handleManualNavigation(() => goToSlide(index))}
							className={`w-3 h-3 rounded-full smooth-transition ${
								index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
