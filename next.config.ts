import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',              
        destination: '/discography', 
        permanent: false,         
      },
    ];
  },
};

export default nextConfig;
