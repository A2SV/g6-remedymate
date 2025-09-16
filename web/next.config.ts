import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		viewTransition: true,
		globalNotFound: true,
	},
};

export default nextConfig;
