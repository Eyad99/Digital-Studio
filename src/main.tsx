import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Footer from './components/layout/footer';
import Navigation from './components/layout/navigation';
import Hero from './components/sections/hero';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='w-full overflow-x-hidden'>
			<Navigation />
			<Hero />
			<Footer />
		</div>
	</StrictMode>
);
