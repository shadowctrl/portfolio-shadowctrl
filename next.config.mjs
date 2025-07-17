/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/works',
				destination: '/portfolio',
				permanent: true,
			},
			{
				source: '/aboutme',
				destination: '/about',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
