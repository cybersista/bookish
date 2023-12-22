// babel.config.js
module.exports = function (api) {
  const isDevelopment = api.env('development');

  return {
    presets: [
      ['@babel/preset-env', { targets: 'defaults' }],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-private-property-in-object',
      isDevelopment && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
