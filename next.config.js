const author = require('./config/author-meta.json');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

/**
 * @type import('next/dist/next-server/server/config-shared').NextConfig
 */
module.exports = {
  experimental: { esmExternals: 'loose' },
  webpack(config, { isServer, dev }) {
    if (isServer) {
      require('./src/lib/sitemap.js');
    }

    // replace preact with react
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
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
