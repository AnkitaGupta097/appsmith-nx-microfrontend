/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
module.exports = {
  name: 'mfe-monorepo',
  remotes: ["hero", "auth", "temp-mf"],
  shared: (name, config) => {
    return false;
  },
  additionalShared: [
    {
      libraryName: 'react',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.2.0'
      }
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.2.0'
      }
    },
    {
      libraryName: 'react/jsx-dev-runtime',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.2.0'
      }
    },
    {
      libraryName: '@mfe-monorepo/event-bus',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '0.0.1'
      }
    }
  ]
}