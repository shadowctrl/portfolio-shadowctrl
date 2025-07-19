import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../../constants/testimonials.constant';

export default function Testimonials() {
	return (
		<section id="testimonials" className="section bg-gray-900/30">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Client <span className="text-gradient">Testimonials</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						What my clients say about working with me
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card justify-between flex-col flex">
							<div>
								<div className="flex items-center mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 text-yellow-400 fill-current"
										/>
									))}
								</div>

								<Quote className="h-8 w-8 text-purple-500 mb-4" />

								<p className="text-gray-300 mb-6 italic">
									"{testimonial.content}"
								</p>
							</div>
							<div>
								<div className="flex items-center">
									<div>
										<h4 className="text-white font-semibold">
											{testimonial.name}
										</h4>
										<p className="text-gray-400 text-sm">{testimonial.role}</p>
										<p className="text-purple-400 text-sm">
											{testimonial.company}
										</p>
									</div>
								</div>

								<div className="mt-4 pt-4 border-t border-gray-800">
									<span className="text-xs text-gray-500">
										Project: {testimonial.project}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<p className="text-gray-300 mb-6">
						Ready to join these satisfied clients?
					</p>
					<a href="/contact" className="btn-primary">
						Start Your Project
					</a>
				</div>
			</div>
		</section>
	);
}
