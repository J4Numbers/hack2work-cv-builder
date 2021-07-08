const baseConfig = require('./nyc.config.js');

module.exports = {
  ...baseConfig,
  _reportDir: './coverage/js/',
  all: true,
  exclude: [
    ...baseConfig.exclude,
    'src/ts',
  ],
  include: [
    'src/',
  ],
};
