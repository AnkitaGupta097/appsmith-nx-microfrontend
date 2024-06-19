/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
module.exports = {
  name: 'auth',
  exposes: {
    './Auth': './src/features/Auth.tsx',
    './SignIn': './src/features/SignIn/index.tsx',
  },
  shared: (name, config) => {
    return false;
  },
  additionalShared: [
    {
      libraryName: 'react',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.2.0',
      },
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.2.0',
      },
    },
    {
      libraryName: 'react/jsx-dev-runtime',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.2.0',
      },
    },
  ],
};
