const author = require('./config/author-meta.json');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: { esmExternals: 'loose' },
  webpack(config, { isServer, dev }) {
    if (isServer) {
      require('./src/lib/sitemap.js');
    }

    // analyze client and server the bundle in ANALYZE mode.
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new StatoscopeWebpackPlugin({
          saveReportTo: `.next/analyze/report-${isServer ? 'server' : 'client'}.html`,
          saveStatsTo: `.next/analyze/stats-${isServer ? 'server' : 'client'}.json`,
        })
      );
    }

    return config;
  },
  async redirects() {
    return author.socials.map((social) => {
      const source = `/${social.icon}`; // 'name'
      const redirect = social.href;
      return {
        source: source,
        destination: redirect,
        permanent: true,
      };
    });
  },
};
