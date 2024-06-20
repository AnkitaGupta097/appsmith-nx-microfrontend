const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const moduleFederationConfig = require('./module-federation.config');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const { withModuleFederation } = require('@nx/react/module-federation');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), withModuleFederation({ ...moduleFederationConfig }), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(
    new FederatedTypesPlugin({
      federationConfig: {
        ...moduleFederationConfig,
        filename: 'remoteEntry.js'
      }
    })
  )

  config.devServer = {
    ...config.devServer,
    static: config.output.path
  }
  return config;
});
