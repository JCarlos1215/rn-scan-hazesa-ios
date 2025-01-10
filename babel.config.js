module.exports = {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },}
    // plugins: [
    //   [
    //     'module:react-native-dotenv',
    //     {
    //       moduleName: '@env',
    //       path: '.env', // Ruta del archivo de entorno
    //       safe: false, // Deshabilitar si no tienes un archivo .env.example
    //       allowUndefined: false,
    //     },
    //   ],
    // ],
  };
  