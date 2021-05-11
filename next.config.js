const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  {
    future: { webpack5: true },
    jsconfigPaths: true,
    distDir: 'build',
    webpack(config, { isServer, dev }) {
      if (isServer && !dev) {
        require('./src/scripts/sitemap.js');
        // generate a site map.
      }
      return config;
    },
  },
]);
