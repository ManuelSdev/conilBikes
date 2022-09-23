/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
    // Looks like backward compatibility approach.
  },
  */
  images: {
    domains: ['www.sbbikestogo.com', 'assets.specialized.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
