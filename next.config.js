/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = '06565';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  // Remove experimental.appDir as it's not needed in Next.js 14+
}

const withTM = require('next-transpile-modules')([]);

module.exports = withTM(nextConfig);
