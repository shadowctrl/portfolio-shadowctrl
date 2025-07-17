'use client';

import type React from 'react';

import { CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { handleAction } from '../../app/contact/action';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		setIsSubmitted(true);
		setIsSubmitting(false);

		try {
			await handleAction(formData);
		} catch (error) {
			console.error('Error sending emails:', error);
		}

		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ name: '', email: '', subject: '', message: '' });
		}, 3000);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	if (isSubmitted) {
		return (
			<div className="card text-center">
				<CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
				<h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
				<p className="text-gray-300">
					Thank you for reaching out. I'll get back to you within 24 hours.
				</p>
			</div>
		);
	}

	return (
		<div className="card">
			<h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-300 mb-2"
						>
							Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-300 mb-2"
						>
							Email *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
							placeholder="your@email.com"
						/>
					</div>
				</div>

				<div>
					<label
						htmlFor="subject"
						className="block text-sm font-medium text-gray-300 mb-2"
					>
						Subject *
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
						placeholder="Project inquiry"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-300 mb-2"
					>
						Message *
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={6}
						className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
						placeholder="Tell me about your project..."
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? (
						<>
							<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
							Sending...
						</>
					) : (
						<>
							Send Message
							<Send className="ml-2 h-4 w-4" />
						</>
					)}
				</button>
			</form>
		</div>
	);
}
