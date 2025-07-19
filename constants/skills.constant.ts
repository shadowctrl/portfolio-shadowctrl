import {
	Box,
	Circle,
	Cloud,
	Code2,
	Container,
	CreditCard,
	Database,
	FileCode,
	FileText,
	Flame,
	Gauge,
	GitBranch,
	Globe,
	Layers,
	Leaf,
	Link,
	Lock,
	Mail,
	MessageCircle,
	Palette,
	Radio,
	RefreshCw,
	Rocket,
	RotateCcw,
	Server,
	Settings,
	Smartphone,
	Square,
	Terminal,
	TrendingUp,
	Triangle,
	Zap,
} from 'lucide-react';

export const skillCategories = [
	{
		title: 'Frontend',
		skills: [
			{
				name: 'Next.js',
				icon: Zap,
				description: 'React Framework',
			},
			{
				name: 'React.js',
				icon: Code2,
				description: 'UI Library',
			},
			{
				name: 'TypeScript',
				icon: FileCode,
				description: 'Type Safety',
			},
			{
				name: 'Tailwind CSS',
				icon: Palette,
				description: 'Utility CSS',
			},
			{
				name: 'Redux',
				icon: RotateCcw,
				description: 'State Management',
			},
			{
				name: 'SASS/SCSS',
				icon: Layers,
				description: 'CSS Preprocessor',
			},
		],
	},
	{
		title: 'Backend',
		skills: [
			{
				name: 'Node.js',
				icon: Circle,
				description: 'JavaScript Runtime',
			},
			{
				name: 'NestJS',
				icon: Triangle,
				description: 'Scalable Framework',
			},
			{
				name: 'Express.js',
				icon: Rocket,
				description: 'Web Framework',
			},
			{
				name: 'REST APIs',
				icon: Radio,
				description: 'API Development',
			},
			{
				name: 'GraphQL',
				icon: Link,
				description: 'Query Language',
			},
		],
	},
	{
		title: 'Database & ORM',
		skills: [
			{
				name: 'PostgreSQL',
				icon: Database,
				description: 'Relational DB',
			},
			{
				name: 'MongoDB',
				icon: Leaf,
				description: 'NoSQL Database',
			},
			{
				name: 'Prisma',
				icon: Box,
				description: 'Modern ORM',
			},
			{
				name: 'TypeORM',
				icon: Square,
				description: 'TypeScript ORM',
			},
			{
				name: 'Firebase',
				icon: Flame,
				description: 'BaaS Platform',
			},
		],
	},
	{
		title: 'DevOps & Cloud',
		skills: [
			{
				name: 'Docker',
				icon: Container,
				description: 'Containerization',
			},
			{
				name: 'Kubernetes',
				icon: Settings,
				description: 'Orchestration',
			},
			{
				name: 'AWS',
				icon: Cloud,
				description: 'Cloud Services',
			},
			{
				name: 'GCP',
				icon: Globe,
				description: 'Google Cloud',
			},
			{
				name: 'CI/CD',
				icon: RefreshCw,
				description: 'Automation',
			},
			{
				name: 'Linux',
				icon: Terminal,
				description: 'Server Management',
			},
		],
	},
	{
		title: 'Integrations',
		skills: [
			{
				name: 'Stripe',
				icon: CreditCard,
				description: 'Payment Gateway',
			},
			{
				name: 'OAuth 2.0',
				icon: Lock,
				description: 'Authentication',
			},
			{
				name: 'Headless CMS',
				icon: FileText,
				description: 'Content Management',
			},
			{
				name: 'Discord API',
				icon: MessageCircle,
				description: 'Bot Integration',
			},
			{
				name: 'Telegram Bot',
				icon: Smartphone,
				description: 'Messaging Integration',
			},
		],
	},
	{
		title: 'Others',
		skills: [
			{
				name: 'SEO',
				icon: TrendingUp,
				description: 'Search Optimization',
			},
			{
				name: 'Git & GitHub',
				icon: GitBranch,
				description: 'Version Control',
			},
			{
				name: 'Self Hosting',
				icon: Server,
				description: 'Server Setup',
			},
			{
				name: 'Performance',
				icon: Gauge,
				description: 'Optimization',
			},
			{
				name: 'Email Server',
				icon: Mail,
				description: 'Mail Configuration',
			},
		],
	},
];
