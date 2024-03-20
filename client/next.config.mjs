/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'vitelens-storage-dev.s3.us-east-1.amazonaws.com', 
              port: '', // Add the port if it's not the standard HTTPS port (443)
              pathname: '/**', // Catch all paths within the hostname
            },
          ],
    },
};

export default nextConfig;
