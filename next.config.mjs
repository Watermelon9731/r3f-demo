/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

const nextConfig = {
  transpilePackages: ["three"],
};

export default nextConfig;
