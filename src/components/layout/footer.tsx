export default function Footer() {
	return (
		<footer className='bg-foreground dark:bg-muted/20 dark:text-white text-primary-foreground py-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-4 gap-12 mb-12'>
					<div>
						<h3 className='text-xl font-bold mb-4'>Digital Studio</h3>
						<p className='text-primary-foreground/70 dark:text-white/70'>Building digital experiences that matter.</p>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Services</h4>
						<ul className='space-y-2 text-primary-foreground/70 dark:text-white/70'>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									Web Development
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									UI/UX Design
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									Branding
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Company</h4>
						<ul className='space-y-2 text-primary-foreground/70 dark:text-white/70'>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									About
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									Work
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Connect</h4>
						<ul className='space-y-2 text-primary-foreground/70 dark:text-white/70'>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									Twitter
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									LinkedIn
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary-foreground smooth-transition'>
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-primary-foreground/20 dark:border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-foreground/70 dark:text-white/70 text-sm'>
					<p>&copy; 2025 Digital Studio. All rights reserved.</p>
					<div className='flex gap-6 mt-4 md:mt-0'>
						<a href='#' className='hover:text-primary-foreground smooth-transition'>
							Privacy
						</a>
						<a href='#' className='hover:text-primary-foreground smooth-transition'>
							Terms
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
