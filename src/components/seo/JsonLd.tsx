import Script from 'next/script';

export function JsonLd() {
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': 'https://shadowctrl.me/#person',
				name: 'Shadowctrl',
				alternateName: 'Vijayaraghavan N',
				description:
					'Full Stack Developer and Founder of Asynx Private Limited',
				url: 'https://shadowctrl.me',
				image:
					'https://shadowctrl.me/assets/vijayaraghavan.jpg                                             ',
				sameAs: [
					'https://github.com/shadowctrl',
					'https://linkedin.com/in/shadowctrl',
					'https://twitter.com/_shadowctrl_',
					'https://upwork.com/freelancers/shadowctrl',
					'https://instagram.com/_.shadowctrl._',
				],
				jobTitle: 'Full Stack Developer',
				worksFor: {
					'@type': 'Organization',
					name: 'Asynx Private Limited',
					url: 'https://asynx.in',
				},
				knowsAbout: [
					'Next.js',
					'React.js',
					'Node.js',
					'TypeScript',
					'Full Stack Development',
					'E-commerce Development',
					'SaaS Development',
					'Web Development',
				],
			},
			{
				'@type': 'Organization',
				'@id': 'https://shadowctrl.me/#organization',
				name: 'Asynx Private Limited',
				url: 'https://asynx.in',
				founder: {
					'@id': 'https://shadowctrl.me/#person',
				},
				description:
					'Product and service-based company delivering high-quality web solutions',
			},
			{
				'@type': 'WebSite',
				'@id': 'https://shadowctrl.me/#website',
				url: 'https://shadowctrl.me',
				name: 'Shadowctrl Portfolio',
				description:
					'Full Stack Developer specializing in Next.js, React, and scalable web solutions',
				publisher: {
					'@id': 'https://shadowctrl.me/#person',
				},
			},
			{
				'@type': 'ProfessionalService',
				'@id': 'https://shadowctrl.me/#service',
				name: 'Full Stack Web Development Services',
				provider: {
					'@id': 'https://shadowctrl.me/#person',
				},
				serviceType: 'Web Development',
				areaServed: 'Worldwide',
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Web Development Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Full Stack Development',
								description:
									'End-to-end web application development using modern technologies',
							},
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'E-commerce Development',
								description:
									'Complete e-commerce solutions with payment integration',
							},
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'SaaS Development',
								description: 'Scalable Software-as-a-Service applications',
							},
						},
					],
				},
			},
		],
	};

	return (
		<Script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
