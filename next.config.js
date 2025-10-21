/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = '06565';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

// Remove next-transpile-modules if not needed
// const withTM = require('next-transpile-modules')([]);
// module.exports = withTM(nextConfig);

module.exports = nextConfig;
