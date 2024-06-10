const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');
const moduleFederationConfig =require('./module-federation.config');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
//const pathBrowserify = require.resolve('path-browserify')

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation({...moduleFederationConfig}),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    //config.resolve.fallback.push({"path": require.resolve('path-browserify')})
    //config.resolve.fallback = {"path": require.resolve('path-browserify')}
    //config.ignoreWarnings=[/Failed to parse source map/]
    config.plugins.push(
      new FederatedTypesPlugin({
        federationConfig : {
          ...moduleFederationConfig,
          filename: 'remoteEntry.js',
          remotes: {
            hero: 'hero@http://localhost:3001/remoteEntry.js'
          }
        }
      })
    )

    config.resolve.fallback = {
      ...config.resolve.fallback,
      path:false,
    };
    config.ignoreWarnings=[/Failed to parse source map/]
    return config;
  }
);
