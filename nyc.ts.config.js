const baseConfig = require('./nyc.config.js');

module.exports = {
  ...baseConfig,
  _reportDir: './coverage/ts/',
  all: false,
  include: [
    'src/ts/**/*.ts',
  ],
};
