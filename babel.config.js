module.exports = function(api) {
  api.cache(true);
  return {
    // Presets and plugins removed to let Vite handle transpilation.
    // Babel can be configured here later if specific plugins are needed.
    plugins: ['babel-plugin-styled-components'],
  };
};

