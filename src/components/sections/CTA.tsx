import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const benefits = [
	'Top-rated Upwork freelancer',
	'Proven track record with 30+ clients',
	'Full-stack expertise',
	'Ongoing support & maintenance',
	'Scalable & maintainable code',
	'Client-first approach',
];

export default function CTA() {
	return (
		<section className="section">
			<div className="container">
				<div className="relative">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-3xl opacity-20"></div>
					<div className="relative glass rounded-3xl p-8 lg:p-12">
						<div className="text-center mb-12">
							<h2 className="text-3xl sm:text-4xl font-bold mb-6">
								Ready to Build Something{' '}
								<span className="text-gradient">Amazing</span>?
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
								Let's discuss your project and turn your ideas into reality. I'm
								here to help you build scalable, high-performance web solutions.
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h3 className="text-2xl font-bold text-white mb-6">
									Why Choose Me?
								</h3>
								<div className="grid sm:grid-cols-2 gap-4">
									{benefits.map((benefit, index) => (
										<div key={index} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
											<span className="text-gray-300">{benefit}</span>
										</div>
									))}
								</div>
							</div>

							<div className="text-center lg:text-left">
								<div className="mb-8">
									<div className="text-4xl font-bold text-white mb-2">50+</div>
									<div className="text-gray-400">Projects Completed</div>
								</div>
								<div className="space-y-4">
									<Link
										href="/contact"
										className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
									>
										Start Your Project
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
									<div className="text-gray-400 text-sm">
										Free consultation • Quick response • No commitment required
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
