import type React from 'react';

import { useEffect } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
	children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('main', {
				duration: 0.6,
				opacity: 0,
				y: 20,
				ease: 'power2.out',
			});
		});

		return () => ctx.revert();
	}, []);

	return <>{children}</>;
}
