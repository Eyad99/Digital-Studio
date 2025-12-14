import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThreeParticles } from './components/three/three-particles';
import Navigation from './components/layout/navigation';
import Services from './components/sections/services';
import Footer from './components/layout/footer';
import Hero from './components/sections/hero';
import Portfolio from './components/sections/portfolio';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='w-full overflow-x-hidden'>
			<ThreeParticles />
			<Navigation />

			<Hero />
			<Services />
			<Portfolio />

			<Footer />
		</div>
	</StrictMode>
);
