import {
	Code2,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
} from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
	services: [
		{ name: 'Web Development', href: '/services' },
		{ name: 'E-commerce Solutions', href: '/services' },
		{ name: 'SaaS Development', href: '/services' },
		{ name: 'Custom Applications', href: '/services' },
	],
	company: [
		{ name: 'About', href: '/about' },
		{ name: 'Portfolio', href: '/portfolio' },
		{ name: 'Contact', href: '/contact' },
	],
};

const socialLinks = [
	{ name: 'GitHub', href: 'https://github.com/shadowctrl', icon: Github },
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/shadowctrl',
		icon: Linkedin,
	},
	{ name: 'Twitter', href: 'https://twitter.com/_shadowctrl_', icon: Twitter },
	{
		name: 'Instagram',
		href: 'https://instagram.com/_.shadowctrl._',
		icon: Instagram,
	},

	{ name: 'Email', href: 'mailto:admin@shadowctrl.me', icon: Mail },
];

export default function Footer() {
	return (
		<footer className="border-t border-t-gray-600 bg-black/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<Code2 className="h-8 w-8 text-purple-500" />
							<span className="text-xl font-bold text-white">shadowctrl</span>
						</Link>
						<p className="text-gray-400 mb-4">
							Full Stack Developer & Founder of Asynx Private Limited. Building
							scalable web solutions for businesses worldwide.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((item) => {
								const Icon = item.icon;
								return (
									<Link
										key={item.name}
										href={item.href}
										className="text-gray-400 hover:text-purple-400 transition-colors"
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.name}
									>
										<Icon className="h-5 w-5" />
									</Link>
								);
							})}
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-white font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							{footerLinks.services.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-400 hover:text-purple-400 transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-white font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							{footerLinks.company.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-400 hover:text-purple-400 transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						© {new Date().getFullYear()} Shadowctrl. All rights reserved.
					</p>
					<p className="text-gray-400 text-sm mt-2 sm:mt-0">
						Made with passion in India 🇮🇳
					</p>
				</div>
			</div>
		</footer>
	);
}
