const assetRoutes = require('./assets');
const actuatorRoutes = require('./actuators');
const homepageRoute = require('./homepage');
const claimantRoutes = require('./claimant');
const referralRoutes = require('./referral');
const reviewRoutes = require('./review');

module.exports = (server) => {
  assetRoutes(server);
  actuatorRoutes(server);
  homepageRoute(server);
  claimantRoutes(server);
  referralRoutes(server);
  reviewRoutes(server);

  return server;
};
