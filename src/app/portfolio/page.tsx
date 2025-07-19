import { Building2, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../../constants/portfolio.constants';

export const metadata: Metadata = {
	title: 'Portfolio - Web Development Projects by Shadowctrl | Asynx',
	description:
		'Explore my portfolio of successful web development projects including e-commerce platforms, SaaS applications, and custom web solutions built with Next.js, React, and modern technologies. Delivered through Asynx Private Limited.',
	keywords: [
		'web development portfolio',
		'next.js projects',
		'react applications',
		'ecommerce development',
		'saas projects',
		'full stack projects',
		'shadowctrl portfolio',
		'asynx projects',
	],
};

export default function PortfolioPage() {
	return (
		<div className="lg:pt-24 pt-12 md:pt-20">
			{/* Hero Section */}
			<section className="section">
				<div className="container text-center">
					<h1 className="text-4xl sm:text-5xl font-bold mb-6">
						My <span className="text-gradient">Portfolio</span>
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
						A showcase of successful projects and satisfied clients across
						various industries
					</p>
					<Link
						href={'https://asynx.in/works'}
						className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20 hover:scale-105 transition-all"
					>
						<Building2 className="h-4 w-4 mr-2" />
						Professional projects delivered through Asynx Private Limited
					</Link>
				</div>
			</section>

			{/* Portfolio Grid */}
			<section className="section bg-gray-900/30">
				<div className="container">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div key={index} className="card group">
								<div className="pb-4 flex">
									<span className="px-3 py-1 ml-auto bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
										{project.category}
									</span>
								</div>
								<div className="relative overflow-hidden rounded-lg mb-6">
									<Image
										src={project.image || '/placeholder.svg'}
										alt={project.title}
										width={400}
										height={250}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
									/>
								</div>

								<h3 className="text-xl font-bold text-white mb-3">
									{project.title}
								</h3>
								<p className="text-gray-300 mb-4 text-sm">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex space-x-4">
									{project.liveUrl && (
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
										>
											<ExternalLink className="h-4 w-4 mr-1" />
											Live Demo
										</Link>
									)}
									{project.githubUrl && (
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm"
										>
											<Github className="h-4 w-4 mr-1" />
											Code
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section">
				<div className="container text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Start Your <span className="text-gradient">Project</span>?
					</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Let's discuss your requirements and create something amazing
						together through Asynx.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-primary">
							Get Started Today
						</Link>
						<Link
							href="https://asynx.in"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-secondary inline-flex items-center"
						>
							<ExternalLink className="h-4 w-4 mr-2" />
							Visit Asynx.in
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
