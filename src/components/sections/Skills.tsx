import { skillCategories } from '../../../constants/skills.constant';

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
						Technical{' '}
						<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
							Skills
						</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Technologies and tools I use
					</p>
				</div>

				<div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => (
						<div
							key={index}
							className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
						>
							<h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-3">
								{category.title}
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{category.skills.map((skill, skillIndex) => (
									<div
										key={skillIndex}
										className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-3 hover:bg-gray-600/30 hover:border-purple-400/50 transition-all duration-300 group cursor-pointer"
									>
										<div className="flex items-center space-x-3">
											<div className="text-purple-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
												<skill.icon size={20} />
											</div>
											<div className="flex-1 min-w-0">
												<div className="font-semibold text-white text-sm truncate">
													{skill.name}
												</div>
												<div className="text-xs text-gray-400 truncate">
													{skill.description}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-6 max-w-4xl mx-auto">
						<h4 className="text-lg font-semibold text-white mb-3">
							Full-Stack Development Excellence
						</h4>
						<p className="text-gray-300 text-sm leading-relaxed">
							From MVP development to enterprise-grade solutions, I deliver
							scalable web applications with modern architecture, SEO
							optimization, and performance tuning. Specialized in self-hosted
							Kubernetes clusters, custom CMS development, and seamless
							third-party integrations.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
