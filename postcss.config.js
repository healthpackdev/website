const config = {
  plugins: ['tailwindcss',  'postcss-combine-duplicated-selectors'],
};
if (process.env.NODE_ENV === 'production') config.plugins.push('autoprefixer');

module.exports = config;
