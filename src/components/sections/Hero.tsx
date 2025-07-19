import { ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className="section">
			<div className="container pt-12 md:pt-16 lg:pt-0">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="animate-fade-in-left">
						<div className="mb-6">
							<span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
								Freelancer turned Founder
							</span>
						</div>

						<h1 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-6">
							Full Stack Developer &{' '}
							<span className="text-gradient">Founder</span>
						</h1>

						<p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
							Leading innovative web solutions through{' '}
							<Link
								href={'https://asynx.in'}
								target="blank"
								className="text-purple-400 font-semibold hover:underline transition-all"
							>
								Asynx Private Limited
							</Link>
							. Top-rated on Upwork, building scalable digital products for
							businesses worldwide.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<Link
								href="/contact"
								className="btn-primary inline-flex items-center"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
							<Link
								href="/portfolio"
								className="btn-secondary inline-flex items-center"
							>
								View Portfolio
							</Link>
						</div>

						<div className="flex items-center space-x-6">
							<Link
								href="https://asynx.in"
								className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center text-sm"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="h-4 w-4 mr-2" />
								Visit Asynx.in
							</Link>
							<Link
								href="https://github.com/shadowctrl"
								className="text-gray-400 hover:text-purple-400 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<Github className="h-6 w-6" />
							</Link>
							<Link
								href="https://linkedin.com/in/shadowctrl"
								className="text-gray-400 hover:text-purple-400 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-6 w-6" />
							</Link>
						</div>
					</div>

					<div className="animate-fade-in-right">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
							<div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
								<Image
									src="/assets/anonymous.webp"
									alt="Shadowctrl - Full Stack Developer and Founder"
									width={400}
									height={500}
									className="rounded-xl mx-auto"
									priority
								/>
								<div className="mt-6 text-center">
									<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
										Founder & CEO at Asynx
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
						<div className="text-gray-400">Projects Completed</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-purple-400 mb-2">30+</div>
						<div className="text-gray-400">Happy Clients</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
						<div className="text-gray-400">Client Satisfaction</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
						<div className="text-gray-400">Support Available</div>
					</div>
				</div>
			</div>
		</section>
	);
}
