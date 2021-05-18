const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  {
    future: { webpack5: true },
    jsconfigPaths: true,
    distDir: 'build',
    webpack(config, { isServer, dev }) {
      if (isServer && process.env.NODE_ENV === "production") {
        require('./src/scripts/sitemap.js');
        // require('./src/scripts/favicons.js'); depreceted
      }
      return config;
    },
  },
]);
