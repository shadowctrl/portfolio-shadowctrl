import { ProjectType } from '../types/portfolio.type';

export const projects: ProjectType[] = [
	{
		title: 'Ciseco',
		description:
			'Optimized e-commerce platform with improved functionalities, additional features & Cashfree integration',
		image: '/images/louis-eloite2.png',
		technologies: ['Next.js', 'shadcn/ui', 'Express.js', 'MongoDB', 'Razorpay'],
		// liveUrl: '#',
		githubUrl: 'https://github.com/Asynx-Pvt-Ltd/ciseco',
		category: 'E-commerce',
	},
	{
		title: 'AI41',
		description:
			'Comprehensive AI tools directory categorized by roles, tasks, and functionalities with custom CMS',
		image: '/images/ai41.webp',
		technologies: ['Next.js', 'API Integration', 'Custom CMS', 'TypeScript'],
		liveUrl: 'https://ai41.org',
		githubUrl: 'https://github.com/Asynx-Pvt-Ltd/AI41',
		category: 'SaaS',
	},
	{
		title: 'TechFrom10',
		description:
			'AI-powered tech news platform with GPT image generation, AWS S3 integration, and modern UI',
		image: '/images/techfrom10.png',
		technologies: [
			'Next.js',
			'GPT API',
			'AWS S3',
			'shadcn/ui',
			'AI Integration',
		],
		liveUrl: 'https://techfrom10.com',
		githubUrl: 'https://github.com/Asynx-Pvt-Ltd/Techfrom10',
		category: 'AI/ML',
	},
	{
		title: 'Fact Check Central',
		description:
			'Real-time news application with AI-powered fact-checking using GPT-4o and Perplexity AI',
		image: '/images/fcc.webp',
		technologies: ['Next.js', 'GPT-4o', 'Perplexity AI', 'Bing API', 'MongoDB'],
		liveUrl: 'https://factcheckcentral.org',
		githubUrl: 'https://github.com/shadowctrl/FactCheckCentral',
		category: 'AI/ML',
	},
	{
		title: 'CSI Event Registration',
		description:
			'Streamlined event registration system with QR code validation and Firebase integration',
		image: '/images/csi-conv.webp',
		technologies: [
			'Node.js',
			'Express.js',
			'Firebase',
			'Google APIs',
			'QR Codes',
		],
		githubUrl: 'https://github.com/An-On-Y-mous/CSI-convention-2k24',
		category: 'Web App',
		// liveUrl: '#',
	},
	{
		title: 'Web3 DAPP',
		description:
			'Web3 Decentralized Application that allows user to make Ethereum (ETH) Smart Contract',
		image: '/images/web3.jpg',
		technologies: [
			'React.js',
			'HTML5',
			'CSS3',
			'JavaScript',
			'HardHat',
			'Smart Contract',
		],
		// liveUrl: 'https://hackatank.shadowctrl.me',
		// githubUrl: 'https://github.com/shadowctrl/Hackatank',
		category: 'Web3',
	},
];
