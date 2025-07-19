import { Award, Briefcase, Code, Users } from 'lucide-react';
import Link from 'next/link';

const stats = [
	{ icon: Award, label: 'Years Experience', value: '5+' },
	{ icon: Users, label: 'Happy Clients', value: '30+' },
	{ icon: Code, label: 'Projects Completed', value: '50+' },
	{ icon: Briefcase, label: 'Company Founded', value: '1' },
];

export default function About() {
	return (
		<section id="about" className="section bg-gray-900/30">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						About <span className="text-gradient">Me</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						From passionate coder to successful entrepreneur
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<div className="animate-fade-in-left">
						<h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
						<div className="space-y-4 text-gray-300">
							<p>
								Started with a passion for coding that turned into a full-time
								freelancing career, earning the{' '}
								<Link
									href={'https://upwork.com/freelancers/shadowctrl'}
									target="blank"
									className="text-purple-400 font-semibold hover:underline transition-all"
								>
									Top Rated badge on Upwork
								</Link>{' '}
								and building strong, long-term client relationships based on
								trust, quality, and reliability.
							</p>
							<p>
								Today, I lead{' '}
								<Link
									href={'https://asynx.in'}
									target="blank"
									className="text-purple-400 font-semibold hover:underline transition-all"
								>
									Asynx Private Limited
								</Link>
								, a growing product and service-based company with a strong
								mission of delivering high-quality work with the best support
								and a client-first approach.
							</p>
							<p>
								With hands-on experience in building end-to-end ecommerce, SaaS
								applications, and custom web solutions, I help businesses scale
								and increase their efficiency with maintainable software.
							</p>
							<p>
								Currently, I'm focused on developing internal ERP and CRM
								systems with a vision to elevate our client experience to the
								next level, while expanding our team and continuing to deliver
								client projects with care and precision.
							</p>
						</div>
					</div>

					<div className="animate-fade-in-right">
						<div className="grid grid-cols-2 gap-6">
							{stats.map((stat, index) => {
								const Icon = stat.icon;
								return (
									<div key={index} className="card text-center">
										<Icon className="h-8 w-8 text-purple-500 mx-auto mb-4" />
										<div className="text-3xl font-bold text-white mb-2">
											{stat.value}
										</div>
										<div className="text-gray-400 text-sm">{stat.label}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="text-center">
					<p className="text-lg text-gray-300 mb-6">
						I'm always open to collaborating and connecting with like-minded
						individuals, founders, developers, and potential partners.
					</p>
					<a href="/contact" className="btn-primary">
						Let's Connect
					</a>
				</div>
			</div>
		</section>
	);
}
