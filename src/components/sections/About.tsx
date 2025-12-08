import { Award, Briefcase, Code, Users } from 'lucide-react';
import Image from 'next/image';
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
								<strong>Vijayaraghavan N</strong> is the{' '}
								<span className="font-semibold">Founder and Director</span> of{' '}
								<Link
									href="https://asynx.in"
									target="blank"
									className="text-purple-400 font-semibold hover:underline transition-all"
								>
									Asynx Private Limited
								</Link>
								, a growing technology firm specializing in modern web
								solutions, SaaS products, and custom software development.
							</p>

							<p>
								What began as a passion for coding evolved into a successful
								full-time freelancing career, where he earned the{' '}
								<Link
									href="https://upwork.com/freelancers/shadowctrl"
									target="blank"
									className="text-purple-400 font-semibold hover:underline transition-all"
								>
									Top Rated badge on Upwork
								</Link>{' '}
								and built long-term client relationships founded on trust,
								quality, and reliability.
							</p>

							<p>
								At Asynx, Vijayaraghavan leads a dedicated team driven by a
								mission to deliver high-quality digital solutions, exceptional
								client support, and a client-first approach that defines the
								company’s values.
							</p>

							<p>
								With hands-on experience in developing end-to-end eCommerce
								platforms, SaaS applications, and enterprise-grade web
								solutions, he focuses on helping businesses scale efficiently
								through robust, maintainable software systems.
							</p>

							<p>
								He is currently overseeing the development of internal ERP and
								CRM systems designed to enhance client experience, while
								expanding the company’s capabilities and ensuring every project
								reflects precision, innovation, and care.
							</p>
						</div>
					</div>
					<div className="animate-fade-in-right">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
							<div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
								<Image
									src="/images/raghav.jpg"
									alt="Shadowctrl - Full Stack Developer"
									width={400}
									height={500}
									className="rounded-xl mx-auto"
								/>
							</div>
						</div>
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
