import { Building2, Clock, ExternalLink, Mail, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import ContactForm from '../../components/forms/ContactForm';

export const metadata: Metadata = {
	title:
		'Contact Shadowctrl - Get Your Web Development Project Started | Asynx',
	description:
		'Ready to start your web development project? Contact Shadowctrl for a free consultation through Asynx Private Limited. Quick response time and personalized solutions for your business needs.',
	keywords: [
		'contact shadowctrl',
		'web development consultation',
		'freelance developer contact',
		'project quote',
		'web development services',
		'hire full stack developer',
		'asynx contact',
	],
};

const contactInfo = [
	{
		icon: Mail,
		title: 'Email',
		content: 'admin@shadowctrl.me',
		href: 'mailto:admin@shadowctrl.me',
	},
	// {
	//   icon: Phone,
	//   title: "Phone",
	//   content: "+1 (555) 123-4567",
	//   href: "tel:+15551234567",
	// },
	{
		icon: MapPin,
		title: 'Location',
		content: 'Available Worldwide',
		href: null,
	},
	{
		icon: Clock,
		title: 'Response Time',
		content: 'Within 24 hours',
		href: null,
	},
];

export default function ContactPage() {
	return (
		<div className="pt-24">
			<section className="section">
				<div className="container">
					<div className="text-center mb-16">
						<h1 className="text-4xl sm:text-5xl font-bold mb-6">
							Let's Work <span className="text-gradient">Together</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Have a project in mind? Let's discuss how I can help bring your
							vision to life.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-2xl font-bold text-white mb-8">
								Get in Touch
							</h2>
							<div className="space-y-6 mb-8">
								{contactInfo.map((info, index) => {
									const Icon = info.icon;
									const content = info.href ? (
										<a
											href={info.href}
											className="text-purple-400 hover:text-purple-300 transition-colors"
										>
											{info.content}
										</a>
									) : (
										<span className="text-gray-300">{info.content}</span>
									);

									return (
										<div key={index} className="flex items-center">
											<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
												<Icon className="h-6 w-6 text-purple-400" />
											</div>
											<div>
												<div className="text-white font-medium">
													{info.title}
												</div>
												<div>{content}</div>
											</div>
										</div>
									);
								})}
							</div>

							<div className="card mb-8">
								<h3 className="text-lg font-semibold text-white mb-4">
									Project Timeline
								</h3>
								<div className="space-y-3 text-sm">
									<div className="flex justify-between">
										<span className="text-gray-400">Small Projects:</span>
										<span className="text-white">1-2 weeks</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-400">Medium Projects:</span>
										<span className="text-white">3-6 weeks</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-400">Large Projects:</span>
										<span className="text-white">2-4 months</span>
									</div>
								</div>
							</div>

							{/* Asynx Company Card */}
							<div className="card bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/30">
								<div className="flex items-center mb-4">
									<Building2 className="h-6 w-6 text-purple-400 mr-3" />
									<h3 className="text-lg font-semibold text-white">
										Asynx Private Limited
									</h3>
								</div>
								<p className="text-gray-300 text-sm mb-4">
									Professional web development services with a focus on
									scalable, modern solutions for businesses of all sizes.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-xs text-gray-400">
										Design • Development • Growth
									</div>
									<a
										href="https://asynx.in"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
									>
										<ExternalLink className="h-4 w-4 mr-1" />
										Visit Website
									</a>
								</div>
							</div>
						</div>

						<div>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
