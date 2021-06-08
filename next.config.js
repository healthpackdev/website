const author = require('./config/author-meta.json');
const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withAnalyzer({
  jsconfigPaths: true,
  distDir: 'build',
  webpack(config, { isServer, dev }) {
    if (!isServer && !dev) {
      require('./src/scripts/sitemap.js');

      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
  async redirects() {
    return author.socials.map((social) => {
      const source = `/${social.icon[1]}`; // ['fab','discord']
      const redirect = social.href;
      return {
        source: source,
        destination: redirect,
        permanent: true,
      };
    });
  },
});
