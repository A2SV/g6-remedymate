import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		viewTransition: true,
		globalNotFound: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.jsdelivr.net',
			},
		],
	},
};

export default nextConfig;
