import { useEffect, useState } from 'react';
import { useTheme } from '../theme-provider';

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = ['Work', 'About', 'Services', 'Contact'];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='text-2xl font-bold gradient-text'>Digital Studio</div>

					<div className='hidden md:flex gap-8'>
						{navItems.map((item) => (
							<button key={item} className='text-foreground hover:text-primary smooth-transition font-medium text-sm'>
								{item}
							</button>
						))}
					</div>

					<div className='flex items-center gap-4'>
						<button
							onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
							className='p-2 rounded-lg hover:bg-muted smooth-transition'
							aria-label='Toggle dark mode'
						>
							{theme === 'dark' ? '☀️' : '🌙'}
						</button>
						<button className='px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg smooth-transition'>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
