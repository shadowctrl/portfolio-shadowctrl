import {
	Code,
	Smartphone,
	Database,
	Zap,
	Shield,
	Headphones,
} from 'lucide-react';

export const services = [
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
