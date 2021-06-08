const config = {
  plugins: ['tailwindcss', 'postcss-combine-duplicated-selectors', 'postcss-combine-media-query'],
};
if (process.env.NODE_ENV === 'production') config.plugins.push('autoprefixer');

module.exports = config;
