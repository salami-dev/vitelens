/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    webpack5: true,
    images: {
        domains: ['localhost'], // TODO: add s3 bucket here
    },
};

export default nextConfig;
