import { GoogleAnalytics } from '@next/third-parties/google';
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
			'Vijayaraghavan Founder & Director of Asynx Devs Private Limited | Shadowctrl | Asynx Devs Pvt. Ltd',
		template: '%s | Shadowctrl',
	},
	description:
		'Founder of Asynx Devs Private Limited. One-Stop SaaS & eCommerce Partner for businesses worldwide.',

	authors: [{ name: 'Shadowctrl', url: 'https://shadowctrl.me' }],
	creator: 'Shadowctrl',
	publisher: 'Asynx Devs Private Limited',
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
		siteName: 'Vijayaraghavan Portfolio',
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
			<GoogleAnalytics gaId="G-6LSJFNRLP1" />
		</html>
	);
}
