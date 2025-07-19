import { Clock, Mail, MapPin } from 'lucide-react';
import ContactForm from '../forms/ContactForm';

const contactInfo = [
	{
		icon: Mail,
		title: 'Email',
		content: 'admin@shadowctrl.me',
		href: 'mailto:admin@shadowctrl.me',
	},
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

export default function Contact() {
	return (
		<section id="contact" className="section bg-gray-900/30">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Let's Work <span className="text-gradient">Together</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Have a project in mind? Let's discuss how I can help bring your
						vision to life.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
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
											<div className="text-white font-medium">{info.title}</div>
											<div>{content}</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="card">
							<h4 className="text-lg font-semibold text-white mb-4">
								Project Timeline
							</h4>
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
					</div>

					<div>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
