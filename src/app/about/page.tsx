import {
	Award,
	Briefcase,
	Code,
	Heart,
	Target,
	Users,
	Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About Shadowctrl - Full Stack Developer & Entrepreneur',
	description:
		'Learn about my journey from passionate coder to successful entrepreneur. Founder of Asynx Private Limited, Top-rated Upwork freelancer with 4+ years of experience in full stack development.',
	keywords: [
		'about shadowctrl',
		'full stack developer story',
		'asynx private limited founder',
		'upwork top rated developer',
		'web development entrepreneur',
		'freelance developer journey',
	],
};

const stats = [
	{ icon: Award, label: 'Years Experience', value: '5+' },
	{ icon: Users, label: 'Happy Clients', value: '30+' },
	{ icon: Code, label: 'Projects Completed', value: '50+' },
	{ icon: Briefcase, label: 'Company Founded', value: '1' },
];

const values = [
	{
		icon: Target,
		title: 'Quality First',
		description:
			'Every line of code is written with precision and attention to detail, ensuring coding standards and maintainable solutions.',
	},
	{
		icon: Heart,
		title: 'Client-Centric',
		description:
			'Your success is my success. I prioritize understanding your needs and delivering solutions that exceed expectations.',
	},
	{
		icon: Zap,
		title: 'Innovation',
		description:
			'Staying ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.',
	},
];

export default function AboutPage() {
	return (
		<div className="lg:pt-24 pt-12 md:pt-20">
			{/* Hero Section */}
			<section className="section">
				<div className="container">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="animate-fade-in-left">
							<h1 className="text-4xl sm:text-5xl font-bold mb-6">
								About <span className="text-gradient">Me</span>
							</h1>
							<p className="text-xl text-gray-300 mb-8 leading-relaxed">
								From passionate coder to successful entrepreneur, building
								scalable web solutions and leading a growing company with a
								mission to deliver excellence.
							</p>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
								{stats.map((stat, index) => {
									const Icon = stat.icon;
									return (
										<div key={index} className="text-center">
											<Icon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
											<div className="text-2xl font-bold text-white">
												{stat.value}
											</div>
											<div className="text-gray-400 text-sm">{stat.label}</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="animate-fade-in-right">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
								<div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
									<Image
										src="/assets/anonymous.webp"
										alt="Shadowctrl - Full Stack Developer"
										width={400}
										height={500}
										className="rounded-xl mx-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="section bg-gray-900/30">
				<div className="container">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold text-center mb-12">
							My <span className="text-gradient">Journey</span>
						</h2>

						<div className="space-y-8 text-gray-300 leading-relaxed">
							<p className="text-lg">
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

							<p className="text-lg">
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

							<p className="text-lg">
								With hands-on experience in building end-to-end ecommerce, SaaS
								applications, and custom web solutions, I help businesses scale
								and increase their efficiency with maintainable software.
							</p>

							<p className="text-lg">
								Currently, I'm focused on developing internal ERP and CRM
								systems with a vision to elevate our client experience to the
								next level, while expanding our team and continuing to deliver
								client projects with care and precision.
							</p>

							<p className="text-lg">
								I'm always open to collaborating and connecting with like-minded
								individuals, founders, developers, and potential partners.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="section">
				<div className="container">
					<h2 className="text-3xl font-bold text-center mb-12">
						My <span className="text-gradient">Values</span>
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{values.map((value, index) => {
							const Icon = value.icon;
							return (
								<div key={index} className="card text-center">
									<Icon className="h-12 w-12 text-purple-500 mx-auto mb-6" />
									<h3 className="text-xl font-bold text-white mb-4">
										{value.title}
									</h3>
									<p className="text-gray-300">{value.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
