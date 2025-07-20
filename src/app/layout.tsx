import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import type React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/layout/Footer';
import { JsonLd } from '../components/seo/JsonLd';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://shadowctrl.me'),
	title: {
		default:
			'Shadowctrl - Full Stack Developer & Founder of Asynx Private Limited',
		template: '%s | Shadowctrl',
	},
	description:
		'Top-rated freelance full stack developer specializing in Next.js, React, and scalable web solutions. Founder of Asynx Private Limited. Building end-to-end ecommerce, SaaS applications, and custom web solutions for businesses worldwide.',
	keywords: [
		'full stack developer',
		'next.js developer',
		'react developer',
		'freelance developer',
		'web development',
		'ecommerce development',
		'saas development',
		'upwork top rated',
		'asynx private limited',
		'custom web solutions',
		'scalable applications',
		'business automation',
		'erp systems',
		'crm development',
	],
	authors: [{ name: 'Shadowctrl', url: 'https://shadowctrl.me' }],
	creator: 'Shadowctrl',
	publisher: 'Asynx Private Limited',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://shadowctrl.me',
		siteName: 'Shadowctrl Portfolio',
		title:
			'Shadowctrl - Full Stack Developer & Founder of Asynx Private Limited',
		description:
			'Top-rated freelance full stack developer specializing in Next.js, React, and scalable web solutions.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Shadowctrl - Full Stack Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Shadowctrl - Full Stack Developer & Founder of Asynx Private Limited',
		description:
			'Top-rated freelance full stack developer specializing in Next.js, React, and scalable web solutions.',
		creator: '@_shadowctrl_',
		images: ['/og-image.png'],
	},

	alternates: {
		canonical: 'https://shadowctrl.me',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
			<JsonLd />
			<Script
				type="text/javascript"
				src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
				async
			></Script>
			<body className="bg-gray-950 text-gray-100 antialiased">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
