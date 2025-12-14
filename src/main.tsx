import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThreeParticles } from './components/three/three-particles';
import Testimonials from './components/sections/testimonials';
import Navigation from './components/layout/navigation';
import Portfolio from './components/sections/portfolio';
import Services from './components/sections/services';
import Contact from './components/sections/contact';
import Footer from './components/layout/footer';
import About from './components/sections/about';
import Hero from './components/sections/hero';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='w-full overflow-x-hidden'>
			<ThreeParticles />
			<Navigation />

			<Hero />
			<Services />
			<Portfolio />
			<About />
			<Testimonials />
			<Contact />

			<Footer />
		</div>
	</StrictMode>
);
