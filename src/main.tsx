import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Footer from './components/layout/footer';
import Navigation from './components/layout/navigation';
import Hero from './components/sections/hero';
import { ThreeParticles } from './components/three/three-particles';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='w-full overflow-x-hidden'>
			<ThreeParticles />
			<Navigation />
			<Hero />
			<Footer />
		</div>
	</StrictMode>
);
