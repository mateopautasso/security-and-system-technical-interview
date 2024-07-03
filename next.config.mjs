/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'imgur.com',
			},
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
			},
		],
	},
}

export default nextConfig
