import {
	ArrowRight,
	Code,
	Database,
	Headphones,
	Shield,
	Smartphone,
	Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Web Development Services - Full Stack Solutions by Shadowctrl',
	description:
		'Professional web development services including full stack development, e-commerce solutions, SaaS applications, and custom web solutions. Get a free consultation today.',
	keywords: [
		'web development services',
		'full stack development',
		'ecommerce development',
		'saas development',
		'custom web applications',
		'business automation',
		'erp systems',
		'crm development',
	],
};

const services = [
	{
		icon: Code,
		title: 'Full Stack Development',
		description:
			'End-to-end web application development using modern technologies like Next.js, React, and Node.js.',
		features: [
			'Custom Web Applications',
			'API Development',
			'Database Design',
			'Performance Optimization',
		],
		pricing: 'Starting at $5,000',
		timeline: '2-8 weeks',
	},
	{
		icon: Smartphone,
		title: 'E-commerce Solutions',
		description:
			'Complete e-commerce platforms with payment integration, inventory management, and admin dashboards.',
		features: [
			'Online Stores',
			'Payment Gateways',
			'Inventory Management',
			'Order Processing',
		],
		pricing: 'Starting at $8,000',
		timeline: '4-12 weeks',
	},
	{
		icon: Database,
		title: 'SaaS Development',
		description:
			'Scalable Software-as-a-Service applications with multi-tenancy, subscriptions, and analytics.',
		features: [
			'Multi-tenant Architecture',
			'Subscription Management',
			'Analytics Dashboard',
			'API Integration',
		],
		pricing: 'Starting at $15,000',
		timeline: '8-16 weeks',
	},
	{
		icon: Zap,
		title: 'Business Automation',
		description:
			'Custom ERP and CRM systems to streamline business processes and improve efficiency.',
		features: [
			'ERP Systems',
			'CRM Solutions',
			'Workflow Automation',
			'Data Analytics',
		],
		pricing: 'Starting at $12,000',
		timeline: '6-14 weeks',
	},
	{
		icon: Shield,
		title: 'Maintenance & Support',
		description:
			'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
		features: [
			'24/7 Monitoring',
			'Security Updates',
			'Performance Optimization',
			'Bug Fixes',
		],
		pricing: 'Starting at $500/month',
		timeline: 'Ongoing',
	},
	{
		icon: Headphones,
		title: 'Consulting & Strategy',
		description:
			'Technical consulting and strategic planning to help you make informed technology decisions.',
		features: [
			'Technology Assessment',
			'Architecture Planning',
			'Code Review',
			'Best Practices',
		],
		pricing: 'Starting at $150/hour',
		timeline: '1-4 weeks',
	},
];

const process = [
	{
		step: '01',
		title: 'Discovery & Planning',
		description:
			'We discuss your requirements, goals, and create a detailed project plan.',
	},
	{
		step: '02',
		title: 'Design & Architecture',
		description:
			'Create wireframes, designs, and technical architecture for your project.',
	},
	{
		step: '03',
		title: 'Development',
		description:
			'Build your application using modern technologies and best practices.',
	},
	{
		step: '04',
		title: 'Testing & Launch',
		description:
			'Thorough testing, deployment, and launch of your application.',
	},
	{
		step: '05',
		title: 'Support & Maintenance',
		description:
			'Ongoing support, updates, and maintenance to ensure optimal performance.',
	},
];

export default function ServicesPage() {
	return (
		<div className="pt-24">
			{/* Hero Section */}
			<section className="section">
				<div className="container text-center">
					<h1 className="text-4xl sm:text-5xl font-bold mb-6">
						Professional <span className="text-gradient">Web Development</span>{' '}
						Services
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
						Comprehensive web development solutions to help your business grow
						and succeed in the digital world.
					</p>
					<Link href="/contact" className="btn-primary">
						Get Free Consultation
					</Link>
				</div>
			</section>

			{/* Services Grid */}
			<section className="section bg-gray-900/30">
				<div className="container">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => {
							const Icon = service.icon;
							return (
								<div
									key={index}
									className="card group hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
								>
									<div className="mb-6">
										<Icon className="h-12 w-12 text-purple-500 group-hover:text-purple-400 transition-colors" />
									</div>
									<h3 className="text-xl font-bold text-white mb-4">
										{service.title}
									</h3>
									<p className="text-gray-300 mb-6">{service.description}</p>

									<ul className="space-y-2 mb-6">
										{service.features.map((feature, featureIndex) => (
											<li
												key={featureIndex}
												className="text-gray-400 text-sm flex items-center"
											>
												<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
												{feature}
											</li>
										))}
									</ul>

									<div className="border-t border-gray-800 pt-4 mt-auto">
										<div className="flex justify-between items-center mb-4">
											<span className="text-purple-400 font-semibold">
												{service.pricing}
											</span>
											<span className="text-gray-400 text-sm">
												{service.timeline}
											</span>
										</div>
										<Link
											href="/contact"
											className="w-full btn-secondary text-center inline-flex items-center justify-center"
										>
											Get Quote
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="section">
				<div className="container">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							My <span className="text-gradient">Process</span>
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							A proven methodology to deliver exceptional results
						</p>
					</div>

					<div className="grid md:grid-cols-5 gap-8">
						{process.map((item, index) => (
							<div key={index} className="text-center">
								<div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
									<span className="text-purple-400 font-bold text-lg">
										{item.step}
									</span>
								</div>
								<h3 className="text-lg font-bold text-white mb-2">
									{item.title}
								</h3>
								<p className="text-gray-400 text-sm">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section bg-gray-900/30">
				<div className="container text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Start Your <span className="text-gradient">Project</span>?
					</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Let's discuss your requirements and create a custom solution that
						fits your needs and budget.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-primary">
							Get Free Consultation
						</Link>
						<Link href="/portfolio" className="btn-secondary">
							View Portfolio
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
