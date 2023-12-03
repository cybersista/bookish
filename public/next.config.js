// module.exports = {
//     webpack: (config, { isServer }) => {
//       // Fixes npm packages that depend on `fs` module
//       if (!isServer) {
//         config.resolve.fallback = {
//           fs: false,
//           stream: require.resolve('stream-browserify'),
//           zlib: require.resolve('browserify-zlib'),
//         };
//       }
  
//       return config;
//     },
//   };
  