/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static export
    basePath: '', // Replace with your actual GitHub repo name
    assetPrefix: '', // Ensures correct asset loading
    images: {
        unoptimized: true, // Needed if using next/image
    },
};

export default nextConfig;
