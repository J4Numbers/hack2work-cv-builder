const assetRoutes = require('./assets');
const actuatorRoutes = require('./actuators');
const homepageRoute = require('./homepage');

module.exports = (server) => {
  assetRoutes(server);
  actuatorRoutes(server);
  homepageRoute(server);

  return server;
};
