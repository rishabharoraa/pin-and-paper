/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.pexels.com", "www.pexels.com"],
	},
};

module.exports = nextConfig;
