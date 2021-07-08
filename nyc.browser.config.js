const baseConfig = require('./nyc.config.js');

module.exports = {
  ...baseConfig,
  _reportDir: './coverage/browser/',
  all: true,
  exclude: [
    ...baseConfig.exclude,
    'src/ts',
  ],
};
