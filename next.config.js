const author = require('./config/author-meta.json');
/**
 * @type import('next/dist/next-server/server/config-shared').NextConfig
 */
module.exports = {
  webpack(config, { isServer, dev }) {
    if (isServer) {
      require('./src/lib/sitemap.js');
    }

    // Replace React with Preact only in client production build

    if (!dev && !isServer) {
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
};
