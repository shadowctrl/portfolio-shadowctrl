import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../../constants/portfolio.constants';

export default function Portfolio() {
	return (
		<section id="portfolio" className="section bg-gray-900/30">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Featured <span className="text-gradient">Projects</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						A showcase of my recent work and successful client projects
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.slice(0, 3).map((project, index) => (
						<div
							key={index}
							className="card group flex flex-col justify-between"
						>
							<div className="pb-4 flex">
								<span className="px-3 ml-auto py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
									{project.category}
								</span>
							</div>
							<div className="relative overflow-hidden rounded-lg mb-6">
								<Image
									src={project.image || '/placeholder.svg'}
									alt={project.title}
									width={400}
									height={250}
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 object-top"
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

				<div className="text-center mt-12">
					<Link href="/portfolio" className="btn-secondary">
						View All Projects
					</Link>
				</div>
			</div>
		</section>
	);
}
