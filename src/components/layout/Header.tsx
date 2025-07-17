import Link from 'next/link';
import MobileMenu from './MobileMenu';
import NavbarClient from './NavbarClient';

const navigation = [
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Portfolio', href: '/portfolio' },
	{ name: 'Contact', href: '/contact' },
];

export default function Header() {
	return (
		<header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-gray-600">
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-3">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3">
						<div className="relative">
							<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
								<span className="text-white font-bold text-lg">&lt;/&gt;</span>
							</div>
							<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
						</div>
						<div className="flex flex-col">
							<span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
								shadowctrl
							</span>
							<span className="text-xs text-gray-400 -mt-1">
								Powered by Asynx
							</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10  rounded-lg transition-all duration-200 font-medium relative group border:none"
							>
								{item.name}
								<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
							</Link>
						))}
					</div>

					{/* CTA Button & Mobile Menu */}
					<div className="flex items-center space-x-4">
						<Link
							href="/contact"
							className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
						>
							Get Quote
						</Link>

						{/* Mobile Menu */}
						<MobileMenu navigation={navigation} />
					</div>
				</div>
			</nav>

			{/* Client-side navbar effects */}
			<NavbarClient />
		</header>
	);
}
